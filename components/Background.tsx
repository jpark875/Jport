import { activities, education, skills } from "@/data/background";
import { label, meta } from "@/lib/ui";
import Section from "./Section";
import Tags from "./Tags";

export default function Background() {
  return (
    <Section id="education" title="Education & skills">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p>
          <span className="font-medium">{education.degree}</span>
          <span className="text-[#666666]"> &mdash; {education.school}</span>
        </p>
        <p className={meta}>
          GPA {education.gpa} &middot; {education.end}
        </p>
      </div>
      <div className="mt-3">
        <Tags label="Relevant coursework" tags={education.coursework} />
      </div>

      <dl className="mt-10 border-t border-neutral-200">
        {[...skills, { label: "Activities", items: activities }].map((group) => (
          <div
            key={group.label}
            className="grid gap-2 border-b border-neutral-200 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]"
          >
            <dt className={label}>{group.label}</dt>
            <dd>{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
