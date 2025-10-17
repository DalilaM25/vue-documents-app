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
  modelValue?: string
  type?: string
  placeholder?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  disabled: false,
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.ui-input {
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius);
  border: 1px solid #e9ecef;
  font-family: var(--font-family);
  font-size: var(--body-font-size);
  font-weight: var(--body-font-weight);
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
