import { defineStore } from 'pinia';

import authApi from '../api/auth.api';

import tokenService from '../../../services/token.service';

export const useAuthStore = defineStore(
  "auth",
  {
    state: () => ({
      user: null,
      
      loading: false,
      
      initialized: false,
    }),

    getters: {
      isAuthenticated: (state) => !!state.user,

      role: (state) => state.user?.role || null,
    },

    actions: {
      async login(payload) {
        try {
          this.loading = true;

          await authApi.login(payload);

          await this.getCurrentUser();

        } catch (error){
          throw error;
        } finally {
          this.loading = false;
        }
      },

      async signUp(payload) {
        try {
          this.loading = true;

          await authApi.signUp(payload);

          await this.getCurrentUser();

        } catch (error){
          throw error;
        } finally {
          this.loading = false;
        } 
      },

      async getCurrentUser() {
        try {

          const response =
            await authApi.currentUser();

          this.user = response.data;

          return response.data;
        } catch (error) {
          this.user = null;

          throw error;
        } finally {
          this.initialized = true;
        }
      },

      async logout() {
        try {
          await authApi.logout();
          
        }  finally {
          this.user = null;
          this.initialized = false;
        }
      }
    },
    
    persist: {
      paths: ["user"],
    }
  }
)