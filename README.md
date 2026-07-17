# NextGen AI Training Institute — Website

A React + Vite marketing site for NextGen AI Training Institute, inspired by the structure
of medhaedutech.com, with a distinct "schematic / circuit" visual identity.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home
- `/courses` — All courses (filterable by category)
- `/courses/:slug` — Full course detail page (curriculum, roadmap, FAQ, enroll form)
- `/internships` — Internship-paired tracks
- `/placements` — Placement process & outcomes
- `/about` — About the institute
- `/testimonials` — Student reviews
- `/blog` — Blog listing
- `/contact` — Contact + lead form

## Editing content

- Courses: `src/data/courses.js` — one object per course (fees, curriculum, FAQs, etc.)
- Testimonials: `src/data/testimonials.js`
- Design tokens (colors, type, spacing): top of `src/index.css`
