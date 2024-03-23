<template>
  <div class="container md:min-h-[50vh] lg:min-h-[55vh] mx-auto px-10">
    <div class="my-5">
      <Breadcrum :nameRoute="nameRoute" />
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
    <fwb-button v-if="showButton" @click="checkBtn" class="mt-5 md:ml-2 h-10 md:mt-9 w-full md:w-auto"
      color="default">Check</fwb-button>
    <div v-if="showLoading" class="centered-div mt-5">
      <div> <fwb-spinner size="10" />
      </div>
    </div>
    <div v-if="showButton" class="mt-8">
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
              {{ `${date} ${time}` }}
            </p>
            <fwb-button v-if="showMakeAppointment" @click="makeAppointment"
              class="mt-5 md:ml-2 h-10 md:mt-9 w-full md:w-auto" color="default">Make
              Appointment</fwb-button>
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

  <!-- show modal success appointment  -->
  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Berhasil Appointment!
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Anda telah melakukan appointment, mohon hadir sesuai jadwal yang Anda buat: </p>
      <fwb-table>
        <fwb-table-body>
          <fwb-table-row>
            <fwb-table-cell>Tanggal</fwb-table-cell>
            <fwb-table-cell>{{ date }}</fwb-table-cell>
          </fwb-table-row>
          <fwb-table-row>
            <fwb-table-cell>Jam</fwb-table-cell>
            <fwb-table-cell>{{ time }}</fwb-table-cell>
          </fwb-table-row>
          <fwb-table-row>
            <fwb-table-cell>Dokter</fwb-table-cell>
            <fwb-table-cell>{{ doctorName }}</fwb-table-cell>
          </fwb-table-row>
        </fwb-table-body>
      </fwb-table>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="green">
          Ok, Saya akan datang
        </fwb-button>
      </div>
    </template>
  </fwb-modal>

</template>

<style>
.centered-div {
  /* Add styling for the centered div */
  display: flex;
  justify-content: center;
  /* Horizontally center */
  align-items: center;
  /* Vertically center */
}
</style>

<style>
.card {
  border: 1px solid lightgray;
  border-radius: 7px;
  align-items: center;
}
</style>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import {
  FwbToast, FwbButton, FwbSpinner, FwbModal, FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableRow,
} from "flowbite-vue";
import { fetchAvailability } from '../../application/usecases/FetchAvailabilityUseCase';
import Breadcrum from '../../components/layouts/Breadcrum.vue';
import DatePicker from '../../components/atom/DatePicker.vue';
import SelectTime from '../../components/atom/SelectTime.vue';
import SelectDoctor from '../../components/atom/SelectDoctor.vue';
import { useTimeStore } from "../../store/index";
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const storeVariable = useVariableStore();
const BASE_URL = computed(() => storeVariable.BASEURL);
const nameRoute = "Availability";
const store = useTimeStore();
const date = computed(() => store.date);
const time = computed(() => store.hour);
const doctorId = computed(() => store.doctorId);
const availabilitys = ref(false);
const notavailabilitys = ref(false);
const showWarning = ref(false);
const showButton = ref(true);
const showLoading = ref(false);
const showMakeAppointment = ref(false);
const userid = ref('');
const isShowModal = ref(false)
const doctorName = ref('');

function closeModal() {
  isShowModal.value = false;
  availabilitys.value = false;
}
function showModal() {
  isShowModal.value = true
}

const checkBtn = async () => {
  showButton.value = false;
  showLoading.value = true;

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
  setTimeout(() => {
    showButton.value = true;
    showLoading.value = false;
  }, 300);
}

const createSchedule = async () => {
  // fetch create schedule 
  const requestBody = {
    doctorId: doctorId.value,
    patientId: userid.value,
    appointmentDate: `${date.value} ${time.value}:00`,
    description: "-"
  };

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios.post(`${BASE_URL.value}/appointments/schedule`, requestBody, {
    config
  })
    .then((response) => {
      console.log(response.data);
      showModal();
    })
    .catch((error) => {
      console.error(error);
    });

  setTimeout(() => {
    showButton.value = true;
    showLoading.value = false;
  }, 300);
}

const makeAppointment = async () => {
  const [hour, minute] = time.value.split(":");
  // fetch create availability 
  const requestData = {
    doctorId: doctorId.value,
    date: date.value,
    hour: hour,
    minute: minute
  };

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios.post(`${BASE_URL.value}/availability/create`, requestData, config)
    .then((response) => {
      getUserById(doctorId.value);
      createSchedule();
      console.log(response.data)
    })
    .catch((error) => console.error(error));
}

const getUserById = async (userId) => {
  // Define the URL and parameters
  const url = `${BASE_URL.value}/users/userid`;
  const params = { id: userId };

  // Make the GET request using Axios
  axios.get(url, { params })
    .then((response) => {
      doctorName.value = response.data.result[0].full_name;
    })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  userid.value = localStorage.getItem('userid');
  if (userid.value == null || userid.value == '') {
    showMakeAppointment.value = false;
  } else {
    showMakeAppointment.value = true;
  }
});
</script>
