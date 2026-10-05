// Site-wide details. Empty links are hidden.
export const site = {
  name: "Jason Park",
  role: "Developer / Analytics / Economics",
  statement: "I build data systems and economic research, and show the evidence behind both.",
  description:
    "Pipelines, models and applied econometrics. Each project ships with its tests, each paper with its data and limitations.",
  // Set NEXT_PUBLIC_SITE_URL to the deployed origin so share previews use absolute links.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com/jpark875",
    email: "",
    linkedin: "",
  },
};
