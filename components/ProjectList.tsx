import { projects } from "@/data/projects";
import { link, meta, pad } from "@/lib/ui";
import Section from "./Section";
import Tags from "./Tags";

export default function ProjectList() {
  return (
    <Section id="projects" title="Selected projects" aside={`${projects.length} repositories`}>
      <ol>
        {projects.map((project, index) => (
          <li key={project.name} className="border-b border-neutral-200 py-8 first:pt-0 last:border-b-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-[20px] font-medium leading-[1.3]">
                <span className={meta}>{pad(index + 1)} / </span>
                {project.name}
              </h3>
              <Tags label={`${project.name} stack`} tags={project.tags} year={project.year} />
            </div>
            <div className="mt-3 max-w-2xl space-y-2">
              <p>{project.summary}</p>
              <p className="text-[#666666]">{project.impact}</p>
            </div>
            <p className={`mt-4 flex gap-6 ${meta}`}>
              <span>{project.tests} tests</span>
              {project.isPublic ? (
                <a href={project.repo} className={`text-[#111111] ${link}`}>
                  Source &rarr;
                </a>
              ) : (
                <span>Private repo</span>
              )}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
