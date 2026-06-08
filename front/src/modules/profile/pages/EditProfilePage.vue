<template>
  <div class="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
      <RouterLink
        to="/profile"
        class="absolute top-4 left-4 w-[40px] h-[40px] flex items-center justify-center rounded-full    text-gray-700 text-[20px] cursor-pointer"
      >
        <i class="pi pi-arrow-left" ></i>
      </RouterLink>
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
        Edit Profile
      </h2>
      <form 
        action="" 
        class="space-y-5"
        @submit.prevent="onSubmit"
      >
        <div class="flex flex-col items-center text-center">
          <img 
            v-if="user?.photoUrl"
            :src="user?.photoUrl" 
            alt="User Photo"
            class="w-24 h-24 rounded-full object-cover border-4 border-black"
          >
          <div 
            v-else
            class="w-24 h-24 rounded-full text-white flex items-center justify-center text-[30px] border-2 bg-black border-white"
          >
            {{ user?.name.slice(0, 1).toUpperCase() }}
          </div>
        </div>
        <div>
          <label htmlFor="image" class="text-sm font-medium text-gray-700">
            Select Avatar
          </label>
          <input 
            id="image" 
            type="file" 
            accept="image/*"
            @change="handleImageChange"
            placeholder="Choose File No file chosen"
            class="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>
        <div>
          <BaseInput
            v-model="name"
            label="Name"
            className="border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] rounded-md"
            divClassname="w-[80%]"
            placeholder="Enter your name"
            :error="nameError"
          />
        </div>
        <div>
          <BaseInput
            v-model="email"
            label="Email"
            disabled
            className="border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] rounded-md"
            divClassname="w-[80%]"
            placeholder="Enter your email"
            :error="emailError"
          />
        </div>
        <div>
          <label class="text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea 
            rows="3"
            v-model="description"
            placeholder="Tell us about yourself"
            class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>
          <BaseButton
            type="submit"
            text="Save Changes"
            :loading="loading"
            className="w-full bg-black active:bg-[#454545] text-white py-2 rounded-md font-medium transition cursor-pointer"
          />
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import { useField } from "vee-validate";
import { useRouter } from "vue-router";
import BaseInput from "../../../components/ui/BaseInput.vue";
import BaseButton from "../../../components/ui/BaseButton.vue";

import { useAuth } from "../../auth/composables/useAuth";
import { useProfile } from "../composables/useProfile";
import { useToast } from "../../../composables/useToast.js";

const router = useRouter();
const toast = useToast();

const { user, getCurrentUser } = useAuth();
const { updateProfile, loading } = useProfile();

const {
  value: name,
  errorMessage: nameError,
} = useField("name", undefined, {
  initialValue: ""
});

const {
  value: description,
  errorMessage: descriptionError,
} = useField("description");

const {
  value: email,
  errorMessage: emailError,
} = useField("email", undefined, {
  initialValue: ""
});

const photoUrl = ref(null);
useField("photoUrl");

const handleImageChange = (e) => {
  photoUrl.value = e.target.files?.[0];
};

const onSubmit = async () => {
  try {
    const formData = new FormData();

    formData.append("name", name.value);
    formData.append(
      "description",
      description.value || ""
    );

    if (photoUrl.value) {
      formData.append(
        "photoUrl",
        photoUrl.value
      );
    }

    await updateProfile(formData);
    await getCurrentUser();

    router.push("/");
    toast.success(
      "Profile updated successfully"
    );

  } catch (error) {
    toast.error(
      error?.response?.data?.message
    );
  }
};

onMounted(() => {
  if (user.value) {
    name.value = user.value.name;
    email.value = user.value.email;
    description.value =
      user.value.description || "";
  }
});


</script>

<style>

</style>