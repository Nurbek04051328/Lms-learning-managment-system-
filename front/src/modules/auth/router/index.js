const authRoutes = [
  {
    path: "/login",
    component: () => import("../pages/LoginPage.vue"),
    meta: {
      layout: "auth",
      guest: true,
    },
  },
  {
    path: "/signup",
    component: () => import("../pages/SignUpPage.vue"),
    meta: {
      layout: "auth",
      guest: true,
    },
  },
];

export default authRoutes;