<script setup lang="ts">
import DocumentCard from './components/DocumentCard.vue';
import DocumentList from './components/DocumentList.vue';
import DocumentPreview from './components/DocumentPreview.vue';
import DocumentSearch from './components/DocumentSearch.vue';
import UiButton from './components/ui/UiButton.vue';
import UiErrorMessage from './components/ui/UiErrorMessage.vue';
import UiInput from './components/ui/UiInput.vue';
import UiSpinner from './components/ui/UiSpinner.vue';
import UiTitle from './components/ui/UiTitle.vue';
import AppHeader from './layouts/AppHeader.vue';
const doc = {
    "id": 1,
    "name": "Документ 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  }
  const docs = [
  {
    "id": 1,
    "name": "Документ 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://img.freepik.com/free-photo/rendering-summer-digital-art-illustration_23-2151242805.jpg"
  },
  {
    "id": 2,
    "name": "Документ 2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://img.freepik.com/free-vector/flat-charles-darwin-illustration_52683-100353.jpg"
  }]
</script>

<template>
  <AppHeader/>
  <UiButton variant="secondary" disabled>Скачать</UiButton>
  <UiErrorMessage>Ошибка ошибок ошибочная </UiErrorMessage>
  <UiInput placeholder="dshgkjshjkghsjk"></UiInput>
  <UiSpinner></UiSpinner>
  <UiTitle>giuhuih</UiTitle>
  <DocumentCard :document=doc :selected="true" ></DocumentCard>
  <DocumentCard :document=doc  ></DocumentCard>
  <DocumentSearch/>
  <DocumentList :documents="docs" :selected-document-id='1'/>
  <DocumentPreview :document="doc"/>

</template>

<style scoped>
</style>
