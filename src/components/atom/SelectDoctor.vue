<template>
  <fwb-select v-model="selected" :options="doctors" @Change="onChange" />
</template>

<style>
select {
  background: white !important;
  height: 38px !important;
  border-radius: 4px !important;
  padding: 0px 12px !important;
}
</style>

<script setup>

import { ref, onMounted } from 'vue';
import { fetchDoctorList } from '../../application/usecases/FetchDoctorListUseCase';
import { useTimeStore } from '../../store/index';
import { FwbSelect } from 'flowbite-vue';

const store = useTimeStore();

const doctorList = ref([]);
const selected = ref('');
const doctors = ref([]);

const onChange = () => {
  store.setDoctor(selected.value)
};

onMounted(async () => {
  try {
    doctorList.value = await fetchDoctorList();
    doctorList.value.forEach(element => {
    doctors.value.push({value : element.id, name : element.full_name})
    });
  } catch (error) {
    console.error('Error fetching doctors:', error.message);
  }
});
</script>
