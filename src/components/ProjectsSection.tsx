import { TMedia, TProject } from "@/types";
import { map } from "lodash";
import { ProjectCard } from "./ProjectCard";

type ProjectsSectionProps = {
  projects: TProject[];
  mediasMapper: Record<number, TMedia>;
};

export default function ProjectsSection({
  projects,
  mediasMapper,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="section min-h-full p-3">
      <div className="w-full max-w-[1024px] md:mx-auto">
        <div className="py-5">
          <h2 className="text-3xl text-center my-5">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {map(projects, (x: TProject, i: number) => (
            <ProjectCard project={x} key={i} mediasMapper={mediasMapper} />
          ))}
        </div>
      </div>
    </section>
  );
}
