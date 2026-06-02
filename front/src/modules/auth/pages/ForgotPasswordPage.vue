<template>
  <div class="min-h-screen flex items-center justify-center w-full px-4">
    <!-- step 1 -->
    <div 
      v-if="step == 1"
      class="bg-white shadow-md rounded-xl p-8 max-w-md w-full"
    >
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 ">
        Forgot Your Password
      </h2>
      <form
        @submit.prevent="handleSendOtp" 
        class="space-y-4 w-full"
      >
        <BaseInput
          v-model="email"
          label="Enter your email address"
          className="mt-1 w-[100%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="you@example.com"
          :error="emailError"
        />
        <BaseButton
          type="submit"
          text="Send OTP"
          :loading="loading"
          className="w-full h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-md"
        />
      </form>
      <div class="flex justify-center mt-2">
        <router-link 
          to="/login" 
          class="text-black"
        >
          Back to Login
        </router-link>
      </div>
    </div>
    <!-- step 2 -->
    <div v-if="step == 2" class="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 ">
        Enter OTP
      </h2>
      <form 
        @submit.prevent="handleVerifyOtp"
        class="space-y-4 w-full"
      >
        <BaseInput
          v-model="otp"
          label="Please enter the 6-digit code sent to your email"
          className="mt-1 w-[100%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder=" * * * * * *"
          :error="otpError"
        />
        <BaseButton
          type="submit"
          text="Verify OTP"
          :loading="loading"
          className="w-full h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-md"
        />
      </form>
      <div class="flex justify-center mt-2">
        <router-link 
          to="/login" 
          class="text-black"
        >
          Back to Login
        </router-link>
      </div>
    </div>
    <!-- step 3 -->
    <div v-if="step == 3" class="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 ">
        Reset Your Password
      </h2>
      <p class="text-sm text-gray-500 text-center mb-6">
        Enter a new password below to regain access to your account.
      </p>
      <form 
        @submit.prevent="handleResetPassword"
        class="space-y-4 w-full"
      >
        <BasePassword
          v-model="password"
          label="New Password"
          className="mt-1 w-[100%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Enter your new password"
          :error="passwordError"
        />
        <BasePassword
          v-model="confirmPassword"
          label="Confirm New Password"
          className="mt-1 w-[100%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Confirm your new password"
          :error="confirmPasswordError"
        />
        <BaseButton
          type="submit"
          text="Reset Password"
          :loading="loading"
          className="w-full h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-md"
        />
      </form>
      <div class="flex justify-center mt-2">
        <router-link 
          to="/login" 
          class="text-black"
        >
          Back to Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";


// Ui component imports
import BaseInput from "../../../components/ui/BaseInput.vue";
import BaseButton from "../../../components/ui/BaseButton.vue";
import BasePassword from "../../../components/ui/BasePassword.vue";

import { useAuth } from "../composables/useAuth";
import { useToast } from "../../../composables/useToast";

const router = useRouter();
const toast = useToast();

import { useField } from "vee-validate";

import { useSendOtpForm } from "../composables/useSendOtpForm";
import { useVerifyOtpForm } from "../composables/useVerifyOtpForm";
import { useResetPasswordForm } from "../composables/useResetPasswordForm";


const {
  sendOtp,
  verifyOtp,
  resetPassword,
} = useAuth();

let step = ref(1);
const loading = ref(false);

const sendOtpForm = useSendOtpForm();
const {
  value: email,
  errorMessage: emailError,
} = useField("email");


const verifyOtpForm = useVerifyOtpForm();
const {
  value: otp,
  errorMessage: otpError,
} = useField("otp");


const resetPasswordForm = useResetPasswordForm();
const {
  value: password,
  errorMessage: passwordError,
} = useField("password");
const {
  value: confirmPassword,
  errorMessage: confirmPasswordError,
} = useField("confirmPassword");


const handleSendOtp =
  sendOtpForm.handleSubmit(async (values) => {
    await sendOtp({ email: values.email });

    toast.success("OTP sent successfully");

    step.value = 2;
  });


const handleVerifyOtp =
  verifyOtpForm.handleSubmit(async (values) => {
    console.log("values", values);
    
    await verifyOtp({
      email: email.value,
      otp: values.otp,
    });

    toast.success("OTP verified");

    step.value = 3;
  });


const handleResetPassword =
  resetPasswordForm.handleSubmit(async (values) => {
    await resetPassword({
      email: email.value,
      password: values.password,
    });

    toast.success(
      "Password reset successful"
    );

    router.push("/login");
  });


</script>

<style>

</style>