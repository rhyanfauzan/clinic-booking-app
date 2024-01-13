<template>
  <div class="container md:min-h-[50vh] lg:min-h-[55vh] mx-auto px-10">
    <div class="my-5">
      <Breadcrum />
    </div>
    <h5>Please Select Date & Time</h5>
    <div class="flex flex-wrap justify-start mx-auto">
      <div class="w-full md:pr-2 lg:w-1/3 md:w-1/2 sm:w-full mt-2 text-center">
        <DatePicker />
      </div>
      <div class="w-full md:pl-2 lg:w-1/3 md:w-1/2 sm:w-full mt-2 text-center">
        <SelectTime />
      </div>
      <fwb-button class="mt-3 lg:ml-5 lg:my-auto lg:mt-2" color="default"
        >Check</fwb-button
      >
    </div>
    <div class="mt-8">
      <!-- <div class="card flex flex-wrap justify-start mx-auto">
        <div class="w-full md:w-1/2 lg:w-1/4 mt-2">
          <img src="../../assets/images/il_dr.png" alt="" />
        </div>
        <div class="w-full md:w-1/2 lg:w-3/4 mt-2">
          <div class="p-5">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white"
            >
              Hooray! the doctor you choose is available
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Please make an appointment.
            </p>
            <p class="font-normal text-xs text-gray-500 dark:text-gray-400">
              15/01/2023 08:00
            </p>
          </div>
        </div>
      </div> -->
      <div class="card flex flex-wrap justify-start mx-auto">
        <div class="w-full md:w-1/2 lg:w-1/4 mt-2">
          <img src="../../assets/images/il_dr_red.png" alt="" />
        </div>
        <div class="w-full md:w-1/2 lg:w-3/4 mt-2">
          <div class="p-5">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white"
            >
              Sorry.. the doctor you choose is not available
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Please find another time
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid lightgray;
  border-radius: 7px;
  align-items: center;
}
</style>

<script setup>
import { FwbCard, FwbButton } from 'flowbite-vue';
import { ref } from 'vue';
import Breadcrum from '../../components/layouts/Breadcrum.vue';
import DatePicker from '../../components/atom/DatePicker.vue';
import SelectTime from '../../components/atom/SelectTime.vue';

const currentPage = ref(1);
</script>
