import { renderedToPlainString } from "@/helpers";
import { TSkill } from "@/types";
import { InView } from "react-intersection-observer";

type SkillCardProps = {
  skill: TSkill;
};

export const SkillCard = ({ skill }: SkillCardProps) => {
  const percent = (parseInt(skill.value) / 10) * 100;
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div>
          <div className="flex justify-between ">
            <h4 className="text-white text-xl">
              {renderedToPlainString(skill.title.rendered)}
            </h4>
            <span className="text-white">{percent}%</span>
          </div>
          <div className="rounded-md h-[10px] bg-primary overflow-hidden">
            <div
              ref={ref}
              className={`bg-white h-full rounded-md`}
              style={{
                width: inView ? `${percent}%` : "0%",
                transitionDuration: "1s",
              }}
            ></div>
          </div>
        </div>
      )}
    </InView>
  );
};
