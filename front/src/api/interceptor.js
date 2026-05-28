import api from "./axios";

import { useAuthStore } from "../modules/auth/store/auth.store";

export function setupInterceptors() {
  api.interceptors.response.use(
    (response) => response,

    async (error) => {
      const authStore = useAuthStore();

      const originalRequest = error.config;

      if(error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await api.get("api/auth/refresh");

          const { accessToken } = response.data;

          authStore.accessToken = accessToken;

          originalRequest.headers.Authorization = `Bearer ${accessToken}`;

          return api(originalRequest);
        } catch (refreshError) {
          authStore.logout();

          window.location.href = "/login";

          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
}