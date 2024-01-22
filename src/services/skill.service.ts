import { BaseService } from "./base.service";

export class SkillService extends BaseService {
  many() {
    return this.get(`/wp-json/wp/v2/skills?status=publish`);
  }
}
