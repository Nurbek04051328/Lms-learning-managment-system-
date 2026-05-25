<script setup>
import  { computed } from 'vue';
import { useRoute } from 'vue-router';

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
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>
