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
  stats?: { value: string; label: string }[];
  figure?: { src: string; alt: string; caption?: string };
  pdf?: string;
  documents?: { label: string; href: string }[];
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
  const asset = (key: string, value: unknown) => {
    if (typeof value !== "string" || !value.startsWith("/")) fail(file, `"${key}" must start with /`);
    if (!fs.existsSync(path.join(process.cwd(), "public", value as string))) {
      fail(file, `"${key}" points at public${value}, which does not exist`);
    }
  };
  if (entry.pdf !== undefined) asset("pdf", entry.pdf);
  const pairs = (key: string, fields: string[]) => {
    const value = entry[key];
    if (value === undefined) return;
    const ok =
      Array.isArray(value) &&
      value.length > 0 &&
      value.every(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          fields.every((f) => typeof (item as Record<string, unknown>)[f] === "string"),
      );
    if (!ok) fail(file, `"${key}" must be a list of objects with ${fields.join(" and ")}`);
  };
  pairs("stats", ["value", "label"]);
  pairs("documents", ["label", "href"]);
  if (Array.isArray(entry.stats) && entry.stats.length > 3) fail(file, `"stats" holds at most three`);
  for (const doc of (entry.documents as { href: string }[] | undefined) ?? []) asset("documents", doc.href);
  if (entry.figure !== undefined) {
    const figure = entry.figure as Record<string, unknown>;
    if (typeof figure !== "object" || figure === null || typeof figure.alt !== "string" || !figure.alt) {
      fail(file, `"figure" needs src and alt text`);
    }
    asset("figure.src", figure.src);
  }
  return { ...(entry as Omit<Research, "slug">), slug: file.replace(/\.json$/, "") };
}

export const showDrafts = process.env.NODE_ENV !== "production";

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
