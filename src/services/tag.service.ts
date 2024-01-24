import { TTag } from "@/types";
import { BaseService } from "./base.service";
import { REVALIDATE } from "@/constants";

export class TagService extends BaseService {
  many(params: { ids: number[] }): Promise<TTag[]> {
    return this.get(
      `/wp-json/wp/v2/tags` +
        (params?.ids?.length ? `?include=${params?.ids}` : ""),
      { next: { revalidate: REVALIDATE } }
    );
  }
  one(id: number): Promise<TTag> {
    return this.get(`/wp-json/wp/v2/tags/${id}`, { next: { revalidate: 60 } });
  }
}
