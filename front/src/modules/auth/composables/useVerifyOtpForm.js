import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { verifyOtpSchema } from "../schemas/verifyOtp.schema";

export function useVerifyOtpForm() {
  return useForm({
    validationSchema: toTypedSchema(verifyOtpSchema),

    initialValues: {
      otp: "",
    },
  });
}