import Card from "@/components/Card";
import Chip from "@/components/Chip";
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

export const generateStaticParams = async () => {
  const experiences = await experienceService.many();

  const paths = experiences.map((e) => ({
    params: { id: e.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
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
