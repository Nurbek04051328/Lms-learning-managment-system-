<template>
  <div class="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
      <RouterLink
        to="/profile"
        class="absolute top-4 left-4 w-[40px] h-[40px] flex items-center justify-center rounded-full    text-gray-700 text-[20px] cursor-pointer"
      >
        <i class="pi pi-arrow-left" ></i>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../../auth/composables/useAuth";

const router = useRouter();

const { user } = useAuth();

</script>

<style>

</style>