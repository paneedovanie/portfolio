import { TEducation } from "@/types";
import { map } from "lodash";
import { EducationCard } from "./EducationCard";
import { Parallax } from "react-scroll-parallax";

type EducationsSectionProps = {
  educations: TEducation[];
};

export default function EducationsSection({
  educations,
}: EducationsSectionProps) {
  return (
    <section
      id="educations"
      className="section min-h-[100vh] p-3 bg-secondary relative"
    >
      <div className=" w-full max-w-[1024px] md:mx-auto relative h-full z-20">
        <div className="py-5">
          <h2 className="text-3xl text-center my-5">Educations</h2>
        </div>
        <div className="flex flex-col gap-3">
          {map(educations, (x: TEducation, i: number) => (
            <EducationCard education={x} key={i} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-center h-full z-10 w-full">
        <h6 className="text-9xl font-bold text-primary opacity-10">
          <div className="flex">
            <Parallax speed={-5} translateY={["10vh", "-10vh"]}>
              E
            </Parallax>
            <Parallax speed={-5} translateY={["-10vh", "10vh"]}>
              D
            </Parallax>
            <Parallax speed={-5} translateY={["10vh", "-10vh"]}>
              U
            </Parallax>
            <Parallax speed={-5} translateY={["-10vh", "10vh"]}>
              C
            </Parallax>
            <Parallax speed={-5} translateY={["10vh", "-10vh"]}>
              A
            </Parallax>
            <Parallax speed={-5} translateY={["-10vh", "10vh"]}>
              T
            </Parallax>
            <Parallax speed={-5} translateY={["10vh", "-10vh"]}>
              I
            </Parallax>
            <Parallax speed={-5} translateY={["-10vh", "10vh"]}>
              O
            </Parallax>
            <Parallax speed={-5} translateY={["10vh", "-10vh"]}>
              N
            </Parallax>
            <Parallax speed={-5} translateY={["-10vh", "10vh"]}>
              S
            </Parallax>
          </div>
        </h6>
      </div>
    </section>
  );
}
