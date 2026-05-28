<template>
  <button
  :type="type"
  :disabled="loading"
  :class="className"
  >
    {{ loading ? "Loading..." : text }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  loading: Boolean,

  text: String,

  className: String,

  type: {
    type:String,
    default: "button",
  },
});
</script>

<style>

</style>