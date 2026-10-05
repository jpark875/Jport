export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  tags: string[];
  tests: number;
  repo: string;
  // Private repos show a label instead of a link that would 404.
  isPublic: boolean;
};

const github = (name: string) => `https://github.com/jpark875/${name}`;

export const projects: Project[] = [
  {
    name: "FitTest",
    summary:
      "Finds undervalued streetwear on resale platforms by reading the garment, not the seller's description.",
    highlights: [
      "Closed trend vocabulary, comparable-based valuation net of fees",
      "Runs offline with a keyword classifier; vision model when a key is set",
    ],
    tags: ["Python", "Pydantic", "SQLAlchemy", "Streamlit", "Anthropic API"],
    tests: 255,
    repo: github("FitTest"),
    isPublic: false,
  },
  {
    name: "SportsBetter",
    summary:
      "Multi-sport value-betting engine: calibrated win probabilities against live odds, sized with fractional Kelly.",
    highlights: [
      "NBA, WNBA, MLB and EPL behind a one-class plugin contract",
      "Sharpe, Sortino and drawdown tracking in an accessible Flask app",
    ],
    tags: ["Python", "LightGBM", "SciPy", "Flask", "SQLite"],
    tests: 91,
    repo: github("SportsBetter"),
    isPublic: true,
  },
  {
    name: "SportsTaxer",
    summary:
      "Turns a screen recording of a sportsbook history screen into a reconciled ledger exported to xlsx.",
    highlights: [
      "Scroll stitching by pixel registration; money fields read twice and flagged on disagreement",
      "Reconciles opening and closing balances before it will call a run balanced",
    ],
    tags: ["Python", "OpenCV", "Pydantic", "openpyxl", "Vision API"],
    tests: 111,
    repo: github("SportsTaxer"),
    isPublic: false,
  },
  {
    name: "FormPro2",
    summary:
      "Real-time barbell squat form analysis from a single camera, with faults judged against a reference corpus.",
    highlights: [
      "Thresholds are percentiles of reference frames, interpolated by lifter build",
      "Web and desktop front ends over MJPEG with a telemetry panel",
    ],
    tags: ["Python", "MediaPipe", "NumPy", "FastAPI", "OpenCV"],
    tests: 80,
    repo: github("FormPro2"),
    isPublic: true,
  },
  {
    name: "Slots-Machine",
    summary:
      "Three-reel slot machine with exact odds, a Monte Carlo check of them, and a playable text game.",
    highlights: [
      "Odds computed with exact fractions: 1 in 8,000 jackpot, 96.25% return",
      "Simulator averages pulls to jackpot against the exact expectation",
    ],
    tags: ["Python", "Fractions", "CLI", "pytest"],
    tests: 34,
    repo: github("Slots-Machine"),
    isPublic: false,
  },
  {
    name: "Cowboy-Game",
    summary: "Top-down defence game: shoot waves of enemies, collect pineapples to raise your fire rate.",
    highlights: [
      "Six classes, per-enemy health bars, difficulty that scales with time",
      "Headless tests cover the game rules",
    ],
    tags: ["Python", "Pygame", "OOP", "pytest"],
    tests: 23,
    repo: github("Cowboy-Game"),
    isPublic: true,
  },
];
