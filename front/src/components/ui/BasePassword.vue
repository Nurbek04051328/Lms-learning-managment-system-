<template>
  <div 
    class="flex flex-col gap-1 items-start justify-center"
    :class="divClassname"
  >
    <label class="font-semibold">
      {{ label }}
    </label>

    <div class="relative w-[100%]">
      <input 
        :type="
          showPassword 
          ? 'text' 
          : 'password'
        "
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
      <i
        @click="showPassword = !showPassword"
        :class="
          showPassword
            ? 'pi pi-eye-slash'
            : 'pi pi-eye'
        "
        class="absolute  cursor-pointer right-[15px] top-[50%] -translate-y-[50%] text-gray-500"
      ></i>
    </div>
    <span
      v-if="error"
      class="text-red-500 text-sm"
    >
    {{ error }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  modelValue: String,
  label: String,
  className: String,
  divClassname: String,
  placeholder: String,
  error: String,
});

const emit = defineEmits([
  "update:modelValue",
]);

const showPassword = ref(false);

</script>

<style>

</style>