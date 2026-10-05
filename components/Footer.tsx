import { site } from "@/data/site";

const link =
  "text-[#38BDF8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]";

export default function Footer() {
  const { github, email, linkedin } = site.links;
  const contacts = [
    { label: "GitHub", href: github },
    { label: "Email", href: email ? `mailto:${email}` : "" },
    { label: "LinkedIn", href: linkedin },
  ].filter((contact) => contact.href);

  return (
    <footer id="contact" className="border-t border-[#1E293B]">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 text-sm md:grid-cols-[3fr_2fr]">
        <div>
          <h2 className="font-heading text-xl font-medium text-[#E2E8F0]">Contact</h2>
          <ul className="mt-3 flex flex-wrap gap-6">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a href={contact.href} className={link}>
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[#94A3B8] md:self-end md:text-right">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
