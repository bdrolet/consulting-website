# Frontend Observability with Grafana Faro

drolet.ai uses [Grafana Faro](https://grafana.com/oss/faro/) for real-user monitoring (RUM). This document explains what is collected, how it was set up, and how to access the data.

## What gets collected

| Signal | Detail |
|---|---|
| Page views | Tracked per route (`/`, `/services`, `/about`, `/contact`) on every navigation |
| Web Vitals | LCP, CLS, INP, FCP, TTFB — measured automatically per page |
| JS errors | Unhandled exceptions with stack traces |
| User sessions | Persistent session IDs linking navigations within a visit |
| Distributed traces | HTTP request traces via OpenTelemetry |

## Architecture

The site is a static export deployed on Cloudflare Pages — there is no server-side code. All instrumentation runs in the browser and POSTs directly to the Grafana Cloud Faro collector endpoint.

```
Browser (drolet.ai)
  └── FaroInit component (client-side)
        ├── Web Vitals, errors, performance → Grafana Cloud Faro Collector
        └── OTel traces → Grafana Cloud Faro Collector
```

## How it was set up

### Step 1 — Install the Faro SDKs

```bash
npm install @grafana/faro-web-sdk @grafana/faro-web-tracing
```

### Step 2 — Create the Grafana Cloud app

1. Sign in at [grafana.com](https://grafana.com) → **My Account** → launch your Grafana instance
2. In the left nav, go to **Observability** → **Frontend**
3. Click **Add new app**
4. Set the name (e.g. `drolet-ai`), add your domain (`https://drolet.ai`), enable persistent sessions, set sampling to 100%
5. Copy the generated collector URL — it looks like:
   `https://faro-collector-prod-us-west-0.grafana.net/collect/<app-id>`

### Step 3 — Create `app/components/FaroInit.tsx`

A `"use client"` React component that initializes Faro once (singleton) and tracks route changes:

```tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getWebInstrumentations, initializeFaro, type Faro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

let faro: Faro | null = null;

function getFaro(): Faro | null {
  if (faro) return faro;

  faro = initializeFaro({
    url: "<your-collector-url>",
    app: {
      name: "<your-app-name>",
      version: "1.0.0",
      environment: "production",
    },
    sessionTracking: {
      samplingRate: 1,
      persistent: true,
    },
    instrumentations: [
      ...getWebInstrumentations(),
      new TracingInstrumentation(),
    ],
  });

  return faro;
}

export default function FaroInit() {
  const pathname = usePathname();

  useEffect(() => {
    getFaro()?.api.setView({ name: pathname });
  }, [pathname]);

  return null;
}
```

Key implementation details:
- The module-level `faro` variable acts as a singleton guard — `initializeFaro` is only called once even if React renders the component multiple times
- `faro.api.setView()` tells Faro the current page name on every client-side navigation (Next.js doesn't trigger full page reloads)
- The collector URL is safe to hardcode — it's a public endpoint embedded in client JS by design

### Step 4 — Mount in the root layout

Add `<FaroInit />` to `app/layout.tsx` inside `<body>`, before `<main>`:

```tsx
import FaroInit from "./components/FaroInit";

// inside RootLayout's return:
<body>
  <FaroInit />
  <main>{children}</main>
</body>
```

### Step 5 — Deploy

Push to `main`. Cloudflare Pages builds and deploys automatically. No environment variables are needed since the collector URL is hardcoded.

## Viewing the data in Grafana Cloud

1. Go to your Grafana instance → **Observability** → **Frontend**
2. Select the `drolet-ai` app
3. The pre-built dashboard shows:
   - Session count and page views over time
   - Web Vitals scores per page
   - Error list with stack traces
   - Trace waterfall for HTTP requests

Data appears within ~30 seconds of a live visit.

## Alerts configured

| Alert | Condition |
|---|---|
| New Errors | Fires when new JS errors appear in the last 24h |
| Web Vitals - LCP | Fires when LCP > 4000ms for the last 6h |

## Self-hosting / migrating off Grafana Cloud

The collector URL is the only Grafana-specific coupling. To self-host:

1. Run [Grafana Alloy](https://grafana.com/oss/alloy/) with the Faro receiver enabled
2. Update the `url` in `FaroInit.tsx` to point at your Alloy instance
3. No other code changes required

Alternatively, switch to pure OpenTelemetry (`@opentelemetry/sdk-metrics` + OTLP HTTP exporter) for a fully vendor-neutral approach.
