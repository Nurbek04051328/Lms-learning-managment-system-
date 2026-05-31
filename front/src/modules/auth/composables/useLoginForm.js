import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { loginSchema } from '../schemas/login.schema';

export function useLoginForm() {
  return useForm({
    validationSchema: toTypedSchema(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });
}