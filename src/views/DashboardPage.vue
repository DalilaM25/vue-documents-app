<template>
  <div class="dashboard-page">
    <div class="dashboard-page__content">
      <div class="dashboard-page__left">
        <DocumentSearch @search="handleSearch" />
        <div v-if="isLoading" class="dashboard-page__loading">
          <UiSpinner />
        </div>

        <UiErrorMessage v-else-if="error" :message="error" @click="clearError" />
        <DocumentList
          v-else
          :documents="documents"
          :selected-document-id="selectedDocument?.id"
          @document-selected="handleDocumentSelect"
        />
      </div>

      <div class="dashboard-page__right">
        <DocumentPreview
          :document="selectedDocument"
          :can-delete="canDeleteDocument"
          @download="handleDownload"
          @delete="handleDelete"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDocumentStore } from '@/stores/documentStore'
import DocumentSearch from '@/components/DocumentSearch.vue'
import DocumentList from '@/components/DocumentList.vue'
import DocumentPreview from '@/components/DocumentPreview.vue'
import UiSpinner from '@/components/ui/UiSpinner.vue'
import UiErrorMessage from '@/components/ui/UiErrorMessage.vue'

const documentStore = useDocumentStore()

const { documents, selectedDocument, isLoading, error, canDeleteDocument } =
  storeToRefs(documentStore)

const { searchDocuments, selectDocument, downloadDocument, deleteDocument, clearError } =
  documentStore

const handleSearch = (query: string) => {
  searchDocuments(query)
}

const handleDocumentSelect = (documentId: number) => {
  const document = documents.value.find(doc => doc.id === documentId)
  if (document) {
    selectDocument(document)
  }
}

const handleDownload = () => {
  downloadDocument()
}

const handleDelete = () => {
  deleteDocument()
}

onMounted(() => {
  searchDocuments()
})
</script>

<style scoped>
.dashboard-page {
  height: 77vh;
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 10px 0px #0000001a;
  overflow: hidden;
}

.dashboard-page__content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 21vw 1fr;
  gap: 0;
}

.dashboard-page__left {
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  padding: 1.9rem 1.25rem;
  overflow: hidden;
}

.dashboard-page__right {
  background: var(--color-background);
  height: 100%;
  border-left: 1px solid var(--color-gray-light);
  overflow: hidden;
}

.dashboard-page__loading {
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
</style>
