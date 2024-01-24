import { TMedia } from "@/types";
import { BaseService } from "./base.service";
import { REVALIDATE } from "@/constants";

export class MediaService extends BaseService {
  many(params?: { ids?: number[] }): Promise<TMedia[]> {
    return this.get(
      `/wp-json/wp/v2/media` +
        (params?.ids?.length ? `?include=${params?.ids}` : ""),
      { next: { revalidate: REVALIDATE } }
    );
  }

  one(id: number): Promise<TMedia> {
    return this.get(`/wp-json/wp/v2/media/${id}`, {
      next: { revalidate: REVALIDATE },
    });
  }
}
