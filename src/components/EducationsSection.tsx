import { TEducation } from "@/types";
import { map } from "lodash";
import { EducationCard } from "./EducationCard";

type EducationsSectionProps = {
  educations: TEducation[];
};

export default function EducationsSection({
  educations,
}: EducationsSectionProps) {
  return (
    <section id="educations" className="section min-h-full p-3 bg-secondary">
      <div className="w-full max-w-[1024px] md:mx-auto ">
        <div className="py-5">
          <h2 className="text-3xl text-center my-5">Educations</h2>
        </div>
        <div className="flex flex-col gap-3">
          {map(educations, (x: TEducation, i: number) => (
            <EducationCard education={x} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
