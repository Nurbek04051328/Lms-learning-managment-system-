<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black/40 flex items-center justify-center"
  >
    <div class="bg-white p-5 rounded-xl">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    open: Boolean,
  })
</script>

<style>

</style>