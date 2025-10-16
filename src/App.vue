<script setup lang="ts">
import UiButton from './components/ui/UiButton.vue';
import UiErrorMessage from './components/ui/UiErrorMessage.vue';
import UiInput from './components/ui/UiInput.vue';
import UiSpinner from './components/ui/UiSpinner.vue';

</script>

<template>
  <UiButton variant="secondary" disabled>Скачать</UiButton>
  <UiErrorMessage>Ошибка ошибок ошибочная </UiErrorMessage>
  <UiInput placeholder="dshgkjshjkghsjk"></UiInput>
  <UiSpinner></UiSpinner>
</template>

<style scoped></style>
