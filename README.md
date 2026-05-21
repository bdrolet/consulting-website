# drolet.ai

Consulting website for [drolet.ai](https://drolet.ai). Built with Next.js (App Router) and deployed to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Pushing to `main` triggers an automatic Cloudflare Pages build via the GitHub integration.

- **Build command:** `next build`
- **Output directory:** `out`

The site uses `output: 'export'` in `next.config.ts`, so `next build` produces a fully static site in `out/` — no server runtime or Worker needed.

## Infrastructure

Cloudflare resources (Pages project, DNS, custom domain) are provisioned via Terraform in `bdrolet/infra → cloudflare/`. This repo covers app code only.
