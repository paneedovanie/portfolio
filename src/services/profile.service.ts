import { BaseService } from "./base.service";

export class ProfileService extends BaseService {
  many() {
    return this.get(`/wp-json/wp/v2/profiles?status=publish`);
  }
}
