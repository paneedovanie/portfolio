import { BaseService } from "./base.service";

export class EducationService extends BaseService {
  many() {
    return this.get(`/wp-json/wp/v2/educations?status=publish`);
  }
}
