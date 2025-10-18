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
  height: 80%;
  flex: 1;
}

.document-list__content {
  margin-top: clamp(1rem, 2vw, 1.125rem);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.document-list__cards {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  overflow-y: auto;
  flex: 1;
}
.document-list__cards::-webkit-scrollbar {
  width: 0;
  display: none;
}

.document-list__cards {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.document-list__empty {
  font-weight: 400;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--color-gray-medium);
  text-align: center;
  padding: 1.3rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  .document-list__cards {
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .document-list__content {
    margin-top: 12px;
  }
}
</style>
