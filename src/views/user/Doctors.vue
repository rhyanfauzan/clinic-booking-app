<template>
  <div class="container mx-auto px-10">
    <div class="my-5">
      <Breadcrum :nameRoute="nameRoute" />
    </div>
    <DoctorList />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import Breadcrum from '../../components/layouts/Breadcrum.vue';
import DoctorList from '../../interfaces/controllers/DoctorList.vue';
import { useVariableStore } from '../../store/index';

const nameRoute = "Doctors";
const store = useVariableStore();

const BaseUrl = computed(() => store.BASEURL); // Replace 'title' with the actual property in your store
// console.log(BaseUrl.value);
</script>
