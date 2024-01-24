import Card from "@/components/Card";
import Chip from "@/components/Chip";
import FeaturedImage from "@/components/FeaturedImage";
import ImagesCarousel from "@/components/ImagesCarousel";
import { renderedToPlainString } from "@/helpers";
import { mediaService, projectService, tagService } from "@/services";
import { TProject, TTag } from "@/types";
import { forEach, map } from "lodash";
import Head from "next/head";
import Link from "next/link";

type ProjectProps = {
  project: TProject;
  featuredImageUrl: string;
  tagsMapper: Record<number, TTag>;
};

export async function getStaticPaths() {
  const projects = await projectService.many();

  const paths = projects.map((p) => ({
    params: { id: p.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const project = await projectService.one(params.id);
  const media = project.featured_media
    ? await mediaService.one(project.featured_media)
    : null;
  const tags = await tagService.many({ ids: project.tags });
  const tagsMapper: Record<number, TTag> = {};
  forEach(tags, (t) => {
    tagsMapper[t.id] = t;
  });
  return {
    props: { project, featuredImageUrl: media?.source_url ?? "", tagsMapper },
  };
};

export default function Project({
  project,
  featuredImageUrl,
  tagsMapper,
}: ProjectProps) {
  return (
    <>
      <Head>
        <title>Edovanie Hiramis</title>
        <meta name="description" content="Edovanie Portfolio - Project" />
      </Head>
      <main className="p-3">
        <div className="w-full max-w-[1024px] md:mx-auto">
          <Card className="bg-white">
            <div className="mb-5">
              <Link
                href="/#projects"
                className="text-sm bg-secondary text-primary py-2 px-3 rounded-md border border-primary"
              >
                Back
              </Link>
            </div>
            <div className="flex flex-col md:flex-row mb-5 gap-3">
              <div className="flex-1 order-2 md:order-1">
                <div className="mb-5">
                  <h3 className="text-5xl mb-1">
                    {renderedToPlainString(project.title.rendered)}
                  </h3>
                  <Link href={project.link} target="_blank" className="text-sm">
                    {project.link}
                  </Link>
                </div>
                <h6 className="text-sm font-semibold">About this project</h6>
                <div className="mb-5">{project.description}</div>
              </div>
              <div className="order-1 md:order-2">
                <FeaturedImage className="w-[200px]" url={featuredImageUrl} />
              </div>
            </div>
            <ImagesCarousel
              className="mb-3"
              imagesUrl={map(project.images, (img) => img.guid)}
            />
            <div className="flex gap-1 flex-wrap">
              {map(project.tags, (t, i) => {
                return <Chip text={tagsMapper[t].name} key={i} />;
              })}
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
