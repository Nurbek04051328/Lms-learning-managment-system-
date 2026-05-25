router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (to.meta.requiresAuth && !token) {
    return next("login");
  };

  if (to.meta.role && to.meta.role !== role) {
    return next("/403");
  };
  next();
});