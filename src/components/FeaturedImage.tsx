import { replace } from "lodash";
import { HTMLAttributes } from "react";

type FeaturedImage = HTMLAttributes<HTMLDivElement> & {
  url: string;
};

export default function FeaturedImage({ url, ...props }: FeaturedImage) {
  return (
    <div
      {...props}
      className={
        "aspect-square bg-cover bg-center rounded-2xl mb-3 shadow " +
        props.className
      }
      style={{
        backgroundImage: `url(${replace(url, "http:", `https:`)})`,
        ...props.style,
      }}
    />
  );
}
