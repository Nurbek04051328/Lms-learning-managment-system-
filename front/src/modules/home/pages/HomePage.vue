<template>
  <div class="w-[100%] lg:h-[140vh] h-[70vh] relative">
    <MainNavbar/>
    <img 
        src="../../../assets/home1.jpg" 
        alt="Home Image"
        class="object-cover md:object-fill w-[100%] lg:h-[100%] h-[50vh]"
      >
      <span class="lg:text-[70px] absolute md:text-[40px] lg:top-[10%] top-[15%] w-[100%] flex items-center justify-center text-white font-bold text-[20px]">Grow Your Skills to Advance</span>
      <span class="lg:text-[70px] text-[20px] md:text-[40px] absolute lg:top-[18%] top-[20%] w-[100%] flex items-center justify-center text-white font-bold"> Your Career path</span>
      <div class="absolute lg:top-[30%] top-[75%] md:top-[80%] w-[100%] flex items-center justify-center gap-3 flex-wrap">
        <button class="px-[20px] py-[10px] border-2 lg:border-white border-black lg:text-white text-black rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer items-center justify-center">
          View All 
          <i class="pi pi-play-circle text-2xl lg:text-white text-black"></i>
        </button>
        <button class="px-[20px] py-[10px]  lg:bg-white bg-black lg:text-black text-white rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer items-center justify-center">
          Search with Ai
          <img src="../../../assets/SearchAi.png" alt="search ai" class="w-[30px] h-[30px] rounded-full">
        </button>
      </div>
    </div>
    <MainLogos/>
    <ExploreCourses/>
</template>

<script lang="ts" setup>
import MainNavbar from '../../../layouts/components/MainNavbar.vue';
import ExploreCourses from '../components/ExploreCourses.vue';
import MainLogos from '../components/MainLogos.vue';


</script>

<style>

</style>