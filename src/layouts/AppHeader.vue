<template>
  <div class="header">
    <h1 class="header__title">MyApp</h1>
    <span class="header__user">Username</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4vw;
}
.header__title {
  color: var(--color-black);
  font-family: var(--font-family);
  font-size: var(--header-font-size);
  font-weight: var(--header-font-weight);
  line-height: var(--header-line-height);
}
.header__user {
  color: var(--color-black);
  font-family: var(--font-family);
  font-size: var(--content-title-font-size);
  font-weight: var(--body-font-weight);
  line-height: var(--body-line-height);
}
</style>
