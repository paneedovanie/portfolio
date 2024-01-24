import { TProject } from "@/types";
import { BaseService } from "./base.service";
import { REVALIDATE } from "@/constants";

export class ProjectService extends BaseService {
  many(): Promise<TProject[]> {
    return this.get(`/wp-json/wp/v2/projects?status=publish`, {
      next: { revalidate: REVALIDATE },
    });
  }

  one(id: number): Promise<TProject> {
    return this.get(`/wp-json/wp/v2/projects/${id}`, {
      next: { revalidate: REVALIDATE },
    });
  }
}
