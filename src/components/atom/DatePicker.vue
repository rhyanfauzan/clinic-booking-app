<template>
  <div>
    <VueDatePicker v-model="selectedDateTime" :enable-time-picker="false" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useTimeStore } from "../../store/index";

const store = useTimeStore();
const selectedDateTime = ref(null);

// Function to format the date to YYYY-MM-DD format
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

watch(selectedDateTime, (newValue) => {
  // This function will be called whenever selectedDateTime changes
  if (newValue instanceof Date) {
    selectedDateTime.value = formatDate(newValue);
  }
  console.log('formatDate:', newValue);

  // You can perform any necessary actions here, such as updating the shared state
  store.setDate(newValue);
});

</script>
