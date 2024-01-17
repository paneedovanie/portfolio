import { API_BASE_URL } from "@/constants";
import { ExperienceService } from "./experience.service";
import { ProjectService } from "./project.service";
import { EducationService } from "./education.service";
import { ContactService } from "./contact.service";
import { ProfileService } from "./profile.service";
import { MediaService } from "./media.service";
import { TagService } from "./tag.service";

export const experienceService = new ExperienceService(API_BASE_URL);
export const projectService = new ProjectService(API_BASE_URL);
export const educationService = new EducationService(API_BASE_URL);
export const contactService = new ContactService(API_BASE_URL);
export const profileService = new ProfileService(API_BASE_URL);
export const mediaService = new MediaService(API_BASE_URL);
export const tagService = new TagService(API_BASE_URL);
