import { TSkill } from "@/types";
import { map } from "lodash";
import { SkillCard } from "./SkillCard";

type SkillsSectionProps = {
  skills: TSkill[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="section p-3 bg-black">
      <div className="w-full max-w-[1024px] md:mx-auto min-h-[100vh] flex flex-col">
        <div className="py-5">
          <h2 className="text-3xl text-center my-5 text-white">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {map(skills, (x: TSkill, i: number) => (
            <SkillCard skill={x} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
