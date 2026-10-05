export type Role = {
  title: string;
  org: string;
  place?: string;
  start: string; // e.g. "Jun 2026"
  end?: string; // omit for "Present"
  note?: string; // one line, the key result
  // Drafts show in `npm run dev` only.
  draft?: boolean;
};

// Newest first.
export const experience: Role[] = [
  {
    title: "Research & Policy Analyst Intern",
    org: "Kids at Risk Action (KARA)",
    place: "Minneapolis, MN",
    start: "Jun 2026",
    end: "Aug 2026",
    note: "Estimated Minnesota's annual cost of child-welfare inaction at $4.2 billion from a 20-year case panel; wrote a state appropriations policy paper.",
  },
  {
    title: "Research Assistant",
    org: "University of Virginia",
    place: "Charlottesville, VA",
    start: "Jan 2026",
    end: "May 2026",
    note: "Co-authored the fast-food density paper under Research: a 372-observation county panel in Stata, pooled OLS with clustered errors.",
  },
  {
    title: "Data Analyst Intern",
    org: "Cita Reservations",
    place: "Chicago, IL",
    start: "Jun 2024",
    end: "Aug 2024",
    note: "Python models scoring repeat-booking likelihood raised customer engagement 4%; analyzed 250,000+ booking records.",
  },
  {
    title: "Analyst",
    org: "Virginia Consulting Group",
    place: "Charlottesville, VA",
    start: "Sep 2023",
    note: "Market sizing and competitive analysis on three client engagements; Featured Presenter, 2024.",
  },
];
