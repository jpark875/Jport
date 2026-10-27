export type Project = {
  name: string;
  summary: string;
  impact: string;
  tags: string[];
  tests: number;
  repo: string;
  isPublic: boolean;
  demo?: string;
};

const github = (name: string) => `https://github.com/jpark875/${name}`;

export const projects: Project[] = [
  {
    name: "peffects",
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
    summary:
      "Audits 3.1 million FiveThirtyEight forecasts for calibration, proper scores and accuracy over time, and prices what each model version was worth as a bet.",
    impact:
      "Election models were too cautious (calibration slope 1.36); Deluxe beat Lite on 3,126 races. Event-clustered bootstrap throughout.",
    tags: ["Python", "pandas", "SciPy", "Forecasting"],
    tests: 74,
    repo: github("forecast-audit"),
    isPublic: true,
  },
  {
    name: "costengine",
    summary:
      "Monte Carlo benefit-cost analysis for public programs: net value, benefit per dollar, who gains and who pays, and the chance a program pays off.",
    impact:
      "Grew out of cost-of-inaction modeling at Kids at Risk Action; runs 50,000 draws in the browser with a sensitivity tornado and shareable links.",
    tags: ["TypeScript", "Monte Carlo", "Policy analysis", "Vite"],
    tests: 34,
    repo: github("costengine"),
    isPublic: true,
    demo: "https://jpark875.github.io/costengine/",
  },
  {
    name: "Sleeve",
    summary:
      "Desktop app for macOS and Windows that moves a music library into Spotify: songs Spotify already has go straight into a real playlist, and only the rest become tagged local files.",
    impact:
      "Matches by ISRC, then title, artist and length, and asks before adding close calls. Imports iTunes and M3U playlists, converts WAV, FLAC, Ogg, WMA and video with FFmpeg, and CI builds both installers.",
    tags: ["Python", "PySide6", "Spotify Web API", "FFmpeg"],
    tests: 146,
    repo: github("sleeve"),
    isPublic: true,
  },
  {
    name: "Brier",
    summary:
      "Phone-first trade journal and bet-sizing helper for Kalshi sports markets: logs a trade in seconds, settles it automatically and tracks daily wins and losses.",
    impact:
      "Paper trades fill against Kalshi's live order book with exact fees. Sizing is quarter Kelly after fees under per-trade and exposure caps, and a daily loss limit locks logging until tomorrow.",
    tags: ["Python", "FastAPI", "SQLite", "Kalshi API"],
    tests: 65,
    repo: github("brier"),
    isPublic: false,
  },
  {
    name: "FitTest",
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
    summary:
      "Turns a screen recording of a sportsbook history screen into a reconciled transaction ledger exported to xlsx.",
    impact: "Refuses to call a run balanced unless opening plus every bet equals the closing balance.",
    tags: ["Python", "OpenCV", "Vision API", "openpyxl"],
    tests: 112,
    repo: github("SportsTaxer"),
    isPublic: true,
  },
];
