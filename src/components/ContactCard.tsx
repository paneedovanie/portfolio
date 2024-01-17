import { renderedToPlainString } from "@/helpers";
import { TContact, TContactType } from "@/types";
import Link from "next/link";

type ContactCardProps = {
  contact: TContact;
};

const LinkType = ({ value }: { value: string }) => {
  return (
    <Link href={value} target="_blank">
      {value}
    </Link>
  );
};

const EmailType = ({ value }: { value: string }) => {
  return <Link href={`mailto: ${value}`}>{value}</Link>;
};

const PhoneType = ({ value }: { value: string }) => {
  return <span className="font-semibold">{value}</span>;
};

const typeElement: Record<
  TContactType,
  ({ value }: { value: string }) => JSX.Element
> = {
  link: LinkType,
  email: EmailType,
  phone: PhoneType,
};

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <div className="flex gap-1">
      <div>{renderedToPlainString(contact.title.rendered)}: </div>
      <div>{typeElement[contact.contact_type]({ value: contact.value })}</div>
    </div>
  );
};
