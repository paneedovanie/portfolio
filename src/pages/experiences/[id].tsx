import Card from "@/components/Card";
import Chip from "@/components/Chip";
import FeaturedImage from "@/components/FeaturedImage";
import ImagesCarousel from "@/components/ImagesCarousel";
import { renderedToPlainString } from "@/helpers";
import { experienceService, tagService } from "@/services";
import { TExperience, TTag } from "@/types";
import { forEach, map } from "lodash";
import Head from "next/head";
import Link from "next/link";

type ExperienceProps = {
  experience: TExperience;
  tagsMapper: Record<number, TTag>;
};

export const getServerSideProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const experience = await experienceService.one(params.id);
  const tags = await tagService.many({ ids: experience.tags });
  const tagsMapper: Record<number, TTag> = {};
  forEach(tags, (t) => {
    tagsMapper[t.id] = t;
  });
  return {
    props: {
      experience,
      tagsMapper,
    },
  };
};

export default function Experience({
  experience,
  tagsMapper,
}: ExperienceProps) {
  return (
    <>
      <Head>
        <title>Edovanie Hiramis</title>
        <meta name="description" content="Edovanie Portfolio - Experience" />
      </Head>
      <main className="px-3">
        <div className="w-full max-w-[1024px] md:mx-auto">
          <div className="py-5">
            <Link href="/#experiences" className="text-sm">
              Back to Home
            </Link>
          </div>
          <Card className="bg-white">
            <div className="flex flex-col md:flex-row mb-5 gap-3">
              <div>
                <div className="mb-5">
                  <h3 className="text-5xl mb-1">
                    {renderedToPlainString(experience.title.rendered)}
                  </h3>
                  <h4 className="text-2xl">{experience.company}</h4>
                  <small>{experience.duration}</small>
                </div>
                <h6 className="text-sm font-semibold">About this experience</h6>
                <div className="mb-5">{experience.description}</div>
              </div>
            </div>
            <div className="flex gap-1 flex-wrap">
              {map(experience.tags, (t, i) => {
                return <Chip text={tagsMapper[t].name} key={i} />;
              })}
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
