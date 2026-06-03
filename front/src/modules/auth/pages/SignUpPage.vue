<template>
  <div class="bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center gap-3">
    <form 
      @submit.prevent="onSubmit"
      class="w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex"
    >
      <!-- left -->
      <div
        class="md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-3"
      >
        <div>
          <h1 class="font-semibold text-black text-2xl">let's get started</h1>
          <h2 class="text-[#999797] text-[18px]">Create your account</h2>
        </div>
        <BaseInput
          v-model="name"
          label="Name"
          className="border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] rounded-md"
          divClassname="w-[80%]"
          placeholder="Enter your name"
          :error="nameError"
        />
        <BaseInput
          v-model="email"
          label="Email"
          className="border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] rounded-md"
          divClassname="w-[80%]"
          placeholder="Enter your email"
          :error="emailError"
        />
        <BasePassword
          v-model="password"
          label="Password"
          className="border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] rounded-md"
          divClassname="w-[80%]"
          placeholder="Enter your password"
          :error="passwordError"
        />
        <div class="flex md:w-[50%] w-[70%] items-center justify-between">
          <button
            type="button"
            @click="role = 'student'"
            class="px-[10px] py-[5px] border-[2px] rounded-xl cursor-pointer"
            :class="
              role === 'student'
                ? 'border-[#44B55F]  text-black'
                : 'border-[#e7e6e6]'
            "
          >
            Student
          </button>
          <button
            type="button"
            @click="role = 'educator'"
            class="px-[10px] py-[5px] border-[2px] rounded-xl cursor-pointer"
            :class="
              role === 'educator'
                ? 'border-[#44B55F]  text-black'
                : 'border-[#e7e6e6]'
            "
          >
            Educator
          </button>
        </div>

        <BaseButton
          type="submit"
          text="Sign Up"
          :loading="loading"
          className="w-[80%] h-[40px] bg-[#44B55F] text-white cursor-pointer flex items-center justify-center rounded-md"
        />
        <div class="w-[80%] flex items-center gap-2">
          <div class="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
          <div class="w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center">Or continue</div>
          <div class="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
        </div>
        <button type="button" class="w-[80%] h-[40px] border-1 border-black rounded-[5px] flex items-center justify-center cursor-pointer" @click="googleSignIn">
          <img src="../../../assets/google.jpg" alt="Google" class="w-[25px]" />
          <span class="text-[18px] text-gray-500">oogle</span>
        </button>
        <div class="text-[#6f6f6f]">already have an account? 
          <router-link 
            to="/login" 
            class="underline underline-offset-1 text-black"
          >
            Login
          </router-link>
        </div>
      </div>
      <!-- right -->
      <div
        class="w-[50%] h-[100%] rounded-r-2xl bg-green-100 md:flex flex-col items-center justify-center hidden"
      >
        <img src="../../../assets/logo.png" alt="Logo" class="w-50" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from "vue-router";
import { useField } from "vee-validate";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../../../../utils/firebase.js';

import BaseInput from "../../../components/ui/BaseInput.vue";
import BasePassword from "../../../components/ui/BasePassword.vue";
import BaseButton from "../../../components/ui/BaseButton.vue";

import { useRegisterForm } from "../composables/useRegisterForm";
import { useAuth } from "../../auth/composables/useAuth";
import { useToast } from '../../../composables/useToast.js';

const router = useRouter();
const toast = useToast();

const { handleSubmit } = useRegisterForm();
const { signUp, loading, googleAuth } = useAuth();
const { 
  value: name,
  errorMessage: nameError,
} = useField("name");
const { 
  value: email,
  errorMessage: emailError,
} = useField("email");
const { 
  value: password,
  errorMessage: passwordError,
} = useField("password");
const {
  value: role,
} = useField("role");


const onSubmit = handleSubmit(
  async (values) => {
    try {
      await signUp(values);
      router.push("/");
      toast.success("SignUp Successfully")
    } catch (error) {
      console.error('Sign up failed:', error);
      toast.error(error.response.data.message)
    }
  }
)

const googleSignIn = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    console.log("signUpResponse", response);
    
    let user = response.user;
    let Gname = user.displayName;
    let Gemail = user.email;

    await googleAuth({ name: Gname, email: Gemail, role:role.value });
    router.push("/");
    toast.success("Login Successfully")
  } catch (error) {
    console.error('Google Sign-In failed:', error);
    toast.error(error.response.data.message)
  }
}
</script>

<style>

</style>