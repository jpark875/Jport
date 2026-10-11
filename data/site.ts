// Site-wide details. Empty links are hidden.
export const site = {
  name: "Jason Park",
  role: "Developer / Analytics / Economics",
  title: "Portfolio",
  subtitle: "Economics & Computer Science, University of Virginia",
  description: "Portfolio of Jason Park: projects, research and experience.",
  // Set NEXT_PUBLIC_SITE_URL to the deployed origin so share previews use absolute links.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com/jpark875",
    email: "jason.park875@gmail.com",
    linkedin: "https://www.linkedin.com/in/jason-park-98a479255",
  },
};
