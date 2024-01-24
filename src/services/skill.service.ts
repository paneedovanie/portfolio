import { REVALIDATE } from "@/constants";
import { BaseService } from "./base.service";

export class SkillService extends BaseService {
  many(query?: { per_page?: number }) {
    return this.get(
      `/wp-json/wp/v2/skills?status=publish` +
        (query?.per_page !== undefined ? `&per_page=${query?.per_page}` : ""),
      { next: { revalidate: REVALIDATE } }
    );
  }
}
