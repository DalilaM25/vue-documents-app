<template>
  <div class="document-preview">
    <div v-if="!document" class="document-preview__empty">
      Выберите документ, чтобы посмотреть его содержимое
    </div>
    <div v-else class="document-preview__content">
      <div class="document-preview__image">
        <UiImage
        :src="document.image"
        :alt="document.name"
        :customClassPlaceholder="'prewiew'"
        @error="hasValidImage = false"
        @loaded="hasValidImage = true"
      />
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
            :disabled="!canDelete || !hasValidImage"
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
import UiImage from '@/components/ui/UiImage.vue';
import { ref, watch } from 'vue';

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

const hasValidImage = ref(true);
watch(() => document, () => {
  hasValidImage.value = true;
});
</script>

<style scoped>
.document-preview {
  padding: 2rem 1.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
}

.document-preview__empty {
  font-weight: 400;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--color-gray-medium);
  text-align: center;
  align-self: center;
}

.document-preview__content {
  display: flex;
  gap: 3.8rem;
  width: 100%;
}

.document-preview__image {
  width: 31vw;
  height: 38vh;
  overflow: hidden;
  background: var(--color-hover);
  flex-shrink: 0;
}

.document-preview__info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.document-preview__name {
  margin-bottom: 1rem;
}

.document-preview__actions {
  display: flex;
  gap: 1.4rem;
  margin-bottom: 3rem;
}

.document-preview__description {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

.document-preview__description-text {
  font-weight: 400;
  font-size: var(--body-font-size);
  color: var(--color-gray-medium);
}

@media (max-width: 950px) {
  .document-preview__content{
    flex-direction: column;
  }
}
</style>
