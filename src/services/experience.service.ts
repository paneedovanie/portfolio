import { TExperience } from "@/types";
import { BaseService } from "./base.service";
import { REVALIDATE } from "@/constants";

export class ExperienceService extends BaseService {
  many(): Promise<TExperience[]> {
    return this.get(`/wp-json/wp/v2/experiences?status=publish`, {
      next: { revalidate: REVALIDATE },
    });
  }

  one(id: number): Promise<TExperience> {
    return this.get(`/wp-json/wp/v2/experiences/${id}`, {
      next: { revalidate: REVALIDATE },
    });
  }
}
