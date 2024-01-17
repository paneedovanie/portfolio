import ContactsSection from "@/components/ContactsSection";
import EducationsSection from "@/components/EducationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import IntroductionSection from "@/components/IntroductionSection";
import ProjectsSection from "@/components/ProjectsSection";
import {
  contactService,
  educationService,
  experienceService,
  mediaService,
  profileService,
  projectService,
} from "@/services";
import {
  TContact,
  TEducation,
  TExperience,
  TProfile,
  TProject,
  TMedia,
} from "@/types";
import { forEach, map } from "lodash";
import Head from "next/head";

type HomeProps = {
  experiences: TExperience[];
  projects: TProject[];
  educations: TEducation[];
  contacts: TContact[];
  profiles: TProfile[];
  mediasMapper: Record<number, TMedia>;
};

export const getServerSideProps = async () => {
  const experiences = await experienceService.many();
  const projects = await projectService.many();
  const educations = await educationService.many();
  const contacts = await contactService.many();
  const profiles = await profileService.many();

  const medias = await mediaService.many({
    ids: map(projects, (p) => p.featured_media),
  });

  const mediasMapper: Record<number, TMedia> = {};

  forEach(medias, (m) => {
    mediasMapper[m.id] = m;
  });

  return {
    props: {
      experiences,
      projects,
      educations,
      contacts,
      profiles,
      mediasMapper,
    },
  };
};

export default function Home({
  experiences,
  projects,
  educations,
  contacts,
  profiles,
  mediasMapper,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Edovanie Hiramis</title>
      </Head>
      <main className="sections-container">
        <IntroductionSection profiles={profiles} />
        <ProjectsSection projects={projects} mediasMapper={mediasMapper} />
        <ExperiencesSection experiences={experiences} />
        <EducationsSection educations={educations} />
        <ContactsSection contacts={contacts} />
      </main>
    </>
  );
}
