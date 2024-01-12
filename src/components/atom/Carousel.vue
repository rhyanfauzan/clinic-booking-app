<template>
  <fwb-carousel :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue';

const pictures = [
  {
    src: 'https://i.pinimg.com/564x/d9/bf/e9/d9bfe91ed4242bbc515a895f83d36b92.jpg',
    alt: 'Image 1',
  },
  {
    src: 'https://i.pinimg.com/564x/b3/b3/27/b3b3279049e4bf4ce7a34a48826b629c.jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://i.pinimg.com/564x/4e/e3/c3/4ee3c39948a03660c3412516cec37e0b.jpg',
    alt: 'Image 3',
  },
];
</script>
