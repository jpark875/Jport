import Link from "next/link";
import { formatDate, hasDetailPage, type Research } from "@/lib/research";
import Status from "./Status";
import Tags from "./Tags";

const link =
  "text-[#38BDF8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]";

export default function ResearchCard({ item }: { item: Research }) {
  const title = item.shortTitle ?? item.title;

  return (
    <article className="grid gap-8 rounded-md border border-[#1E293B] bg-[#13151A] p-6 md:grid-cols-[3fr_2fr] md:p-8">
      <div>
        {item.draft ? (
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
            Draft: hidden on the live site
          </p>
        ) : null}
        <h3 className="font-heading text-2xl font-medium text-[#E2E8F0]">
          {hasDetailPage(item) ? (
            <Link href={`/research/${item.slug}`} className="hover:text-[#38BDF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="mt-2 text-xs text-[#94A3B8]">
          {formatDate(item.date)}
          {item.context ? ` · ${item.context}` : ""}
        </p>
        <p className="mt-4 text-sm leading-7 text-[#94A3B8]">{item.summary}</p>
      </div>

      <div className="flex flex-col justify-between gap-6 border-t border-[#1E293B] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
        <Tags label={`${title} topics`} tags={item.tags} />
        <div className="flex flex-wrap items-baseline justify-between gap-3 text-sm">
          <Status status={item.status} />
          <span className="flex gap-4">
            {item.pdf ? (
              <a href={item.pdf} className={link}>
                PDF
              </a>
            ) : null}
            {hasDetailPage(item) ? (
              <Link href={`/research/${item.slug}`} className={link}>
                Read &rarr;
              </Link>
            ) : null}
          </span>
        </div>
      </div>
    </article>
  );
}
