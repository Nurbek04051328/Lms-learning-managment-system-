import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { profileSchema } from '../schemas/profile.schema';

export function useProfileForm() {
  return useForm({
    validationSchema: toTypedSchema(profileSchema),
    initialValues: {
      name: "",
      email: "",
    },
  });
}