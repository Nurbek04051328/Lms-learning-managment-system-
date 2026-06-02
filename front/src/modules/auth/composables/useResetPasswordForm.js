import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { resetPasswordSchema } from "../schemas/resetPassword.schema";

export function useResetPasswordForm() {
  return useForm({
    validationSchema: toTypedSchema(resetPasswordSchema),

    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
}