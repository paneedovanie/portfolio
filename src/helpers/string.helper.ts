import { decode } from "html-entities";

export const renderedToPlainString = (text: string) => {
  return decode(text);
};
