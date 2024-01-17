import { renderedToPlainString } from "@/helpers";
import { TEducation } from "@/types";
import Card from "./Card";

type EducationCardProps = {
  education: TEducation;
};

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card className="bg-opacity-0 hover:bg-opacity-100">
      <h4 className="text-xl">
        {renderedToPlainString(education.title.rendered)}
      </h4>
      <h5>{education.school}</h5>
      <small>{education.duration}</small>
    </Card>
  );
};
