const profileRoutes = [
  {
    path: "/profile",

    component: () =>
      import("../pages/ProfilePage.vue"),

    meta: {
      layout: "main",
    },
  },
  {
    path: "/profile/edit",

    component: () =>
      import("../pages/EditProfilePage.vue"),

    meta: {
      layout: "main",
    },
  },
];

export default profileRoutes;