export type TContactType = "link" | "phone" | "email";

export type TContact = {
  title: {
    rendered: string;
  };
  value: string;
  contact_type: TContactType;
};
