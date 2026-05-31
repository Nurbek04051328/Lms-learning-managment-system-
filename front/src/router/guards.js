import { useAuthStore } from "../modules/auth/store/auth.store";

export function setupGuards(router) {
  router.beforeEach(async(to) => {
    const authStore = useAuthStore();

    if (!authStore.initialized) {
      try {
        await authStore.getCurrentUser();
      } catch (error) {
        authStore.user = null;
      }
    }

    // Auth required
    if (
      to.meta.requiresAuth &&
      !authStore.isAuthenticated
    ) {
      return "/login"
    }

    // Guest only
    if (
      to.meta.guest &&
      authStore.isAuthenticated
    ) {
      return "/"
    }

    // Role check
    if (
      to.meta.roles &&
      !to.meta.roles.includes(authStore.role)
    ) {
      return "/403"
    }

    return true
  });
}

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   if (to.meta.requiresAuth && !token) {
//     return next("login");
//   };

//   if (to.meta.role && to.meta.role !== role) {
//     return next("/403");
//   };
//   next();
// });