import { TMedia } from "@/types";
import { BaseService } from "./base.service";

export class MediaService extends BaseService {
  many(params?: { ids?: number[] }): Promise<TMedia[]> {
    return this.get(`/wp-json/wp/v2/media`, {
      include: params?.ids,
    });
  }

  one(id: number): Promise<TMedia> {
    return this.get(`/wp-json/wp/v2/media/${id}`);
  }
}
