import Link from "next/link";
import { allResearch, hasDetailPage, visibleResearch } from "@/lib/research";
import { link, meta, pad } from "@/lib/ui";
import Section from "./Section";
import Stats from "./Stats";
import Tags from "./Tags";

const WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const count = (n: number, noun: string) => `${WORDS[n] ?? n} ${noun}${n === 1 ? "" : "s"}`;

function summaryLine(): string {
  // Ongoing work counts even while its details are still drafts.
  const all = allResearch();
  const done = all.filter((r) => r.status === "completed" && !r.draft).length;
  const ongoing = all.filter((r) => r.status === "in-progress").length;
  const parts = [];
  if (done) parts.push(`${count(done, "paper")} completed`);
  if (ongoing) parts.push(`${count(ongoing, "project")} in progress`);
  return parts.length ? `Applied economics: ${parts.join(", ")}.` : "Applied economics.";
}

export default function ResearchList() {
  const items = visibleResearch();
  if (!allResearch().length) return null;

  return (
    <Section id="research" title="Research" aside={summaryLine()}>
      <ol>
        {items.map((item, index) => {
          const title = item.shortTitle ?? item.title;
          const detail = hasDetailPage(item);
          return (
            <li key={item.slug} className="border-b border-neutral-200 py-10 first:pt-0 last:border-b-0">
              {item.draft ? <p className={`mb-2 ${meta}`}>Draft: hidden on the live site</p> : null}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className={meta}>
                  {pad(index + 1)} / {item.status === "completed" ? "Paper" : "In progress"}
                  {item.context ? ` · ${item.context}` : ""}
                </p>
                <Tags label={`${title} topics`} tags={item.tags} year={item.date.slice(0, 4)} />
              </div>
              <h3 className="mt-4 max-w-2xl text-[24px] font-medium leading-[1.25] tracking-[-0.015em]">
                {detail ? (
                  <Link href={`/research/${item.slug}`} className={link}>
                    {title}
                  </Link>
                ) : (
                  title
                )}
              </h3>
              <p className="mt-3 max-w-2xl">{item.summary}</p>
              {item.stats?.length ? (
                <div className="mt-6">
                  <Stats items={item.stats} label={`${title} headline results`} />
                </div>
              ) : null}
              <p className={`mt-5 flex flex-wrap gap-x-6 gap-y-1 ${meta}`}>
                {detail ? (
                  <Link href={`/research/${item.slug}`} className={`text-[#111111] ${link}`}>
                    Read &rarr;
                  </Link>
                ) : null}
                {item.pdf ? (
                  <a href={item.pdf} className={`text-[#111111] ${link}`}>
                    Paper (PDF)
                  </a>
                ) : null}
                {item.documents?.map((doc) => (
                  <a key={doc.href} href={doc.href} className={`text-[#111111] ${link}`}>
                    {doc.label} (PDF)
                  </a>
                ))}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
