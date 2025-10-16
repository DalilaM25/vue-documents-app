<template>
  <div class="document-preview">
    <div v-if="!document" class="document-preview__empty">
      Выберите документ, чтобы посмотреть его содержимое
    </div>
    <div v-else class="document-preview__content">
      <div class="document-preview__image">
        <img
          v-if="document.image"
          :src="document.image"
          :alt="document.name"
        />
        <div v-else class="document-preview__image-placeholder">
          <img :src="imagePlaceholder" alt="No image" />
        </div>
      </div>
      <div class="document-preview__info">
        <UiTitle class="document-preview__name">{{ document.name }}</UiTitle>

        <div class="document-preview__actions">
          <UiButton
            label="Скачать"
            variant="primary"
            @click="$emit('download')"
          />
          <UiButton
            label="Удалить"
            variant="secondary"
            :disabled="!canDelete"
            @click="$emit('delete')"
          />
        </div>

        <div class="document-preview__description">
          <UiTitle>Описание:</UiTitle>
          <p class="document-preview__description-text">
            {{ document.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Document } from '@/types/document';
import UiTitle from '@/components/ui/UiTitle.vue';
import UiButton from '@/components/ui/UiButton.vue';
import imagePlaceholder from '@/assets/svg/image-placeholder.svg';

interface Props {
  document?: Document | null;
  canDelete?: boolean;
}

withDefaults(defineProps<Props>(), {
  document: null,
  canDelete: false
});

defineEmits<{
  download: [];
  delete: [];
}>();
</script>

<style scoped>
.document-preview {
  padding: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.document-preview__empty {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--color-gray-medium);
  text-align: center;
}

.document-preview__content {
  display: flex;
  gap: 60px;
  width: 100%;
}

.document-preview__image {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--color-hover);
  flex-shrink: 0;
}

.document-preview__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.document-preview__image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-hover);
}

.document-preview__info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.document-preview__name {
  margin-bottom: 14px;
}

.document-preview__actions {
  display: flex;
  gap: 12px;
  margin-bottom: 47px;
}

.document-preview__description {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.document-preview__description-text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--color-gray-medium);
  margin: 0;
}
</style>
