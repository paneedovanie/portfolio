import { TProject } from "@/types";
import { BaseService } from "./base.service";

export class ProjectService extends BaseService {
  many(): Promise<TProject[]> {
    return this.get(`/wp-json/wp/v2/projects?status=publish`);
  }

  one(id: number): Promise<TProject> {
    return this.get(`/wp-json/wp/v2/projects/${id}`);
  }
}
