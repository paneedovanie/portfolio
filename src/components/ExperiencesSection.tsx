import { TExperience } from "@/types";
import { map } from "lodash";
import { ExperienceCard } from "./ExperienceCard";

type ExperiencesSectionProps = {
  experiences: TExperience[];
};

export default function ExperiencesSection({
  experiences,
}: ExperiencesSectionProps) {
  return (
    <section id="experiences" className="section min-h-full p-3">
      <div className="w-full max-w-[1024px] md:mx-auto">
        <div className="py-5">
          <h2 className="text-3xl text-center my-5 text-white">Experiences</h2>
        </div>
        <div className="flex flex-col gap-3">
          {map(experiences, (x: TExperience, i: number) => (
            <ExperienceCard experience={x} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
