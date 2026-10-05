import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Status from "@/components/Status";
import Tags from "@/components/Tags";
import { formatDate, hasDetailPage, visibleResearch } from "@/lib/research";

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
    <section className="border-t border-[#1E293B] pt-8">
      <h2 className="font-heading text-sm uppercase tracking-widest text-[#94A3B8]">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-[#E2E8F0]">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#38BDF8]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ResearchPage({ params }: { params: Promise<Params> }) {
  const entry = find((await params).slug);
  if (!entry) notFound();

  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#research"
          className="text-sm text-[#94A3B8] hover:text-[#38BDF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
        >
          &larr; Research
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr]">
          <article className="min-w-0 space-y-10">
            <header>
              <p className="font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
                {entry.status === "completed" ? "Paper" : "Working paper"}
              </p>
              <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#E2E8F0] sm:text-4xl">
                {entry.title}
              </h1>
            </header>

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
                <Bullets items={entry.data} />
              </Block>
            ) : null}
            {entry.method ? (
              <Block title="Method">
                <p>{entry.method}</p>
                {entry.equation ? (
                  <pre className="mt-5 overflow-x-auto rounded-md border border-[#1E293B] bg-[#13151A] p-4 text-xs text-[#E2E8F0]">
                    {entry.equation}
                  </pre>
                ) : null}
              </Block>
            ) : null}
            {entry.findings?.length ? (
              <Block title="Findings">
                <Bullets items={entry.findings} />
              </Block>
            ) : null}
            {entry.limitations?.length ? (
              <Block title="Limitations">
                <Bullets items={entry.limitations} />
              </Block>
            ) : null}
          </article>

          <aside className="order-first min-w-0 lg:order-last lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-6 rounded-md border border-[#1E293B] bg-[#13151A] p-6 text-sm">
              <Status status={entry.status} />
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[#94A3B8]">Date</dt>
                  <dd className="mt-1 text-[#E2E8F0]">{formatDate(entry.date)}</dd>
                </div>
                {entry.context ? (
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-[#94A3B8]">Context</dt>
                    <dd className="mt-1 text-[#E2E8F0]">{entry.context}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[#94A3B8]">
                    {entry.authors.length === 1 ? "Author" : "Authors"}
                  </dt>
                  <dd className="mt-1 text-[#E2E8F0]">{entry.authors.join(", ")}</dd>
                </div>
              </dl>
              <Tags label="Topics" tags={entry.tags} />
              {entry.pdf ? (
                <a
                  href={entry.pdf}
                  className="block rounded-md bg-[#38BDF8] px-4 py-2 text-center font-medium text-[#0D0E11] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2E8F0]"
                >
                  Download PDF
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
