<template>
  <div :class="['document-card', { 'document-card--selected': selected }]" @click="$emit('click')">
    <div class="document-card__image">
      <UiImage :src="document.image" :alt="document.name" />
    </div>
    <div class="document-card__info">
      <h3 class="document-card__title">{{ document.name }}</h3>
      <p class="document-card__size">12 MB</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Document } from '@/types/document'
import UiImage from '@/components/ui/UiImage.vue'

interface Props {
  document: Document
  selected?: boolean
}

defineProps<Props>()
defineEmits<{
  click: []
}>()
</script>

<style scoped>
.document-card {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 10px 0px #0000001a;
  display: flex;
  cursor: pointer;
  transition: var(--transition);
}

.document-card:hover {
  box-shadow: 0px 0px 15px 0px #0000002a;
}

.document-card__image {
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  background: var(--color-hover);
}

.document-card__info {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  overflow: hidden;
}

.document-card--selected .document-card__info {
  background: var(--color-primary);
  border-radius: 0 10px 10px 0;
}

.document-card__title {
  font-weight: 600;
  font-size: var(--card-title-font-size);
  color: var(--color-gray-dark);
  margin: 0;
  text-overflow: ellipsis;
}

.document-card--selected .document-card__title {
  color: white;
}

.document-card__size {
  font-weight: 400;
  font-size: var(--body-font-size);
  color: var(--color-gray-medium);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.document-card--selected .document-card__size {
  color: rgba(255, 255, 255, 0.8);
}
</style>
