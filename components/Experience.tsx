import { experience, type Role } from "@/data/experience";
import { showDrafts } from "@/lib/research";
import { label, meta } from "@/lib/ui";
import Section from "./Section";

const groups: { kind: Role["kind"]; title: string }[] = [
  { kind: "professional", title: "Professional" },
  { kind: "research", title: "Research" },
];

export default function Experience() {
  const roles = experience.filter((role) => showDrafts || !role.draft);
  if (!roles.length) return null;

  return (
    <Section id="experience" title="Experience">
      {groups.map(({ kind, title }) => {
        const group = roles.filter((role) => role.kind === kind);
        if (!group.length) return null;
        return (
          <div key={kind} className="mb-12 last:mb-0">
            <h3 className={`${label} mb-6`}>{title}</h3>
            <ul>
              {group.map((role) => (
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
                  {role.place ? <p className={`mt-1 ${meta}`}>{role.place}</p> : null}
                  {role.points?.length ? (
                    <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 marker:text-neutral-400">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </Section>
  );
}
