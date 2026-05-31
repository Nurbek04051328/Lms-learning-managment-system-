import authRoutes from "../modules/auth/router";
import homeRoutes from "../modules/home/router";
import studentRoutes from "../modules/student/router";

const routes = [
  ...homeRoutes,

  ...authRoutes,

  ...studentRoutes,
];

export default routes;