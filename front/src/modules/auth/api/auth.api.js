import api from "../../../api/axios";

export default {
  login (payload) {
    return api.post("api/auth/login", payload);
  },

  signUp(payload) {
    return api.post("api/auth/signup", payload);
  },

  logout() {
    return api.get("api/auth/logout");
  }
}