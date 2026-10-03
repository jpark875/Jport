const links = [
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-[#1E293B]">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-5">
        <a
          href="#"
          className="font-heading text-lg font-medium text-[#E2E8F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
        >
          jport<span className="text-[#38BDF8]">.</span>
        </a>
        <nav aria-label="Primary" className="flex gap-6 text-sm text-[#94A3B8]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#38BDF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
