import { storeToRefs } from "pinia";

import { useProfileStore }
from "../store/profile.store";

export const useProfile = () => {
  const profileStore =
    useProfileStore();

  const { loading } =
    storeToRefs(profileStore);

  return {
    loading,

    updateProfile:
      profileStore.updateProfile,
  };
};