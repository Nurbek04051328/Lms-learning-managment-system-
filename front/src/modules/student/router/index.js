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
];

export default studentRoutes;