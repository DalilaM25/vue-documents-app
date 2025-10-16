<template>
  <div class="ui-spinner">
    <div class="ui-spinner__circle"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.ui-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ui-spinner__circle {
  width: 24px;
  height: 24px;
  border: 2px solid #E9ECEF;
  border-top: 2px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
