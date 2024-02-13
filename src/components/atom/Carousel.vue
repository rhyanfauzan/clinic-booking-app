<template>
  <fwb-carousel :pictures="pictures" slide :slide-interval="5000" />
</template>

<script setup>
import { ref } from 'vue';
import { FwbCarousel } from 'flowbite-vue';

const pictures = ref([
  { src: 'src/assets/images/banner3.png', alt: 'Image 3' },
  { src: 'src/assets/images/banner2.png', alt: 'Image 2' },
  { src: 'src/assets/images/banner1.png', alt: 'Image 1' },
]);
</script>
