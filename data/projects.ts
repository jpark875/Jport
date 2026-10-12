export type Project = {
  name: string;
  year: string;
  summary: string;
  impact: string;
  tags: string[];
  tests: number;
  repo: string;
  // Private repos show a label instead of a link that would 404.
  isPublic: boolean;
};

const github = (name: string) => `https://github.com/jpark875/${name}`;

export const projects: Project[] = [
  {
    name: "peffects",
    year: "2026",
    summary:
      "Modern difference-in-differences from the papers: TWFE, Goodman-Bacon, Callaway–Sant'Anna, Sun–Abraham, synthetic control, wild cluster bootstrap and randomization inference.",
    impact:
      "Reproduces 37 of 37 published values across three replication studies; finds stand-your-ground laws raised homicides about 8%, with a wild-bootstrap p of 0.055.",
    tags: ["Python", "NumPy", "SciPy", "Econometrics"],
    tests: 46,
    repo: github("peffects"),
    isPublic: true,
  },
  {
    name: "forecast-audit",
    year: "2026",
    summary:
      "Audits 3.1 million FiveThirtyEight forecasts for calibration, proper scores and accuracy over time, and prices what each model version was worth as a bet.",
    impact:
      "Election models were too cautious (calibration slope 1.36); Deluxe beat Lite on 3,126 races. Event-clustered bootstrap throughout.",
    tags: ["Python", "pandas", "SciPy", "Forecasting"],
    tests: 74,
    repo: github("forecast-audit"),
    isPublic: false,
  },
  {
    name: "costengine",
    year: "2026",
    summary:
      "Monte Carlo benefit-cost analysis for public programs: net value, benefit per dollar, who gains and who pays, and the chance a program pays off.",
    impact:
      "Runs 50,000 draws in a browser Web Worker with a sensitivity tornado and shareable scenario links.",
    tags: ["TypeScript", "Monte Carlo", "Policy analysis", "Vite"],
    tests: 34,
    repo: github("costengine"),
    isPublic: false,
  },
  {
    name: "FitTest",
    year: "2026",
    summary:
      "Finds undervalued streetwear on resale platforms by reading the garment, not the seller's description, and ranks listings by margin net of fees.",
    impact: "Runs end to end offline; a vision model takes over when an API key is set.",
    tags: ["Python", "SQLAlchemy", "Streamlit", "Vision API"],
    tests: 255,
    repo: github("FitTest"),
    isPublic: true,
  },
  {
    name: "SportsBetter",
    year: "2025",
    summary:
      "Multi-sport value-betting engine: calibrated win probabilities against live odds, with stakes sized by a correlation-aware fractional Kelly optimiser.",
    impact: "NBA, WNBA, MLB and EPL behind a one-class plugin contract; 93% test coverage.",
    tags: ["Python", "LightGBM", "SciPy", "Flask"],
    tests: 91,
    repo: github("SportsBetter"),
    isPublic: true,
  },
  {
    name: "SportsTaxer",
    year: "2026",
    summary:
      "Turns a screen recording of a sportsbook history screen into a reconciled transaction ledger exported to xlsx.",
    impact: "Refuses to call a run balanced unless opening plus every bet equals the closing balance.",
    tags: ["Python", "OpenCV", "Vision API", "openpyxl"],
    tests: 111,
    repo: github("SportsTaxer"),
    isPublic: true,
  },
  {
    name: "FormPro2",
    year: "2026",
    summary:
      "Real-time barbell squat form analysis from a single camera, judging each rep against a reference corpus scaled to the lifter's build.",
    impact: "Flags knee valgus, good-morning, high squat and heel lift live in the browser.",
    tags: ["Python", "MediaPipe", "FastAPI", "NumPy"],
    tests: 80,
    repo: github("FormPro2"),
    isPublic: true,
  },
  {
    name: "Slots-Machine",
    year: "2026",
    summary: "Three-reel slot machine with exact odds, a Monte Carlo check of them and a playable text game.",
    impact: "Exact fractions: a 1 in 8,000 jackpot and a 96.25% return to player.",
    tags: ["Python", "Probability", "CLI"],
    tests: 34,
    repo: github("Slots-Machine"),
    isPublic: true,
  },
  {
    name: "Cowboy-Game",
    year: "2024",
    summary: "Top-down defence game: hold off waves of enemies and collect pineapples to raise your fire rate.",
    impact: "Six classes, per-enemy health and difficulty that scales with time.",
    tags: ["Python", "Pygame"],
    tests: 23,
    repo: github("Cowboy-Game"),
    isPublic: true,
  },
];
