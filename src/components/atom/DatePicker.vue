<template>
  <div>
    <VueDatePicker v-model="selectedDateTime" :enable-time-picker="false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const selectedDateTime = ref(null);
</script>
