import { TProfile } from "@/types";
import { forEach } from "lodash";
import { useMemo } from "react";
import ArrowDown from "./svg/ArrowDown";

type IntroductionSectionProps = {
  profiles: TProfile[];
};

export default function IntroductionSection({
  profiles,
}: IntroductionSectionProps) {
  const profilesMapper = useMemo(() => {
    const mapper: Record<string, string> = {};
    forEach(profiles, (p) => {
      mapper[p.slug] = p.value;
    });
    return mapper;
  }, [profiles]);

  const fullName = profilesMapper["full-name"];
  const role = profilesMapper["role"];
  const location = profilesMapper["location"];

  return (
    <section className="section h-[100vh] flex items-center justify-center px-3 overflow-hidden">
      <div className="w-full max-w-[1024px] md:mx-auto">
        <div className="mb-3">
          <h1 className="text-5xl text-center text-white">{fullName}</h1>
          <h2 className="text-2xl text-center text-secondary">{role}</h2>
          <h3 className="text-center text-secondary">{location}</h3>
        </div>

        <div className="group flex justify-center">
          <div className="text-white animate-bounce">
            <ArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
}
