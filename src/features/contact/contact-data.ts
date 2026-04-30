import type {
  ContactFormData,
  ContactRole,
  InquiryType,
} from "./contact-types";

export const inquiryOptions: {
  description: string;
  label: string;
  value: InquiryType;
}[] = [
  {
    value: "request-demo",
    label: "Request a Demo",
    description: "Show me Acad AI in action",
  },
  {
    value: "general-inquiry",
    label: "General Inquiry",
    description: "I have a different question",
  },
];

export const roleOptions: {
  icon: "graduation-cap" | "notebook-text" | "user-round-cog";
  label: string;
  value: ContactRole;
}[] = [
  {
    value: "student",
    label: "Student",
    icon: "graduation-cap",
  },
  {
    value: "teacher",
    label: "Teacher / Lecturer",
    icon: "notebook-text",
  },
  {
    value: "institutional-admin",
    label: "Institutional Admin",
    icon: "user-round-cog",
  },
];

export const initialContactFormData: ContactFormData = {
  email: "",
  inquiryType: null,
  institutionName: "",
  message: "",
  name: "",
  phoneNumber: "",
  role: null,
};
