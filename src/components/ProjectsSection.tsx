import { TMedia, TProject } from "@/types";
import { map } from "lodash";
import { ProjectCard } from "./ProjectCard";
import * as hooks from "../hooks";
import { InView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

type ProjectsSectionProps = {
  projects: TProject[];
  mediasMapper: Record<number, TMedia>;
};

export default function ProjectsSection({
  projects,
  mediasMapper,
}: ProjectsSectionProps) {
  const { sm, md } = hooks.useMedia();

  const computeIndex = (index: number) => {
    if (md) {
      return index % 3;
    } else if (sm) {
      return index % 2;
    } else {
      return index;
    }
  };

  return (
    <section
      id="projects"
      className="section min-h-[100vh] p-3 bg-secondary overflow-hidden relative"
    >
      <div className="relative w-full max-w-[1024px] md:mx-auto z-20">
        <div className="py-5">
          <h2 className="text-4xl text-center my-5 w-full">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {map(projects, (x: TProject, i: number) => (
            <InView key={i}>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`transition-all transi`}
                  style={{
                    transform: inView
                      ? ""
                      : `translateY(${10 + 10 * computeIndex(i)}vh)`,
                    opacity: inView ? 1 : 0,
                    transitionDuration: "1s",
                  }}
                >
                  <ProjectCard project={x} mediasMapper={mediasMapper} />
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-center h-full z-10 w-full">
        <Parallax
          speed={-5}
          translateX={["10vw", "-10vw"]}
          translateY={["10vh", "-10vh"]}
        >
          <h6 className="text-9xl font-bold text-primary opacity-10">
            PROJECTS
          </h6>
        </Parallax>
      </div>
    </section>
  );
}
