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
      "Constructed the de-identified 20-year case panel underpinning KARA's $4.2 billion estimate of Minnesota's annual cost of child-welfare inaction, hand-coding ACE exposure and time to permanency in Python.",
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
      "Developed bottom-up and top-down TAM models from Census and industry data to assess 3 clients' expansion plans.",
      "Profiled 5–10 competitors per client on pricing, hours, review sentiment and channels to diagnose customer losses.",
      "Named Featured Presenter (2024) after client leadership voted our recommendations the cohort's best presentation.",
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
      "Demonstrated fast-food density does not significantly predict preventable ED visits once income is controlled; median household income was the strongest predictor (p = 0.004) across 62 NY counties.",
      "Built a 372-observation county-year panel in Stata from NY SPARCS, USDA Food Atlas and Census ACS data via a HUD ZIP-to-county crosswalk; ran pooled OLS with clustered errors and VIF tests.",
    ],
  },
];
