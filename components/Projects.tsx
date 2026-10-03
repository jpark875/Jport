import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_3fr]">
      <div>
        <h2 className="font-heading text-3xl font-medium text-[#E2E8F0] lg:sticky lg:top-8">
          Projects
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#94A3B8] lg:sticky lg:top-20">
          Six repositories, each runnable from a fresh clone.
        </p>
      </div>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
