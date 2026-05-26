<template>
  <div class="bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center gap-3">
    <form class="w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex">
      <!-- left -->
      <div
        class="md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-3"
      >
        <div>
          <h1 class="font-semibold text-black text-2xl">let's get started</h1>
          <h2 class="text-[#999797] text-[18px]">Create your account</h2>
        </div>
        <div class="flex flex-col gap-1 w-[80%] items-start justify-center px-3">
          <label for=""></label>
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

</script>

<style>

</style>