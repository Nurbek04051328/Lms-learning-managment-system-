import api from "../../../api/axios";

export default {
  login (payload) {
    return api.post("api/auth/login", payload);
  },

  signUp(payload) {
    return api.post("api/auth/signup", payload);
  },

  currentUser() {
    return api.get("/api/user/current-user");
  },


  logout() {
    return api.get("api/auth/logout");
  }
}