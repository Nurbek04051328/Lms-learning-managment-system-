const studentRoutes = [
  {
    path: "/student",

    component: () =>
      import("../pages/DashboardPage.vue"),

    meta: {
      layout: "dashboard",

      requiresAuth: true,

      roles: ["student"],
    },
  },
  {
    path: "/profile",
    component: () =>
      import("../pages/ProfilePage.vue"),

    meta: {
      layout: "dashboard",
      requiresAuth: true,
    },
  },
];

export default studentRoutes;