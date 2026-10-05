import { site } from "@/data/site";
import { link, meta } from "@/lib/ui";
import Section from "./Section";

export default function Contact() {
  const { email, github, linkedin } = site.links;
  const others = [
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: linkedin },
  ].filter((item) => item.href);

  return (
    <footer>
      <Section id="contact" title="Contact">
        {email ? (
          <a href={`mailto:${email}`} className={`text-[20px] font-medium ${link}`}>
            {email}
          </a>
        ) : null}
        <ul className={`flex flex-wrap gap-6 ${email ? "mt-4" : ""}`}>
          {others.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={`mt-12 ${meta}`}>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </Section>
    </footer>
  );
}
