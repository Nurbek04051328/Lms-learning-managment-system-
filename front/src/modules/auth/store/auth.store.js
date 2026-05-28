import { defineStore } from 'pinia';

import authApi from '../api/auth.api';

import tokenService from '../../../services/token.service';

export const useAuthStore = defineStore(
  "auth",
  {
    state: () => ({
      user: null,

      accessToken: tokenService.getToken(),

      loading: false,

      initialized: false,
    }),

    getters: {
      isAuthenticated: (state) => !!state.accessToken,

      role: (state) => state.user?.role || null,
    },

    actions: {
      async login(payload) {
        try {
          this.loading = true;

          const response = await authApi.login(payload);

          const { accessToken, user } = response.data;
          
          this.accessToken = accessToken;

          this.user = user;

          tokenService.setToken(accessToken);

          return response.data;
        } catch (error){
          throw error;
        } finally {
          this.loading = false;
        }
      },

      async signUp(payload) {
        try {
          this.loading = true;

          const response = await authApi.signUp(payload);

          const { accessToken, user } = response.data;

          this.accessToken = accessToken;

          this.user = user;

          tokenService.setToken(accessToken);

          return response.data;
        } catch (error){
          throw error;
        } finally {
          this.loading = false;
        } 
      },

      logout() {
        this.user = null;

        this.accessToken = null;

        tokenService.removeToken();
      }
    },
    
    persist: {
      path: ["user", "accessToken"],
    }
  }
)