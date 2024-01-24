import { REVALIDATE } from "@/constants";
import { BaseService } from "./base.service";

export class ContactService extends BaseService {
  many() {
    return this.get(`/wp-json/wp/v2/contacts?status=publish`, {
      next: { revalidate: REVALIDATE },
    });
  }
}
