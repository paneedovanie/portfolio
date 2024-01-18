import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card(props: CardProps) {
  return (
    <div
      {...props}
      className={
        "border border-gray-200 rounded-xl p-5 overflow-hidden " +
        props.className
      }
    />
  );
}
