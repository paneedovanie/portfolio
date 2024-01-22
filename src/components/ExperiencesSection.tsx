import { TExperience } from "@/types";
import { map } from "lodash";
import { ExperienceCard } from "./ExperienceCard";
import { InView } from "react-intersection-observer";

type ExperiencesSectionProps = {
  experiences: TExperience[];
};

export default function ExperiencesSection({
  experiences,
}: ExperiencesSectionProps) {
  return (
    <section
      id="experiences"
      className="section min-h-[100vh] p-3 overflow-hidden"
    >
      <div className="w-full max-w-[1024px] md:mx-auto">
        <div className="py-5">
          <h2 className="text-3xl text-center my-5 text-white">Experiences</h2>
        </div>
        <div className="flex flex-col gap-3">
          {map(experiences, (x: TExperience, i: number) => (
            <InView key={i}>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  style={{
                    // transform: inView
                    //   ? "translateX(0vh)"
                    //   : `translateX(-100vh)`,
                    opacity: inView ? 1 : 0,
                    transitionDuration: "1s",
                  }}
                >
                  <ExperienceCard experience={x} key={i} />
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
