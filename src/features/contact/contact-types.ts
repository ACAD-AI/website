export type InquiryType = "general-inquiry" | "request-demo";

export type ContactRole = "institutional-admin" | "student" | "teacher";

export interface ContactFormData {
  email: string;
  inquiryType: InquiryType | null;
  institutionName: string;
  message: string;
  name: string;
  phoneNumber: string;
  role: ContactRole | null;
}
