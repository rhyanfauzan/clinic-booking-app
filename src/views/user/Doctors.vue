<template>
  <div class="container mx-auto px-10">
    <div class="my-5">
      <Breadcrum />
    </div>
    <DoctorList />
  </div>
</template>

<script setup>
import Breadcrum from '../../components/layouts/Breadcrum.vue';
import DoctorList from '../../interfaces/controllers/DoctorList.vue';
</script>
