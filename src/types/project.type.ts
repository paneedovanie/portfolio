export type TProject = {
  title: {
    rendered: string;
  };
  id: number;
  featured_media: number;
  tags: number[];
  link: string;
  description: string;
  images: { guid: string }[];
};
