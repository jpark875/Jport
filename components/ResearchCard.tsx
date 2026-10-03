import type { Research } from "@/data/research";

export default function ResearchCard({ item }: { item: Research }) {
  const done = item.status === "Completed";

  return (
    <article className="grid gap-8 rounded-md border border-[#1E293B] bg-[#13151A] p-6 md:grid-cols-[3fr_2fr] md:p-8">
      <div>
        <h3 className="font-heading text-2xl font-medium text-[#E2E8F0]">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#94A3B8]">{item.summary}</p>
      </div>

      <div className="flex flex-col justify-between gap-6 border-t border-[#1E293B] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
        <ul aria-label={`${item.title} topics`} className="flex flex-wrap gap-2 text-xs font-mono">
          {item.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-[#1E293B] px-2 py-1 text-[#94A3B8]">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline justify-between text-sm">
          <span className="flex items-center gap-2 text-[#94A3B8]">
            <span
              aria-hidden
              className={`h-1.5 w-1.5 ${done ? "bg-[#38BDF8]" : "border border-[#94A3B8]"}`}
            />
            {item.status}
          </span>
          {item.link ? (
            <a
              href={item.link.href}
              className="text-[#38BDF8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
            >
              {item.link.label} &rarr;
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
