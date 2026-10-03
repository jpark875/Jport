export type Research = {
  title: string;
  summary: string;
  status: "Completed" | "In progress";
  tags: string[];
  // Leave empty until there is something to link to.
  link?: { label: string; href: string };
};

// Placeholders: replace titles, summaries and tags with the real work.
export const research: Research[] = [
  {
    title: "[Paper title]",
    summary:
      "[One or two sentences on the research question, the data and the main finding.]",
    status: "Completed",
    tags: ["[Field]", "[Method]", "[Data]", "[Tools]"],
  },
  {
    title: "[Project title]",
    summary: "[One or two sentences on what this project asks and how.]",
    status: "In progress",
    tags: ["[Field]", "[Method]", "[Data]"],
  },
  {
    title: "[Project title]",
    summary: "[One or two sentences on what this project asks and how.]",
    status: "In progress",
    tags: ["[Field]", "[Method]", "[Data]"],
  },
];
