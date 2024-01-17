import { TTag } from "@/types";
import { BaseService } from "./base.service";

export class TagService extends BaseService {
  many({ ids }: { ids: number[] }): Promise<TTag[]> {
    return this.get(`/wp-json/wp/v2/tags`, {
      include: ids,
    });
  }
  one(id: number): Promise<TTag> {
    return this.get(`/wp-json/wp/v2/tags/${id}`);
  }
}
