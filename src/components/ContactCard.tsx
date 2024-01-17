import { renderedToPlainString } from "@/helpers";
import { TContact } from "@/types";

type ContactCardProps = {
  contact: TContact;
};

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <div className="flex gap-1">
      <div>{renderedToPlainString(contact.title.rendered)}: </div>
      <div className="font-bold">{contact.value}</div>
    </div>
  );
};
