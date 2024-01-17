import { BaseService } from "./base.service";

export class ExperienceService extends BaseService {
  many() {
    return this.get(`/wp-json/wp/v2/experiences?status=publish`);
  }
}
