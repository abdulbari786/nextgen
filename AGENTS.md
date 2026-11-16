# NextGen website

Read C:/dev/AGENTS.md for inherited working rules.

This is the standalone NextGen AI Training Institute website. `/` is its homepage; it is not a subpage or build of Abdul's Academy.

Preserve the existing blue-and-white design, Schibsted Grotesk typography, original NextGen logo and authentic institute photographs. Content lives in src/content; Instagram source links are documented in docs/NEXTGEN_INSTAGRAM.md. Do not invent course fees, placement claims, testimonials or batch schedules. Enquiries use phone and WhatsApp links; no backend is implemented.

Run npm run dev (port 3401), npm run build and npm run typecheck. Set NEXT_PUBLIC_SITE_URL to the confirmed standalone domain before deployment. Do not copy .env.local or deployment links from other projects. Never commit or push without explicit instructions.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
