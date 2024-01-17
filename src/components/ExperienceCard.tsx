import { renderedToPlainString } from "@/helpers";
import { TExperience } from "@/types";
import Card from "./Card";
import { useState } from "react";

type ExperienceCardProps = {
  experience: TExperience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(true);
  };

  return (
    <Card
      className={`${showMore ? "" : "cursor-pointer"}`}
      onClick={handleClick}
    >
      <h4 className="text-xl">
        {renderedToPlainString(experience.title.rendered)}
      </h4>
      <div>{experience.company}</div>
      {showMore && (
        <div>
          <small>{experience.duration}</small>
          <div>{experience.description}</div>
        </div>
      )}
    </Card>
  );
};
