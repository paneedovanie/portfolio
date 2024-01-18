import { renderedToPlainString } from "@/helpers";
import { TMedia, TProject } from "@/types";
import Card from "./Card";
import Link from "next/link";
import FeaturedImage from "./FeaturedImage";
import { InView } from "react-intersection-observer";
import { HTMLAttributes, Ref } from "react";

type ProjectCardProps = HTMLAttributes<HTMLDivElement> & {
  project: TProject;
  mediasMapper: Record<number, TMedia>;
};

export const ProjectCard = ({
  project,
  mediasMapper,
  ...props
}: ProjectCardProps) => {
  const featureImageUrl =
    mediasMapper[project.featured_media]?.source_url ?? "";

  return (
    <Card
      {...props}
      className={
        "bg-white bg-opacity-0 border-0 hover:bg-opacity-100 hover:border-1 " +
        props.className
      }
    >
      <FeaturedImage url={featureImageUrl} />
      <h4 className="text-xl mb-1">
        {renderedToPlainString(project.title.rendered)}
      </h4>
      <div className="mb-5 line-clamp-1">{project.description}</div>
      <div>
        <Link href={`/projects/${project.id}`}>View</Link>
      </div>
    </Card>
  );
};
