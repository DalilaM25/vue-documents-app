<template>
  <div class="ui-error-message">
    <slot>{{ message }}</slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string;
}

withDefaults(defineProps<Props>(), {
  message: ''
});
</script>

<style scoped>
.ui-error-message {
  color: var(--color-secondary);
  font-family: var(--font-family);
  font-size: var(--body-font-size);
  font-weight: var(--body-font-weight);
  line-height: var(--body-line-height);
  padding: 12px;
  margin: 8px 0;
}
</style>
