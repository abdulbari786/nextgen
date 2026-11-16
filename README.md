# NextGen AI Training Institute

Standalone NextGen website. The homepage is `/`. Built with Next.js, React, TypeScript and the existing blue-and-white NextGen design.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3401.

## Verify and build

```sh
npm run build
npm run typecheck
```

The default build exports to `out/`. Vercel builds use its Next.js runtime and image optimisation. Set `NEXT_PUBLIC_SITE_URL` to the actual standalone origin before deployment so canonical links, social metadata, structured data and the sitemap use the correct domain. No production domain is assumed.

## Content

Course copy: `src/content/nextgen.ts` and `src/content/nextgen-page.ts`. Instagram archive: `src/content/nextgen-instagram.json`; source notes: `docs/NEXTGEN_INSTAGRAM.md`. Shared contact details: `src/content/site.ts`.

Enquiries use the existing NextGen phone and WhatsApp number. There is no backend or lead collection form. Historical poster dates and prices remain labelled as archive material.
