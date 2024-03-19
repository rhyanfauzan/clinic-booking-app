<template>
  <div class="container md:min-h-[50vh] lg:min-h-[55vh] mx-auto px-10">
    <div class="my-5">
      <Breadcrum />
    </div>
    <div class="flex flex-wrap justify-start mx-auto">
      <div class="w-full md:pr-2 lg:w-1/4 md:w-1/2 sm:w-full mt-2 text-left">
        <p class="mb-2">Please Select Date</p>
        <DatePicker />
      </div>
      <div class="w-full md:pl-2 lg:w-1/6 md:w-1/2 sm:w-full mt-2 text-left">
        <p class="mb-2">Please Select Time</p>
        <SelectTime />
      </div>
      <div class="w-full md:pr-2 lg:pl-2 lg:w-1/4 md:w-1/2 sm:w-full mt-2 text-left">
        <p class="mb-2">Please Select Doctor</p>
        <SelectDoctor />
      </div>
      <!-- SHow Warning  -->
      <FwbToast v-if="showWarning" type="warning" class="mx-0 px-0 ">
        Semua form harus diisi.
      </FwbToast>

    </div>
    <fwb-button @click="checkBtn" class="mt-5 md:ml-2 h-10 md:mt-9 w-full md:w-auto" color="default">Check</fwb-button>

    <div class="mt-8">
      <div v-if="availabilitys" class="card flex flex-wrap justify-start mx-auto">
        <div class="w-full md:w-1/2 lg:w-1/4 mt-2">
          <img src="../../assets/images/il_dr.png" alt="" />
        </div>
        <div class="w-full md:w-1/2 lg:w-3/4 mt-2">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">
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
      </div>
      <div v-if="notavailabilitys" class="card flex flex-wrap justify-start mx-auto">
        <div class="w-full md:w-1/2 lg:w-1/4 mt-2">
          <img src="../../assets/images/il_dr_red.png" alt="" />
        </div>
        <div class="w-full md:w-1/2 lg:w-3/4 mt-2">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
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
import { ref, onMounted } from 'vue';
import { FwbToast, FwbButton } from "flowbite-vue";
import { fetchAvailability } from '../../application/usecases/FetchAvailabilityUseCase';
import { computed } from 'vue';
import Breadcrum from '../../components/layouts/Breadcrum.vue';
import DatePicker from '../../components/atom/DatePicker.vue';
import SelectTime from '../../components/atom/SelectTime.vue';
import SelectDoctor from '../../components/atom/SelectDoctor.vue';
import { useTimeStore } from "../../store/index";

const store = useTimeStore();
const date = computed(() => store.date);
const time = computed(() => store.hour);
const doctorId = computed(() => store.doctorId);
const availabilitys = ref(false);
const notavailabilitys = ref(false);
const showWarning = ref(false);

const checkBtn = async () => {
  if (doctorId.value != '' & date.value != '' && time.value != '') {
    showWarning.value = false;
    try {
      const available = await fetchAvailability(doctorId.value, date.value, time.value);
      const status = available.isAvailable;

      if (status == true) {
        availabilitys.value = true;
        notavailabilitys.value = false;
      } else {
        availabilitys.value = false;
        notavailabilitys.value = true;
      }

    } catch (error) {
      console.error('Error fetching availabiliyt:', error.message);
    }
  } else {
    showWarning.value = true;
  }
}

onMounted(async () => {

});
</script>
