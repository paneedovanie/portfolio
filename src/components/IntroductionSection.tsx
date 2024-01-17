import { TProfile } from "@/types";
import { find } from "lodash";
import { useMemo } from "react";

type IntroductionSectionProps = {
  profiles: TProfile[];
};

export default function IntroductionSection({
  profiles,
}: IntroductionSectionProps) {
  const fullName = useMemo(
    () => find(profiles, (p) => p.slug === "full-name")?.value ?? "",
    [profiles]
  );
  const role = useMemo(
    () => find(profiles, (p) => p.slug === "role")?.value ?? "",
    [profiles]
  );

  return (
    <section className="section min-h-full flex items-center justify-center bg-white px-3">
      <div className="w-full max-w-[1024px] md:mx-auto">
        <div>
          <h1 className="text-5xl text-center">{fullName}</h1>
          <h3 className="text-2xl text-center">{role}</h3>
        </div>
      </div>
    </section>
  );
}
