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

- `app/` layout (fonts, metadata) and the single page
- `components/` Header, Hero, Projects, ProjectCard, Footer
- `data/projects.ts` the project list; add an entry to add a card

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
