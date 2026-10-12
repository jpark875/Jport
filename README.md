# jport

Personal developer and analytics portfolio. Next.js, React and Tailwind CSS.

## Develop

```
npm install
npm run dev      # http://localhost:3000
npm run lint     # type check
npm run build
```

## Structure

- `app/` layout, home page, `research/[slug]` paper pages, 404, sitemap, robots, icon
- `components/` page sections and cards
- `content/research/` one JSON file per research entry
- `data/projects.ts` the software projects; add an entry to add a card
- `data/site.ts` name, role, statement, site URL and contact links (empty links are hidden)
- `data/experience.ts` roles, newest first; drafts show only in `npm run dev`
- `data/background.ts` education and skills
- `lib/research.ts` loads and validates research entries at build time

## Adding research

1. Copy `content/research/_template.json` to `content/research/<slug>.json`. The file name
   becomes the URL: `/research/<slug>`.
2. Fill in `title`, `status` (`completed` or `in-progress`), `date` (`2026` or `2026-04`),
   `authors`, `summary` and `tags`. Everything else is optional.
3. Add an `abstract` or `findings` to give the entry its own page. Drop a PDF into
   `public/research/` and set `"pdf": "/research/<file>.pdf"` for a download link.
   Optional extras: `stats` (up to three headline numbers shown on the card and page),
   `documents` (more files, such as a policy memo) and `figure` (an image with alt text).
4. `"draft": true` keeps an entry off the live site while still showing it in `npm run dev`.
   Drafted in-progress work still counts toward the "projects in progress" line.

`npm run build` fails with the file name and the problem if an entry is malformed or its PDF
is missing. Files starting with `_` are ignored.

The ongoing project is in `content/research/ongoing-project.json` as a draft; fill it in and
remove `"draft": true` when it is ready to show.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin (for example on Vercel) so share previews
and the sitemap use absolute links. Projects in private repositories show "Private repo"
instead of a source link; flip `isPublic` in `data/projects.ts` when a repo goes public.

## Design system

Text-first and flat: no cards, shadows, gradients or rounded corners.

- **Type:** Inter for headings and body, JetBrains Mono for dates, tags and labels. Two
  weights only (400, 500). The hero name runs up to 72px; other headlines 22-48px against
  15-16px body at line-height 1.6.
  Uppercase labels get extra tracking.
- **Color:** `#111111` text on `#ffffff`. `#666666` only for dates, metadata and captions.
  Structure comes from 1px rules: `border-[#111111]` between sections, `border-neutral-200`
  between items.
- **Layout:** each section is a 30/70 split, label left and content right, stacking on small
  screens. Lists are numbered (`01 / Title`) with bracketed labels such as `[ Python ]`;
  projects sit in a two-column grid, each item opened by a 1px rule.
- **Links:** plain text, underline on hover.

Shared class strings live in `lib/ui.ts`.
