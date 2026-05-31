<script setup>
import  { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Toaster } from "vue-sonner";

import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from './layouts/MainLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';


const route = useRoute();

const layouts = {
  auth: AuthLayout,

  main: MainLayout,

  dashboard: DashboardLayout,

  empty: EmptyLayout,
};
const currentLayout = computed(() => {
  return layouts[route.meta.layout] || EmptyLayout;
});
</script>

<template>
  <Toaster
    position="top-right"
    :closeButton="true"
    closeButtonPosition="top-right"
    theme="system"
    richColors
  />
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>
