<template>
  <div class="document-search">
    <UiTitle>Поиск документа</UiTitle>
    <UiInput
      v-model="searchQuery"
      placeholder="Введите ID документа"
      @update:modelValue="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiTitle from '@/components/ui/UiTitle.vue'
import { useDebounce } from '@/composables/useDebounce'

const { debounce } = useDebounce()

const searchQuery = ref('')

const emit = defineEmits<{
  search: [query: string]
}>()

const handleSearch = debounce((query: string) => {
  emit('search', query)
})
</script>

<style scoped>
.document-search {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
