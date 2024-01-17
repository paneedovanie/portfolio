import { TExperience } from "@/types";
import { BaseService } from "./base.service";

export class ExperienceService extends BaseService {
  many() {
    return this.get(`/wp-json/wp/v2/experiences?status=publish`);
  }

  one(id: number): Promise<TExperience> {
    return this.get(`/wp-json/wp/v2/experiences/${id}`);
  }
}
