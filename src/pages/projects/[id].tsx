import Card from "@/components/Card";
import ImagesCarousel from "@/components/ImagesCarousel";
import { renderedToPlainString } from "@/helpers";
import { mediaService, projectService } from "@/services";
import { TProject } from "@/types";
import { map } from "lodash";
import Head from "next/head";
import Link from "next/link";

type ProjectProps = {
  project: TProject;
  featuredImageUrl: string;
};

export const getServerSideProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const project = await projectService.one(params.id);
  const media = await mediaService.one(project.featured_media);
  return { props: { project, featuredImageUrl: media.source_url } };
};

export default function Project({ project, featuredImageUrl }: ProjectProps) {
  return (
    <>
      <Head>
        <title>Edovanie Hiramis</title>
      </Head>
      <main className="px-3">
        <div className="w-full max-w-[1024px] md:mx-auto">
          <div className="py-5">
            <Link href="/" className="text-sm">
              Back to Home
            </Link>
          </div>
          <Card>
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
                <div
                  className="bg-center bg-cover h-[200px] w-[200px] rounded-2xl"
                  style={{
                    backgroundImage: `url(${featuredImageUrl})`,
                  }}
                />
              </div>
            </div>
            <ImagesCarousel
              imagesUrl={map(project.images, (img) => img.guid)}
            />
          </Card>
        </div>
      </main>
    </>
  );
}
