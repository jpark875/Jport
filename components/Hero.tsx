import { site } from "@/data/site";

const focus = [
  "Data pipelines and the models that sit on them",
  "Applied econometrics on public health and income data",
  "Analytics tooling with tests behind every claim",
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[3fr_2fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
          {site.role}
        </p>
        <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.05] text-[#E2E8F0] sm:text-6xl">
          {site.name} builds data tools and research you can check.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-[#94A3B8]">
          Pipelines, models and empirical economics. Each project ships with its tests, each
          paper with its data and limitations, and both say plainly what they do and do not show.
        </p>
        <div className="mt-8 flex gap-4 text-sm">
          <a
            href="#projects"
            className="rounded-md bg-[#38BDF8] px-4 py-2 font-medium text-[#0D0E11] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2E8F0]"
          >
            See projects
          </a>
          <a
            href={site.links.github}
            className="rounded-md border border-[#1E293B] px-4 py-2 text-[#E2E8F0] hover:border-[#38BDF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
          >
            GitHub
          </a>
        </div>
      </div>

      <aside className="rounded-md border border-[#1E293B] bg-[#13151A] p-6 lg:self-end">
        <h2 className="font-heading text-sm uppercase tracking-widest text-[#94A3B8]">Focus</h2>
        <ul className="mt-4 space-y-3 text-sm text-[#E2E8F0]">
          {focus.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#38BDF8]" />
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
