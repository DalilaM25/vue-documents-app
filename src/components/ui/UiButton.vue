<template>
  <button
    :class="[
      'ui-button',
      `ui-button--${variant}`,
      { 'ui-button--disabled': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  label: '',
  variant: 'primary',
  disabled: false
});

defineEmits<{
  click: [];
}>();
</script>

<style scoped>
.ui-button {
  padding: 8px 16px;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  cursor: pointer;
  transition: var(--transition);
  font-family: var(--font-family);
  font-size: var(--body-font-size);
  font-weight: var(--body-font-weight);
  line-height: var(--body-line-height);
}

.ui-button--secondary {
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}

.ui-button:hover:not(:disabled) {
  background: var(--color-hover);
}

.ui-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
