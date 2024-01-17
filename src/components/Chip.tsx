import { HTMLAttributes } from "react";

type ChipProps = HTMLAttributes<HTMLDivElement> & {
  text: string;
};

export default function Chip({ text, ...props }: ChipProps) {
  return (
    <div
      {...props}
      className={
        `border-2 border-primary rounded-xl px-3 inline-block` + props.className
      }
    >
      <small className="font-semibold">{text}</small>
    </div>
  );
}
