import ContactsSection from "@/components/ContactsSection";
import EducationsSection from "@/components/EducationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import IntroductionSection from "@/components/IntroductionSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import {
  contactService,
  educationService,
  experienceService,
  mediaService,
  profileService,
  projectService,
  skillService,
} from "@/services";
import {
  TContact,
  TEducation,
  TExperience,
  TProfile,
  TProject,
  TMedia,
  TSkill,
} from "@/types";
import { forEach, map } from "lodash";
import Head from "next/head";

type HomeProps = {
  experiences: TExperience[];
  projects: TProject[];
  educations: TEducation[];
  contacts: TContact[];
  profiles: TProfile[];
  skills: TSkill[];
  mediasMapper: Record<number, TMedia>;
};

export const maxDuration = 10;

export const getStaticProps = async () => {
  const experiences = await experienceService.many();
  const projects = await projectService.many();
  const educations = await educationService.many();
  const contacts = await contactService.many();
  const profiles = await profileService.many();
  const skills = await skillService.many({ per_page: 100 });

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
      skills,
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
  skills,
  mediasMapper,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Edovanie Hiramis</title>
        <meta name="description" content="Edovanie Portfolio" />
      </Head>
      <main className="sections-container">
        <IntroductionSection profiles={profiles} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} mediasMapper={mediasMapper} />
        <ExperiencesSection experiences={experiences} />
        <EducationsSection educations={educations} />
        <ContactsSection contacts={contacts} />
      </main>
    </>
  );
}
