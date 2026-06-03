import authRoutes from "../modules/auth/router";
import homeRoutes from "../modules/home/router";
import profileRoutes from "../modules/profile/router";
import studentRoutes from "../modules/student/router";

const routes = [
  
  ...authRoutes,
  
  ...homeRoutes,

  ...profileRoutes,

  ...studentRoutes,
];

export default routes;