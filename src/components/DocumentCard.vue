<template>
  <div
    :class="['document-card', { 'document-card--selected': selected }]"
    @click="$emit('click')"
  >
    <div class="document-card__image">
      <img
        v-if="document.image"
        :src="document.image"
        :alt="document.name"
      />
      <div v-else class="document-card__image-placeholder">
        <img :src='imagePlaceholder'/>
      </div>
    </div>
    <div class="document-card__info">
      <h3 class="document-card__title">{{ document.name }}</h3>
      <p class="document-card__size">12 MB</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Document } from '@/types/document';
import imagePlaceholder from '@/assets/svg/image-placeholder.svg'

interface Props {
  document: Document;
  selected?: boolean;
}

defineProps<Props>();

defineEmits<{
  click: [];
}>();
</script>

<style scoped>
.document-card {
  width: 240px;
  height: 70px;
  border-radius: 10px;
  background: var(--color-background);
  box-shadow: 0px 0px 10px 0px #0000001A;
  display: flex;
  cursor: pointer;
  transition: var(--transition);
}

.document-card:hover {
  box-shadow: 0px 0px 15px 0px #0000002A;
}

.document-card__image {
  width: 70px;
  height: 70px;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  background: var(--color-hover);
}

.document-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.document-card__image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-size: 12px;
  color: var(--color-gray-medium);
  border-right: 1px solid #E0E0E0;
}

.document-card__info {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.document-card--selected .document-card__info {
  background: var(--color-primary);
  border-radius: 0 10px 10px 0;
}

.document-card__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: var(--card-title-font-size);
  line-height: var(--card-title-line-height);
  color: var(--color-gray-dark);
  margin: 0;
}

.document-card--selected .document-card__title {
  color: white;
}

.document-card__size {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--color-gray-medium);
  margin: 0;
}

.document-card--selected .document-card__size {
  color: rgba(255, 255, 255, 0.8);
}
</style>
