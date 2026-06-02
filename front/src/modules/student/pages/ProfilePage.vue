<template>
  <div>
    <h1 class="text-3xl font-bold">
      My Profile
    </h1>

    <div class="mt-5">
      <p>Name: {{ user?.name }}</p>
      <p>Email: {{ user?.email }}</p>
      <p>Role: {{ user?.role }}</p>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "../../auth/composables/useAuth";


const { user } = useAuth();
</script>