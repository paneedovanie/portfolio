import { renderedToPlainString } from "@/helpers";
import { TExperience } from "@/types";
import Card from "./Card";
import Link from "next/link";

type ExperienceCardProps = {
  experience: TExperience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="hover:shadow bg-white">
      <h4 className="text-xl">
        {renderedToPlainString(experience.title.rendered)}
      </h4>
      <h5>{experience.company}</h5>
      <div className="mb-5">
        <small>{experience.duration}</small>
      </div>
      <div>
        <Link
          href={`/experiences/${experience.id}`}
          className="inline-block bg-primary text-center text-white py-2 px-3 rounded-md w-full sm:w-auto"
        >
          View
        </Link>
      </div>
    </Card>
  );
};
