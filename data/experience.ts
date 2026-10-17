export type Role = {
  title: string;
  org: string;
  place?: string;
  start: string;
  end?: string;
  points?: string[];
  draft?: boolean;
};

export const experience: Role[] = [
  {
    title: "Research & Policy Analyst Intern",
    org: "Kids at Risk Action (KARA)",
    place: "Minneapolis, MN",
    start: "Jun 2026",
    end: "Aug 2026",
    points: [
      "Quantified Minnesota's annual cost of child-welfare inaction at $4.2 billion by hand-coding ACE exposure in a de-identified 20-year case panel in Python and applying CDC lifetime-cost estimates.",
      "Benchmarked prevention spending against WSIPP benefit-cost ratios; documented assumptions in Python and Excel.",
      "Authored a state appropriations policy paper and 6 short-form briefing videos for Minnesota legislators.",
    ],
  },
  {
    title: "Research Assistant",
    org: "University of Virginia",
    place: "Charlottesville, VA",
    start: "Jan 2026",
    end: "May 2026",
    points: [
      "Showed fast-food density does not robustly predict preventable ED visits once income is controlled (p = 0.24); median household income was the strongest predictor (p = 0.004) across 62 NY counties.",
      "Built a 372-observation county-year panel in Stata from NY SPARCS, USDA Food Atlas and Census ACS data via a HUD ZIP-to-county crosswalk; ran pooled OLS with clustered errors and VIF tests.",
    ],
  },
  {
    title: "Data Analyst Intern",
    org: "Cita Reservations",
    place: "Chicago, IL",
    start: "Jun 2024",
    end: "Aug 2024",
    points: [
      "Raised customer engagement 4% by building Python models that score each customer's repeat-booking likelihood.",
      "Analyzed 250,000+ booking records in Excel and BI tools; cancellation findings reshaped reminder timing.",
    ],
  },
  {
    title: "Analyst",
    org: "Virginia Consulting Group",
    place: "Charlottesville, VA",
    start: "Sep 2023",
    end: "Sep 2025",
    points: [
      "Sized markets and mapped competitors for 3 small-business clients across semester-long engagements.",
      "Named Featured Presenter (2024) at the client showcase after presenting recommendations to client leadership.",
    ],
  },
];
