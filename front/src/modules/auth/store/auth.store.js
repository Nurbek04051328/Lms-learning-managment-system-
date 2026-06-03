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

      async sendOtp(payload) {
        console.log("payload", payload);
        
        return authApi.sendOtp(payload);
      },

      async verifyOtp(payload) {
        console.log("payload", payload);
        return authApi.verifyOtp(payload);
      },

      async resetPassword(payload) {
        return authApi.resetPassword(payload);
      },

      async googleAuth(payload) {
        try {
          this.loading = true;

          const res = await authApi.googleAuth(payload);

          await this.getCurrentUser();

          return res;
        } catch (error){
          throw error;
        } finally {
          this.loading = false;
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
    
    persist: true
  }
)