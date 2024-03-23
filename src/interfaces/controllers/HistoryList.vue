<template>
  <fwb-table v-if="showList">
    <fwb-table-head>
      <fwb-table-head-cell>Tanggal</fwb-table-head-cell>
      <fwb-table-head-cell>Keterangan</fwb-table-head-cell>
      <fwb-table-head-cell></fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="history in historys" :key="history.id">
        <fwb-table-cell>{{ history.date }}</fwb-table-cell>
        <fwb-table-cell>{{ history.desc }}</fwb-table-cell>
        <fwb-table-cell>
          <fwb-button color="light" @click="getAppointmentsById(history.id)"> Lihat </fwb-button>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Detail Appointment
      </div>
    </template>
    <template #body>
      <div class="flex flex-col items-center">
        <img v-if="doctorPicture === `${BASE_URL}/uploads/`" class="w-12 flex-none rounded-full bg-gray-50"
          src="../../assets/images/logo.png" alt="doctor" style="object-fit: cover; width: 100px; height: 100px;"  />
        <img v-else class="w-12 flex-none rounded-full bg-gray-50" :src="doctorPicture" alt="doctor"
          style="object-fit: cover; width: 100px; height: 100px;" />
        <h5 class="font-medium text-lg mt-3">{{ doctorName }}</h5>
        <h5 class="font-regular text-md">{{ appointmentDate }}</h5>
      </div>
      <div class="mt-5 flex items-start justify-start space-x-4">
        <div>
          <h5 class="font-regular text-md ">ID</h5>
          <h5 class="font-regular text-md ">Pasien</h5>
          <h5 class="font-regular text-md ">Keterangan</h5>
        </div>
        <div>
          <h5 class="font-regular text-md">: ZC-{{ idAppointment }}</h5>
          <h5 class="font-regular text-md">: {{ patientName }}</h5>
          <h5 class="font-regular text-md">: {{ desc }}</h5>
        </div>
      </div>

    </template>
    <template #footer>
      <div class="flex justify-center">
        <fwb-button @click="closeModal" color="dark" class="px-10">
          OK
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
  <div v-if="showMessage">
    <div class="mt-10 bg-gray-200 px-5 py-3 rounded">
      <h5 class="text-gray-700">Anda belum pernah melakukan appointment.</h5>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
  FwbButton, FwbModal
} from 'flowbite-vue';
import { ref, onMounted, computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();
const BASE_URL = computed(() => store.BASEURL);
const showList = ref(false);
const showMessage = ref(false);
const historys = ref([]);
const doctorName = ref('');
const patientName = ref('');
const appointmentDate = ref('');
const desc = ref('');
const doctorPicture = ref('');
const patientPicture = ref('');
const idAppointment = ref('');

const isShowModal = ref(false)

function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

const getAppointmentsById = (id) => {
  axios.get(`${BASE_URL.value}/appointments/${id}`)
    .then(response => {
      const result = response.data;
      if (result.status === true) {
        const date = new Date(result.result.appointment_date);
        const formattedDate = date.toISOString().split('T')[0];
        idAppointment.value = id;
        appointmentDate.value = formattedDate;
        doctorName.value = result.result.doctor_username;
        patientName.value = result.result.patient_username;
        desc.value = result.result.description;
        doctorPicture.value = `${BASE_URL.value}/uploads/${result.result.doctor_profile_image}`;
        patientPicture.value = result.result.patient_profile_image;
        console.log(result)
        setTimeout(() => {
          showModal();
        }, 300);
      } else {
      }
    })
    .catch(error => {
      console.error(error)
      showMessage.value = true;

    });
}


const getAppointmentsByUserId = (userid) => {
  axios.get(`${BASE_URL.value}/appointments/user/${userid}`)
    .then(response => {
      const result = response.data;
      if (result.status === true) {
        showList.value = true;
        showMessage.value = false;
        response.data.result.forEach(element => {
          const date = new Date(element.appointment_date);
          const formattedDate = date.toISOString().split('T')[0];
          historys.value.push({ id: element.id, date: formattedDate, desc: element.description });
        });
        // historys.value = response.data.result;
        console.log(historys.value)
      } else {
        showList.value = false;
        showMessage.value = true;
      }
    })
    .catch(error => {
      console.error(error)
      showMessage.value = true;

    });
}

onMounted(() => {
  const userid = localStorage.getItem('userid');
  getAppointmentsByUserId(userid);
});
</script>
