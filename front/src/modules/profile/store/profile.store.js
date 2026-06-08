import { defineStore } from "pinia";

import profileApi from "../api/profile.api";

export const useProfileStore =
  defineStore("profile", {
    state: () => ({
      loading: false,
    }),

    actions: {
      async updateProfile(payload) {
        try {
          this.loading = true;

          const res =
            await profileApi.updateProfile(
              payload
            );
          
          return res;
        } catch (error) {
          throw error;
        } finally {
          this.loading = false;
        }
      },
    },
  });