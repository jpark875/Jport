import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 rounded-md border border-[#1E293B] bg-[#13151A] p-6 md:grid-cols-[3fr_2fr] md:p-8">
      <div>
        <h3 className="font-heading text-2xl font-medium text-[#E2E8F0]">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-[#94A3B8]">{project.summary}</p>
        <ul className="mt-5 space-y-2 text-sm text-[#E2E8F0]">
          {project.highlights.map((line) => (
            <li key={line} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#38BDF8]" />
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-between gap-6 border-t border-[#1E293B] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
        <ul aria-label={`${project.name} stack`} className="flex flex-wrap gap-2 text-xs font-mono">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-[#1E293B] px-2 py-1 text-[#94A3B8]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-[#94A3B8]">
            <span className="text-[#E2E8F0]">{project.tests}</span> tests
          </span>
          <a
            href={project.repo}
            className="text-[#38BDF8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
          >
            Source &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
