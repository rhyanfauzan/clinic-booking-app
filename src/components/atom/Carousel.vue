<template>
  <FwbCarousel :pictures="banners" slide :slide-interval="5000" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FwbCarousel } from 'flowbite-vue';
import { defineProps } from 'vue';

const props = defineProps(['banners']);
// const pictures = ref([
//   { src: 'src/assets/images/banner3.png', alt: 'Image 3' },
//   { src: 'src/assets/images/banner2.png', alt: 'Image 2' },
//   { src: 'src/assets/images/banner1.png', alt: 'Image 1' },
// ]);
onMounted(() => {

});
</script>
