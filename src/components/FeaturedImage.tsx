import Image from "next/image";
import { HTMLAttributes } from "react";

type FeaturedImage = HTMLAttributes<HTMLDivElement> & {
  url: string;
};

export default function FeaturedImage({ url, ...props }: FeaturedImage) {
  return (
    <div
      {...props}
      className={
        "aspect-square rounded-2xl mb-3 shadow overflow-hidden " +
        props.className
      }
    >
      <Image
        src={url}
        alt="Feature Image"
        width={1000}
        height={1000}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
}
