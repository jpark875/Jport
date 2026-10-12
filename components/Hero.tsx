import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { site } from "@/data/site";
import { asset } from "@/lib/asset";
import { visibleResearch } from "@/lib/research";
import { label, link, meta, pad } from "@/lib/ui";

export default function Hero() {
  const papers = visibleResearch().filter((r) => r.status === "completed").length;
  const index = [
    { href: "#research", label: "Research", count: `${papers} paper${papers === 1 ? "" : "s"}` },
    { href: "#projects", label: "Projects", count: `${projects.length} repositories` },
    { href: "#experience", label: "Experience", count: `${experience.filter((r) => !r.draft).length} roles` },
  ];
  const contact = [
    { label: "Email", href: site.links.email ? `mailto:${site.links.email}` : "" },
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "Résumé (PDF)", href: asset(site.resume), download: true },
  ].filter((item) => item.href);

  return (
    <section className="border-t border-[#111111]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-28">
        <p className={label}>{site.title}</p>
        <h1 className="mt-6 text-[44px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[72px]">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-[17px] text-[#666666] sm:text-[19px]">{site.subtitle}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
          {contact.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={link} download={item.download ? "" : undefined}>
                {item.label} &rarr;
              </a>
            </li>
          ))}
        </ul>
        <nav aria-label="Sections" className="mt-16 grid border-t border-[#111111] sm:grid-cols-3">
          {index.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline justify-between gap-4 border-b border-neutral-200 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <span>
                <span className={meta}>{pad(i + 1)}</span>
                <span className="ml-3 text-[18px] font-medium underline-offset-4 group-hover:underline">
                  {item.label}
                </span>
              </span>
              <span className={meta}>{item.count}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
