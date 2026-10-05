import fs from "node:fs";
import path from "node:path";

export type ResearchStatus = "completed" | "in-progress";

export type Research = {
  slug: string;
  title: string;
  shortTitle?: string;
  status: ResearchStatus;
  date: string; // YYYY or YYYY-MM
  authors: string[];
  context?: string;
  summary: string;
  tags: string[];
  abstract?: string;
  question?: string;
  data?: string[];
  method?: string;
  equation?: string;
  findings?: string[];
  limitations?: string[];
  pdf?: string; // path under public/, e.g. /research/paper.pdf
  draft?: boolean;
};

const DIR = path.join(process.cwd(), "content", "research");
const STATUSES: ResearchStatus[] = ["completed", "in-progress"];

function fail(file: string, message: string): never {
  throw new Error(`content/research/${file}: ${message}`);
}

function validate(file: string, raw: unknown): Research {
  if (typeof raw !== "object" || raw === null) fail(file, "must contain a JSON object");
  const entry = raw as Record<string, unknown>;
  const text = (key: string) => {
    if (typeof entry[key] !== "string" || !(entry[key] as string).trim()) {
      fail(file, `"${key}" must be a non-empty string`);
    }
  };
  const list = (key: string, required: boolean) => {
    const value = entry[key];
    if (value === undefined && !required) return;
    if (!Array.isArray(value) || !value.length || value.some((v) => typeof v !== "string")) {
      fail(file, `"${key}" must be a non-empty list of strings`);
    }
  };

  ["title", "date", "summary"].forEach(text);
  ["authors", "tags"].forEach((key) => list(key, true));
  ["data", "findings", "limitations"].forEach((key) => list(key, false));
  if (!STATUSES.includes(entry.status as ResearchStatus)) {
    fail(file, `"status" must be one of ${STATUSES.join(", ")}`);
  }
  if (!/^\d{4}(-(0[1-9]|1[0-2]))?$/.test(entry.date as string)) {
    fail(file, `"date" must look like 2026 or 2026-04`);
  }
  if (entry.pdf !== undefined) {
    const pdf = entry.pdf as string;
    if (typeof pdf !== "string" || !pdf.startsWith("/")) fail(file, `"pdf" must start with /`);
    if (!fs.existsSync(path.join(process.cwd(), "public", pdf))) {
      fail(file, `"pdf" points at public${pdf}, which does not exist`);
    }
  }
  return { ...(entry as Omit<Research, "slug">), slug: file.replace(/\.json$/, "") };
}

export const showDrafts = process.env.NODE_ENV !== "production";

/** Every entry, drafts included, newest first with completed work ahead of ongoing. */
export function allResearch(): Research[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".json") && !file.startsWith("_"))
    .map((file) => validate(file, JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8"))))
    .sort((a, b) =>
      a.status === b.status ? b.date.localeCompare(a.date) : a.status === "completed" ? -1 : 1,
    );
}

/** Entries that appear on the site. Drafts show only in `npm run dev`. */
export function visibleResearch(): Research[] {
  return allResearch().filter((entry) => showDrafts || !entry.draft);
}

export function hasDetailPage(entry: Research): boolean {
  return Boolean(entry.abstract || entry.findings?.length);
}

export function formatDate(date: string): string {
  const [year, month] = date.split("-");
  if (!month) return year;
  return new Date(Number(year), Number(month) - 1).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}
