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
      "Built a de-identified panel dataset of 20+ years of child-welfare case narratives in Python, hand-coding Adverse Childhood Experiences (ACE) exposure and time-to-permanency.",
      "Estimated Minnesota's annual cost of child-welfare inaction at $4.2 billion using CDC lifetime-cost estimates.",
      "Conducted cost-benefit analysis of prevention spending against Washington State Institute for Public Policy (WSIPP) benefit-cost ratios; documented model assumptions in Python and Excel.",
      "Authored a state appropriations policy paper and produced 6 short-form briefing videos for state legislators.",
    ],
  },
  {
    title: "Research Assistant",
    org: "University of Virginia",
    place: "Charlottesville, VA",
    start: "Jan 2026",
    end: "May 2026",
    points: [
      "Co-authored an empirical study testing whether fast-food density increases preventable emergency department (ED) visits among Medicaid-eligible populations across 62 New York counties.",
      "Merged NY SPARCS hospital, USDA Food Environment Atlas, and U.S. Census ACS data into a 372-observation county-year panel (2011–2016) in Stata using a HUD ZIP-to-county crosswalk.",
      "Ran pooled OLS with clustered standard errors and VIF tests; income was the strongest predictor (p < 0.01).",
    ],
  },
  {
    title: "Data Analyst Intern",
    org: "Cita Reservations",
    place: "Chicago, IL",
    start: "Jun 2024",
    end: "Aug 2024",
    points: [
      "Built Python predictive models scoring repeat-booking likelihood, raising customer engagement by 4%.",
      "Analyzed 250,000+ booking records in Excel and BI tools; findings on cancellations shaped reminder timing.",
    ],
  },
  {
    title: "Analyst",
    org: "Virginia Consulting Group",
    place: "Charlottesville, VA",
    start: "Sep 2023",
    points: [
      "Led market-sizing and competitive analysis on 3 semester-long engagements for local small businesses.",
      "Presented recommendations to client leadership; named Featured Presenter (2024) at the client showcase.",
      "Completed case-method consulting training delivered by Bain & Company.",
    ],
  },
];
