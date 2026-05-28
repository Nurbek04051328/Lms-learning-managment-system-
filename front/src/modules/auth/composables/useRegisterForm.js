import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { registerSchema } from '../schemas/register.schema';

export function useRegisterForm() {
  return useForm({
    validationSchema: toTypedSchema(registerSchema),
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "student",
    },
  });
}