import { storeToRefs } from 'pinia';

import { useAuthStore } from '../store/auth.store';

export function useAuth() {
  const authStore = useAuthStore();

  const {
    user,
    loading,
    isAuthenticated,
  } = storeToRefs(authStore);

  return {
    user,
    loading,
    isAuthenticated,

    login: authStore.login,

    signUp: authStore.signUp,

    logout: authStore.logout,
  }
}