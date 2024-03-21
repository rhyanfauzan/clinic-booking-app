<template>
  <fwb-breadcrumb>
    <fwb-breadcrumb-item home href="/"> App </fwb-breadcrumb-item>
    <fwb-breadcrumb-item> {{ nameRoute }} </fwb-breadcrumb-item>
  </fwb-breadcrumb>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue';
import { defineProps } from 'vue';

const props = defineProps({
  nameRoute: String,
});
</script>
