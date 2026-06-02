import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { sendOtpSchema } from "../schemas/sendOtp.schema";

export function useSendOtpForm() {
  return useForm({
    validationSchema: toTypedSchema(sendOtpSchema),
    initialValues: {
      email: "",
    },
  });
}