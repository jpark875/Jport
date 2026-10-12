import { projects } from "@/data/projects";
import { link, meta, pad } from "@/lib/ui";
import Section from "./Section";
import Tags from "./Tags";

export default function ProjectList() {
  return (
    <Section id="projects" title="Selected projects" aside={`${projects.length} repositories.`}>
      <ol className="grid gap-x-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.name} className="flex flex-col border-t border-[#111111] pb-12 pt-5">
            <p className={meta}>{pad(index + 1)}</p>
            <h3 className="mt-4 text-[22px] font-medium leading-[1.25] tracking-[-0.015em]">
              {project.isPublic ? (
                <a href={project.repo} className={link}>
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-3">{project.summary}</p>
            <p className="mt-3 text-[#666666]">{project.impact}</p>
            <div className="mt-auto pt-6">
              <Tags label={`${project.name} stack`} tags={project.tags} />
              <p className={`mt-3 flex gap-6 ${meta}`}>
                <span>{project.tests} tests</span>
                {project.isPublic ? (
                  <a href={project.repo} className={`text-[#111111] ${link}`}>
                    Source &rarr;
                  </a>
                ) : (
                  <span>Private repo</span>
                )}
                {project.demo ? (
                  <a href={project.demo} className={`text-[#111111] ${link}`}>
                    Live demo &rarr;
                  </a>
                ) : null}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
