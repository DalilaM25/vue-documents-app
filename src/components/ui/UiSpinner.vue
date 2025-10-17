<template>
  <div class="ui-spinner">
    <div class="ui-spinner__circle"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ui-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ui-spinner__circle {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #e9ecef;
  border-top: 2px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
