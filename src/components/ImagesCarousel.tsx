import { map } from "lodash";
import Card from "./Card";
import { useRef, useState } from "react";
import Image from "next/image";

type ImagesCarouselProps = {
  imagesUrl: string[];
};

export default function ImagesCarousel({ imagesUrl }: ImagesCarouselProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = imagesUrl[selectedIndex];

  const handleClick = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const handleLeft = () => {
    setSelectedIndex((v) => (v === 0 ? imagesUrl.length - 1 : v - 1));
  };
  const handleRight = () => {
    setSelectedIndex((v) => (v === imagesUrl.length - 1 ? 0 : v + 1));
  };

  const handleClose = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="overflow-auto w-full">
        <div className="flex gap-1 min-w-[max-content]">
          {map(imagesUrl, (url) => {
            return (
              <Card
                key={url}
                className="bg-center bg-cover h-[200px] w-[200px] rounded-2xl cursor-pointer"
                style={{
                  backgroundImage: `url(${url})`,
                }}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </div>
      <dialog className="" ref={dialogRef}>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full flex justify-between">
            <div className="flex">
              <div
                className="cursor-pointer bg-white bg-opacity-80 px-3"
                onClick={handleLeft}
              >
                Left
              </div>
              <div
                className="cursor-pointer bg-white bg-opacity-80 px-3"
                onClick={handleRight}
              >
                Right
              </div>
            </div>
            <div
              className="cursor-pointer bg-white bg-opacity-80 px-3"
              onClick={handleClose}
            >
              Close
            </div>
          </div>
          <Image
            src={selectedImage}
            alt="Selected Image"
            width={1000}
            height={1000}
          />
        </div>
      </dialog>
    </>
  );
}
