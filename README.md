# drolet.ai

Consulting website for [drolet.ai](https://drolet.ai). Built with Next.js (App Router) and deployed to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Cloudflare Pages builds automatically from the `main` branch using:

- **Build command:** `npm run deploy`
- **Output directory:** `.open-next/assets`

To build locally for Cloudflare:

```bash
npm run deploy
```

To preview the Cloudflare build locally:

```bash
npx wrangler pages dev
```

## Infrastructure

Cloudflare resources (Pages project, DNS, custom domain) are provisioned via Terraform in `bdrolet/infra → cloudflare/`. This repo covers app code only.
