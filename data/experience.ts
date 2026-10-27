export type Role = {
  title: string;
  org: string;
  place?: string;
  start: string;
  end?: string;
  kind: "professional" | "research";
  points?: string[];
  draft?: boolean;
};

export const experience: Role[] = [
  {
    title: "Research & Policy Analyst Intern",
    org: "Kids at Risk Action (KARA)",
    kind: "professional",
    place: "Minneapolis, MN",
    start: "Jun 2026",
    end: "Aug 2026",
    points: [
      "Built the de-identified 20-year case panel behind the team's $4.2 billion estimate of Minnesota's annual cost of child-welfare inaction, hand-coding ACE exposure and time to permanency in Python.",
      "Benchmarked prevention spending against WSIPP benefit-cost ratios; documented assumptions in Python and Excel.",
      "Authored a state appropriations policy paper and 6 short-form briefing videos for Minnesota legislators.",
    ],
  },
  {
    title: "Analyst",
    org: "Virginia Consulting Group",
    kind: "professional",
    place: "Charlottesville, VA",
    start: "Sep 2023",
    end: "Sep 2025",
    points: [
      "Built bottom-up and top-down market-sizing models in Excel from Census and industry data for 3 small businesses.",
      "Mapped 5–10 local competitors per client on pricing, hours, reviews, bundles and marketing channels to find gaps.",
      "Presented 10–15-slide decks to owners; client leadership voted ours the cohort's best (Featured Presenter, 2024).",
    ],
  },
  {
    title: "Research Assistant",
    org: "University of Virginia",
    kind: "research",
    place: "Charlottesville, VA",
    start: "Jan 2026",
    end: "May 2026",
    points: [
      "Showed fast-food density does not robustly predict preventable ED visits once income is controlled; median household income was the strongest predictor (p = 0.004) across 62 NY counties.",
      "Built a 372-observation county-year panel in Stata from NY SPARCS, USDA Food Atlas and Census ACS data via a HUD ZIP-to-county crosswalk; ran pooled OLS with clustered errors and VIF tests.",
    ],
  },
];
