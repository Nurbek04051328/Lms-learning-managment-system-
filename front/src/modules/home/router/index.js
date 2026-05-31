const homeRoutes = [
  {
    path: "/",

    component: () =>
      import("../pages/HomePage.vue"),

    meta: {
      layout: "main",
    },
  },
];

export default homeRoutes;