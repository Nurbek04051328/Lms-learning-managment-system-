<template>
  <div class="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
      <RouterLink
        to="/"
        class="absolute top-4 left-4 w-[40px] h-[40px] flex items-center justify-center rounded-full    text-gray-700 text-[20px] cursor-pointer"
      >
        <i class="pi pi-arrow-left" ></i>
      </RouterLink>
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

        <h2 class="text-2xl font-bold mt-4 text-gray-800">
          {{ user?.name }}
        </h2>
        <p class="text-gray-500 text-sm ">
          {{ user?.role }}
        </p>
      </div>
      <div class="mt-6 space-y-4">
        <div class="text-sm flex items-center justify-start gap-1">
          <span class="font-semibold text-gray-700">Email:</span>
          <span>{{ user?.email }}</span>
        </div>
        <div class="text-sm flex items-center justify-start gap-1">
          <span class="font-semibold text-gray-700">Bio:</span>
          <span>{{ user?.description }}</span>
        </div>
        <div class="text-sm flex items-center justify-start gap-1">
          <span class="font-semibold text-gray-700">Enrolled Courses:</span>
          <span>{{ user?.enrolledCourses?.length || 0 }}</span>
        </div>
      </div>
      <div class="mt-6 flex justify-center gap-4">
        <RouterLink
          to="/profile/edit"
          class="bg-black text-white active:bg-[#4b4b4b] cursor-pointer transition font-bold py-2 px-5 rounded"
        >
          Edit Profile
        </RouterLink>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAuth } from "../../auth/composables/useAuth";

const router = useRouter();

const { user } = useAuth();
</script>

<style>

</style>