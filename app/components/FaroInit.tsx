"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getWebInstrumentations, initializeFaro, type Faro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

let faro: Faro | null = null;

function getFaro(): Faro | null {
  if (faro) return faro;

  faro = initializeFaro({
    url: "https://faro-collector-prod-us-west-0.grafana.net/collect/7c536a3e4d49b21a01b0cb91511180c4",
    app: {
      name: "drolat-ai",
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
