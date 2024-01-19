<template>
  <fwb-card :img-src="imageSrc" :img-alt="imageAlt" variant="image">
    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ title }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </fwb-card>
</template>

<script setup>
import { FwbCard } from 'flowbite-vue';

const props = defineProps(['imageSrc', 'imageAlt', 'title', 'description']);
</script>
