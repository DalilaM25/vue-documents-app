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
  font-size: var(--content-title-font-size);
  font-weight: var(--content-title-font-weight);
}
</style>
