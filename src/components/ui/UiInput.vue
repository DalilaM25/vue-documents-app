<template>
  <input
    :class="['ui-input', { 'ui-input--disabled': disabled }]"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :disabled="disabled"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  disabled: false
});

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<style scoped>
.ui-input {
  width: 240px;
  height: 49px;
  padding: 16px 24px;
  gap: 16px;
  border-radius: var(--border-radius);
  border: 1.5px solid #E9ECEF;
  background: var(--color-background);
  font-family: var(--font-family);
  font-size: var(--body-font-size);
  font-weight: var(--body-font-weight);
  line-height: var(--body-line-height);
  color: var(--color-gray-dark);
  transition: var(--transition);
  box-sizing: border-box;
}

.ui-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.ui-input::placeholder {
  color: var(--color-gray-medium);
}

.ui-input--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
