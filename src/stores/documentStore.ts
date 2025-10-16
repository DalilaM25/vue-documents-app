import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Document } from '@/types/document'
import { useDocumentApi } from '@/api/useDocumentApi'

export const useDocumentStore = defineStore('documents', () => {
  // State
  const documents = ref<Document[]>([])
  const selectedDocument = ref<Document | null>(null)
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const { fetchDocuments } = useDocumentApi();

  // Getters
  const hasSelectedDocument = computed(() => selectedDocument.value !== null)

  const canDeleteDocument = computed(() => {
    return selectedDocument.value?.image !== undefined && selectedDocument.value?.image !== ''
  })

  // Actions
  const searchDocuments = async (searchQuery: string = '') => {
    isLoading.value = true;
    error.value = null;

    try {
      const data = await fetchDocuments(searchQuery);
      documents.value = data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Ошибка при загрузке документов';
    } finally {
      isLoading.value = false;
    }
  };

  const selectDocument = (document: Document) => {
    selectedDocument.value = document
  }

  const clearSelection = () => {
    selectedDocument.value = null
  }

  const downloadDocument = () => {
    if (!selectedDocument.value) return

    const content = `Название: ${selectedDocument.value.name}\nОписание: ${selectedDocument.value.description}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${selectedDocument.value.name}.txt`
    link.click()
    URL.revokeObjectURL(url)
  }

  const deleteDocument = () => {
    if (!selectedDocument.value || !canDeleteDocument.value) return

    // Удаляем только на клиенте
    documents.value = documents.value.filter(doc => doc.id !== selectedDocument.value!.id)
    selectedDocument.value = null
  }

  const clearError = () => {
    error.value = null
  }

  return {
    // State
    documents,
    selectedDocument,
    isLoading,
    error,

    // Getters
    hasSelectedDocument,
    canDeleteDocument,

    // Actions
    searchDocuments,
    selectDocument,
    clearSelection,
    downloadDocument,
    deleteDocument,
    clearError,
  }
})
