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

  sendOtp(payload) {
    return api.post("/api/auth/send-otp", payload);
  },

  verifyOtp(payload) {
    return api.post("/api/auth/verify-otp", payload);
  },

  resetPassword(payload) {
    return api.post("/api/auth/reset-password", payload);
  },

  googleAuth(payload) {
    return api.post("/api/auth/google-auth", payload);
  },

  logout() {
    return api.get("api/auth/logout");
  }
}