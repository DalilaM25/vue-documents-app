<template>
  <div class="document-list">
    <UiTitle>Результаты</UiTitle>
    <div class="document-list__content">
      <div
        v-if="documents.length === 0"
        class="document-list__empty"
      >
        Ничего не найдено
      </div>
      <div v-else class="document-list__cards">
        <DocumentCard
          v-for="document in documents"
          :key="document.id"
          :document="document"
          :selected="selectedDocumentId === document.id"
          @click="$emit('documentSelected', document.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Document } from '@/types/document';
import UiTitle from '@/components/ui/UiTitle.vue';
import DocumentCard from './DocumentCard.vue';

interface Props {
  documents: Document[];
  selectedDocumentId?: number | null;
}

defineProps<Props>();

defineEmits<{
  documentSelected: [documentId: number];
}>();
</script>

<style scoped>
.document-list {
  display: flex;
  flex-direction: column;
}

.document-list__content {
  margin-top: 18px;
}

.document-list__cards {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.document-list__empty {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--color-gray-medium);
  text-align: center;
  padding: 20px;
}
</style>
