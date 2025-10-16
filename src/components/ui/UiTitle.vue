<template>
  <div class="ui-title">
    <slot>{{ title }}</slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
})
</script>

<style scoped>
.ui-title {
  display: block;
  color: var(--color-black);
  font-family: var(--font-family);
  font-size: var(--content-title-font-size);
  font-weight: var(--content-title-font-weight);
  line-height: var(--content-title-line-height);
}
</style>
