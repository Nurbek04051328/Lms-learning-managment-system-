<template>
  <div class="bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center gap-3">
    <form class="w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex">
      <!-- left -->
      <div
        class="md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-3"
      >
        <div>
          <h1 class="font-semibold text-black text-2xl">Welcome Back</h1>
          <h2 class="text-[#999797] text-[18px]">Login in  your account</h2>
        </div>
        <div class="flex flex-col gap-1 w-[80%] items-start justify-center px-3">
          <label htmlFor="email" class="font-semibold"> Email</label>
          <input
            type="email"
            id="email"
            class="border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]"
            placeholder="Enter your email"
          />
        </div>
        <div class="flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative">
          <label htmlFor="password" class="font-semibold"> Password</label>
          <input
            :type="showpassword ? 'text' : 'password'"
            id="password"
            class="border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]"
            placeholder="Enter your password"
          />
          <i 
            :class="showpassword ? 'pi pi-eye-slash' : 'pi pi-eye'" @click="showpassword = !showpassword" 
            class="absolute  cursor-pointer right-[20px] bottom-[10%]"
          ></i>
        </div>

        <button
          class="w-[80%] h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-[5px]"
        >
          Login
        </button>
        <span class="text-[13px] cursor-pointer text-[#585757]">Forgot your password?</span>
        <div class="w-[80%] flex items-center gap-2">
          <div class="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
          <div class="w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center">Or continue</div>
          <div class="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
        </div>
        <div class="w-[80%] h-[40px] border-1 border-black rounded-[5px] flex items-center justify-center">
          <img src="../../../assets/google.jpg" alt="Google" class="w-[25px]" />
          <span class="text-[18px] text-gray-500">oogle</span>
        </div>
        <div class="text-[#6f6f6f]">create new account 
          <router-link 
            to="/signup" 
            class="underline underline-offset-1 text-black"
          >
            Login
          </router-link>
        </div>
      </div>
      <!-- right -->
      <div
        class="w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex flex-col items-center justify-center hidden"
      >
        <img src="../../../assets/logo.jpg" alt="Logo" class="w-30 shadow-2xl" />
        <span class="text-white text-2xl">VIRTUAL COURSES</span>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showpassword = ref(false)
</script>

<style>

</style>