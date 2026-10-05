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
- `data/site.ts` name, role, site URL and contact links (empty links are hidden)
- `lib/research.ts` loads and validates research entries at build time

## Adding research

1. Copy `content/research/_template.json` to `content/research/<slug>.json`. The file name
   becomes the URL: `/research/<slug>`.
2. Fill in `title`, `status` (`completed` or `in-progress`), `date` (`2026` or `2026-04`),
   `authors`, `summary` and `tags`. Everything else is optional.
3. Add an `abstract` or `findings` to give the entry its own page. Drop a PDF into
   `public/research/` and set `"pdf": "/research/<file>.pdf"` for a download link.
4. `"draft": true` keeps an entry off the live site while still showing it in `npm run dev`.
   Drafted in-progress work still counts toward the "projects in progress" line.

`npm run build` fails with the file name and the problem if an entry is malformed or its PDF
is missing. Files starting with `_` are ignored.

The two ongoing projects are in `content/research/ongoing-project-*.json` as drafts; fill them
in and remove `"draft": true` when they are ready to show.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin (for example on Vercel) so share previews
and the sitemap use absolute links. Projects in private repositories show "Private repo"
instead of a source link; flip `isPublic` in `data/projects.ts` when a repo goes public.

## Design system

Dark editorial monochrome. Colors are written directly in class names and are not
redefined in the Tailwind theme.

| Token | Value |
|---|---|
| Background | `#0D0E11` |
| Card | `#13151A` |
| Text / muted | `#E2E8F0` / `#94A3B8` |
| Accent | `#38BDF8` |
| Border | `#1E293B` |

Space Grotesk for headings, JetBrains Mono for body and tags. Cards use
`rounded-md border border-[#1E293B] bg-[#13151A]`. No shadows, blurs or gradients, and
layouts are asymmetric (60/40) rather than centered grids. Every project card carries a
`text-xs font-mono` tags row.
