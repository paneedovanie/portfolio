import { renderedToPlainString } from "@/helpers";
import { TMedia, TProject } from "@/types";
import Card from "./Card";
import Link from "next/link";

type ProjectCardProps = {
  project: TProject;
  mediasMapper: Record<number, TMedia>;
};

export const ProjectCard = ({ project, mediasMapper }: ProjectCardProps) => {
  const featureImageUrl =
    mediasMapper[project.featured_media]?.source_url ?? "";

  return (
    <Card className="bg-opacity-0 border-0 hover:bg-opacity-100 hover:border-1">
      <div
        className="w-full aspect-square bg-cover bg-center rounded-2xl mb-3"
        style={{ backgroundImage: `url(${featureImageUrl})` }}
      ></div>
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
