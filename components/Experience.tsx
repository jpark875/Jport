import { experience } from "@/data/experience";
import { showDrafts } from "@/lib/research";
import { meta } from "@/lib/ui";
import Section from "./Section";

export default function Experience() {
  const roles = experience.filter((role) => showDrafts || !role.draft);
  if (!roles.length) return null;

  return (
    <Section id="experience" title="Experience">
      <ul>
        {roles.map((role) => (
          <li
            key={`${role.title}-${role.org}-${role.start}`}
            className="border-b border-neutral-200 py-6 first:pt-0 last:border-b-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p>
                <span className="font-medium">{role.title}</span>
                <span className="text-[#666666]"> &mdash; {role.org}</span>
                {role.draft ? <span className={meta}> (draft)</span> : null}
              </p>
              <p className={meta}>
                {role.start} &ndash; {role.end ?? "Present"}
              </p>
            </div>
            {role.note ? <p className="mt-2 max-w-2xl">{role.note}</p> : null}
            {role.place ? <p className={`mt-2 ${meta}`}>{role.place}</p> : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
