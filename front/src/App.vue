<script setup>
import  { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Toaster } from "vue-sonner";

import AuthLayout from "./layouts/AuthLayout.vue";


const route = useRoute();

const layouts = {
  auth: AuthLayout,
};
const currentLayout = computed(() => {
  console.log(route.meta.layout);
  return layouts[route.meta.layout] || AuthLayout;
});
</script>

<template>
  <Toaster
    position="top-right"
    richColors
  />
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>
