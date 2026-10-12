import Link from "next/link";
import { site } from "@/data/site";
import { link } from "@/lib/ui";

export default function Header() {
  const external = [
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
  ].filter((item) => item.href);

  return (
    <header className="z-10 border-b border-neutral-200 bg-white md:sticky md:top-0">
      <a
        href="#main"
        className="sr-only bg-[#111111] px-3 py-2 text-[14px] text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-6 py-4">
        <Link href="/" className={`text-[15px] ${link}`}>
          <span className="font-medium">{site.name}</span>
          <span className="text-[#666666]"> / {site.role}</span>
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-6 gap-y-1 text-[14px]">
          <Link href="/#research" className={link}>
            Research
          </Link>
          <Link href="/#projects" className={link}>
            Projects
          </Link>
          <Link href="/#experience" className={link}>
            Experience
          </Link>
          {external.map((item) => (
            <a key={item.label} href={item.href} className={link}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
