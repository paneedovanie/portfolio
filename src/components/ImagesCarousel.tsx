import { map } from "lodash";
import { HTMLAttributes, useRef, useState } from "react";
import Image from "next/image";

type ImagesCarouselProps = HTMLAttributes<HTMLDivElement> & {
  imagesUrl: string[];
};

export default function ImagesCarousel({
  imagesUrl,
  ...props
}: ImagesCarouselProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = imagesUrl[selectedIndex];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
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
      <div {...props} className={"overflow-auto w-full " + props.className}>
        <div className="flex gap-1 min-w-[max-content]">
          {map(imagesUrl, (url, i) => {
            return (
              <div
                key={i}
                className="border border-gray-200 h-[100px] w-[100px] rounded-xl cursor-pointer shadow overflow-hidden p-0"
                onClick={() => handleClick(i)}
              >
                <Image
                  src={url}
                  alt="App Image"
                  width={1000}
                  height={1000}
                  className="object-cover object-center w-full h-full"
                />
              </div>
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
