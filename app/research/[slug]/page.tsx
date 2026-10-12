import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Header from "@/components/Header";
import Tags from "@/components/Tags";
import { formatDate, hasDetailPage, visibleResearch } from "@/lib/research";
import { asset } from "@/lib/asset";
import { label, link } from "@/lib/ui";

type Params = { slug: string };

function find(slug: string) {
  return visibleResearch().find((entry) => entry.slug === slug && hasDetailPage(entry));
}

export function generateStaticParams(): Params[] {
  return visibleResearch()
    .filter(hasDetailPage)
    .map((entry) => ({ slug: entry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const entry = find((await params).slug);
  if (!entry) return {};
  return {
    title: entry.shortTitle ?? entry.title,
    description: entry.summary,
    openGraph: { title: entry.title, description: entry.summary, type: "article" },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-neutral-200 py-8">
      <h2 className={label}>{title}</h2>
      <div className="mt-4 max-w-2xl">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[1.25rem_1fr]">
          <span aria-hidden className="text-[#666666]">&ndash;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Fact({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-neutral-200 py-3">
      <dt className={label}>{term}</dt>
      <dd className="mt-1 text-[14px]">{children}</dd>
    </div>
  );
}

export default async function ResearchPage({ params }: { params: Promise<Params> }) {
  const entry = find((await params).slug);
  if (!entry) notFound();

  return (
    <>
      <Header />
      <main id="main" className="border-t border-[#111111]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[3fr_7fr] md:py-20">
          <aside className="min-w-0 md:sticky md:top-8 md:self-start">
            <Link href="/#research" className={`text-[14px] ${link}`}>
              &larr; Research
            </Link>
            <dl className="mt-8">
              <Fact term="Status">{entry.status === "completed" ? "Completed" : "In progress"}</Fact>
              <Fact term="Date">{formatDate(entry.date)}</Fact>
              {entry.context ? <Fact term="Context">{entry.context}</Fact> : null}
              <Fact term={entry.authors.length === 1 ? "Author" : "Authors"}>
                {entry.authors.join(", ")}
              </Fact>
              <Fact term="Topics">
                <Tags label="Topics" tags={entry.tags} />
              </Fact>
            </dl>
            {entry.pdf || entry.documents?.length ? (
              <ul className="space-y-2 border-t border-neutral-200 pt-3">
                {entry.pdf ? (
                  <li>
                    <a href={asset(entry.pdf)} className={`text-[14px] font-medium ${link}`}>
                      Paper (PDF) &darr;
                    </a>
                  </li>
                ) : null}
                {entry.documents?.map((doc) => (
                  <li key={doc.href}>
                    <a href={asset(doc.href)} className={`text-[14px] font-medium ${link}`}>
                      {doc.label} (PDF) &darr;
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </aside>

          <article className="min-w-0">
            <p className={label}>{entry.status === "completed" ? "Paper" : "Working paper"}</p>
            <h1 className="mt-4 max-w-3xl pb-10 text-[32px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[40px]">
              {entry.title}
            </h1>
            {entry.stats?.length ? (
              <div className="pb-10">
                <Stats items={entry.stats} label="Headline results" />
              </div>
            ) : null}
            {entry.abstract ? (
              <Block title="Abstract">
                <p>{entry.abstract}</p>
              </Block>
            ) : null}
            {entry.question ? (
              <Block title="Question">
                <p>{entry.question}</p>
              </Block>
            ) : null}
            {entry.data?.length ? (
              <Block title="Data">
                <List items={entry.data} />
              </Block>
            ) : null}
            {entry.method ? (
              <Block title="Method">
                <p>{entry.method}</p>
                {entry.equation ? (
                  <pre className="mt-5 overflow-x-auto border-l-2 border-[#111111] py-1 pl-4 font-mono text-[13px]">
                    {entry.equation}
                  </pre>
                ) : null}
              </Block>
            ) : null}
            {entry.findings?.length ? (
              <Block title="Findings">
                <List items={entry.findings} />
              </Block>
            ) : null}
            {entry.figure ? (
              <section className="border-t border-neutral-200 py-8">
                <h2 className={label}>Figure</h2>
                <figure className="mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(entry.figure.src)}
                    alt={entry.figure.alt}
                    decoding="async"
                    className="h-auto w-full border border-neutral-200"
                  />
                  {entry.figure.caption ? (
                    <figcaption className="mt-3 max-w-2xl text-[14px] text-[#666666]">
                      {entry.figure.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </section>
            ) : null}
            {entry.limitations?.length ? (
              <Block title="Limitations">
                <List items={entry.limitations} />
              </Block>
            ) : null}
          </article>
        </div>
      </main>
      <Contact />
    </>
  );
}
