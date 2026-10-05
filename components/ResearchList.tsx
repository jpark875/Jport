import Link from "next/link";
import { allResearch, hasDetailPage, visibleResearch } from "@/lib/research";
import { link, meta, pad } from "@/lib/ui";
import Section from "./Section";
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
            <li key={item.slug} className="border-b border-neutral-200 py-8 first:pt-0 last:border-b-0">
              {item.draft ? <p className={`mb-2 ${meta}`}>Draft: hidden on the live site</p> : null}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-[20px] font-medium leading-[1.3]">
                  <span className={meta}>{pad(index + 1)} / </span>
                  {detail ? (
                    <Link href={`/research/${item.slug}`} className={link}>
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h3>
                <Tags label={`${title} topics`} tags={item.tags} year={item.date.slice(0, 4)} />
              </div>
              <p className="mt-3 max-w-2xl">{item.summary}</p>
              <p className={`mt-4 flex flex-wrap gap-x-6 gap-y-1 ${meta}`}>
                <span>{item.status === "completed" ? "Completed" : "In progress"}</span>
                {item.context ? <span>{item.context}</span> : null}
                {item.pdf ? (
                  <a href={item.pdf} className={`text-[#111111] ${link}`}>
                    PDF
                  </a>
                ) : null}
                {detail ? (
                  <Link href={`/research/${item.slug}`} className={`text-[#111111] ${link}`}>
                    Read &rarr;
                  </Link>
                ) : null}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
