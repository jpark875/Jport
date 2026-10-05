import Link from "next/link";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]";

export default function Header() {
  return (
    <header className="border-b border-[#1E293B]">
      <a
        href="#main"
        className="sr-only rounded-md bg-[#38BDF8] px-3 py-2 text-sm text-[#0D0E11] focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-5">
        <Link href="/" className={`font-heading text-lg font-medium text-[#E2E8F0] ${focus}`}>
          jport<span className="text-[#38BDF8]">.</span>
        </Link>
        <nav aria-label="Primary" className="flex gap-6 text-sm text-[#94A3B8]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`hover:text-[#38BDF8] ${focus}`}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
