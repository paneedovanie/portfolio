import { BaseService } from "./base.service";

export class SkillService extends BaseService {
  many(query?: { per_page?: number }) {
    return this.get(`/wp-json/wp/v2/skills`, { status: "publish", ...query });
  }
}
