import * as z from "zod";

export const LoginSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  queryType: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
});
