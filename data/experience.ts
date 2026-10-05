export type Role = {
  title: string;
  org: string;
  start: string; // e.g. "2025"
  end?: string; // omit for "Present"
  // Drafts show in `npm run dev` only.
  draft?: boolean;
};

// Newest first. Replace the placeholders and remove `draft` to publish.
export const experience: Role[] = [
  { title: "[Role title]", org: "[Company]", start: "2025", draft: true },
  { title: "[Role title]", org: "[Company]", start: "2024", end: "2025", draft: true },
];
