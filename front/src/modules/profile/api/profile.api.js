import api from "../../../api/axios";

export default {
  updateProfile(payload) {
    return api.put(
      "/api/user/update-profile",
      payload,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );
  },
};