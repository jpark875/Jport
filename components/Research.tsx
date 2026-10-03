import { research } from "@/data/research";
import ResearchCard from "./ResearchCard";

export default function Research() {
  return (
    <section id="research" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_3fr]">
      <div>
        <h2 className="font-heading text-3xl font-medium text-[#E2E8F0] lg:sticky lg:top-8">
          Research
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#94A3B8] lg:sticky lg:top-20">
          Economics: one finished paper and two projects underway.
        </p>
      </div>
      <div className="space-y-6">
        {research.map((item, index) => (
          <ResearchCard key={`${item.title}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
}
