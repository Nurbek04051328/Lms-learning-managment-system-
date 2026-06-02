import { z } from "zod";

export const sendOtpSchema = z.object({
  email: z
    .string()
    .email("Please provide a valid email"),
});