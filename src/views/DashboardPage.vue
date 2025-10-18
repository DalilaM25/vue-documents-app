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
}

.dashboard-page__content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(250px, 21vw) 1fr;
}

.dashboard-page__left {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2.5vw, 1.7rem);
  padding: clamp(1rem, 2.5vw, 1.9rem) clamp(0.75rem, 2vw, 1.25rem);
  overflow: hidden;
}

.dashboard-page__right {
  height: 100%;
  border-left: 1px solid var(--color-gray-light);
  overflow: auto;
}

.dashboard-page__loading {
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

@media (max-width: 768px) {
  .dashboard-page {
    height: auto;
    min-height: 100vh;
  }

  .dashboard-page__content {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .dashboard-page__left {
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid var(--color-gray-light);
  }

  .dashboard-page__right {
    border-left: none;
    min-height: 50vh;
  }
}

@media (max-width: 480px) {
  .dashboard-page__left {
    padding: 0.75rem;
    gap: 0.75rem;
  }

  .dashboard-page__content {
    grid-template-rows: auto minmax(400px, 1fr);
  }
}
</style>
