import { allResearch, visibleResearch } from "@/lib/research";
import ResearchCard from "./ResearchCard";

const WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const count = (n: number, noun: string) =>
  `${WORDS[n] ?? n} ${noun}${n === 1 ? "" : "s"}`;

function blurb(): string {
  // Ongoing work is counted even while its details are still drafts.
  const all = allResearch();
  const done = all.filter((r) => r.status === "completed" && !r.draft).length;
  const ongoing = all.filter((r) => r.status === "in-progress").length;
  const parts = [];
  if (done) parts.push(`${count(done, "paper")} completed`);
  if (ongoing) parts.push(`${count(ongoing, "project")} in progress`);
  const text = parts.join(", ");
  return text ? `Applied economics: ${text}.` : "Applied economics.";
}

export default function Research() {
  const items = visibleResearch();
  if (!items.length && !allResearch().length) return null;

  return (
    <section id="research" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_3fr]">
      <div>
        <h2 className="font-heading text-3xl font-medium text-[#E2E8F0] lg:sticky lg:top-8">
          Research
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#94A3B8] lg:sticky lg:top-20">{blurb()}</p>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <ResearchCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
