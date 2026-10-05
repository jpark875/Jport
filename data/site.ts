// Site-wide details. Optional links render only when set.
export const site = {
  name: "Jason Park",
  role: "Developer / Analytics / Economics",
  description:
    "Data tools, models and applied economics research by Jason Park, each shipped with the evidence behind it.",
  // Set NEXT_PUBLIC_SITE_URL to the deployed origin so share previews use absolute links.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com/jpark875",
    email: "",
    linkedin: "",
  },
};
