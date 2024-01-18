import { TContact } from "@/types";
import { map } from "lodash";
import { ContactCard } from "./ContactCard";
import Card from "./Card";

type ContactsSectionProps = {
  contacts: TContact[];
};

export default function ContactsSection({ contacts }: ContactsSectionProps) {
  return (
    <section id="contacts" className="section min-h-full p-3">
      <div className="w-full max-w-[1024px] md:mx-auto">
        <div className="py-5">
          <h2 className="text-3xl text-center my-5 text-white">Contacts</h2>
        </div>
        <Card className="flex flex-col gap-3 bg-white">
          {map(contacts, (x: TContact, i: number) => (
            <ContactCard contact={x} key={i} />
          ))}
        </Card>
      </div>
    </section>
  );
}
