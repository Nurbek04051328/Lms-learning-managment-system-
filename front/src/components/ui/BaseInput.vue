<template>
  <div class="flex flex-col gap-1 w-[80%] items-start justify-center px-3">
    <label class="font-semibold">
      {{ label }}
    </label>

    <input 
      :type="type" 
      :value="modelValue"
      :placeholder="placeholder"
      @input="
        emit(
          'update:modelValue', 
          $event.target.value
        )
      "
      :class="className"
    />
    <span
      v-if="error"
      class="text-red-500 text-sm"
    >
      {{ error }}
    </span>
    
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  className: String,
  type: {
    type: String,
    default: "text",
    required: false,
  },
  placeholder: String,
  error: String,
});

const emit = defineEmits([
  "update:modelValue",
]);

</script>

<style>

</style>