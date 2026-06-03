<template>
  <div class="w-[100%] h-[70px] fixed top-0 px-[20px] py-[10px] flex items-center justify-between bg-[#00000047] z-10">
    <div class="lg:w-[20%] w-[40%] lg:pl-[50px]">
      <img 
        src="../../assets/logo.png" 
        alt="nav-logo" 
        class="w-[40px] rounded-[5px] border-2 border-white"  >
    </div>
    <div class="w-[30%] lg:flex items-center justify-center gap-4 hidden">
      <template v-if="isAuthenticated">
        <div 
          @click="toggleProfileMenu"
          class="flex items-center gap-2"
        >
          <div class="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center tex-[20px] border-2 bg-black border-white cursor-pointer">
            {{ user?.name.slice(0,1).toUpperCase() }}
          </div>

          <span class="font-medium text-white">
            {{ user?.name }}
          </span>
        </div>

        <button
          class="px-[10px] py-[5px] border-2 border-white text-white bg-black rounded-[10px]"
        >
          Dashboard
        </button>

        <button
          @click="handleLogout"
          class="px-[10px] py-[5px] text-black bg-white rounded-[10px]"
        >
          Logout
        </button>
      </template>

      <!-- Login bo'lmagan user -->
      <template v-else>
        <RouterLink
          to="/login"
          class="px-[10px] py-[5px] border-2 border-white text-white bg-black rounded-[10px]"
        >
          Login
        </RouterLink>
      </template>
      <div 
        v-if="isAuthenticated && isProfileMenuOpen" 
        class="absolute top-[110%] right-[15%] flex items-center flex-col justify-center gap-2 text-[16px] rounded-md bg-white px-[15px] py-[10px] border-[2px] border-black hover:border-white hover:text-white cursor-pointer hover:bg-black"
      >
        <RouterLink
          to="/profile"
          class="bg-black text-white px-[30px] py-[10px] rounded-2xl"
        >
          My Profile
        </RouterLink>
        <span class="bg-black text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600">My Courses</span>
      </div>
    </div>
    <button @click="toggleMobileMenu" class="lg:hidden cursor-pointer">
      <i class="pi pi-bars text-[24px] text-white"></i>
    </button>

    <div 
      :class="isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'"
      class="fixed top-0 right-0 w-[70%] h-screen bg-black text-white z-50
         transition-all duration-300 ease-in-out"
    >
      <button @click="closeMobileMenu" class="absolute top-[10px] right-[10px] self-end text-2xl text-white">
        ✕
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../../modules/auth/composables/useAuth"

const router = useRouter();
const {
  user,
  isAuthenticated,
  logout,
} = useAuth();

const isProfileMenuOpen = ref(false);
const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value;
};

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleLogout = async () => {
  try {
    await logout();

    router.push("/login");
  } catch (error) {
    console.error(error);
  }
};

</script>

<style>

</style>