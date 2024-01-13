<template>
  <fwb-carousel :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue';

const pictures = [
  {
    src: 'https://www.audydental.com/wp-content/uploads/2017/11/Promo-Smile-deals-oktober_Dekstop.jpg',
    alt: 'Image 1',
  },
  {
    src: 'https://www.audydental.com/wp-content/uploads/2017/11/AUDY-Goes-to-Campus_Dekstop.jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://www.audydental.com/wp-content/uploads/2017/11/Smile-Deal-Website_Dekstop-1920x600-1.jpg',
    alt: 'Image 3',
  },
];
</script>
