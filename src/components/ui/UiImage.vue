<template>
  <div class="ui-image">
    <img
      v-if="src && !hasError"
      :src="src"
      :alt="alt"
      :class="['ui-image__img', customClassImg]"
      @error="handleError"
    />
    <div
      v-else
      class="ui-image__placeholder"
    >
      <slot name="placeholder">
        <img :src="placeholderSrc" :alt="alt" :class="['ui-image__placeholder-img', customClassPlaceholder]"/>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import imagePlaceholder from '@/assets/svg/image-placeholder.svg';
import { ref, watch } from 'vue';

interface Props {
  src?: string;
  alt?: string;
  placeholderSrc?: string;
  customClassImg?: string;
  customClassPlaceholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: 'Image',
  placeholderSrc: imagePlaceholder,
  customClass: ''
});

const hasError = ref(false);

const handleError = () => {
  hasError.value = true;
};

watch(() => props.src, () => {
  hasError.value = false;
});
</script>

<style scoped>
.ui-image {
  width: 100%;
  height: 100%;
}

.ui-image__img,
.ui-image__placeholder-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ui-image__placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.prewiew {
  border: 1px solid var(--color-gray-light);
}
</style>
