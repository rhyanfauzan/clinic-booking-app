<template>
  <fwb-table v-if="showList">
    <fwb-table-head>
      <fwb-table-head-cell>Product name</fwb-table-head-cell>
      <fwb-table-head-cell>Color</fwb-table-head-cell>
      <fwb-table-head-cell>Category</fwb-table-head-cell>
      <fwb-table-head-cell>Price</fwb-table-head-cell>
      <fwb-table-head-cell>
        <span class="sr-only">Edit</span>
      </fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
        <fwb-table-cell>Sliver</fwb-table-cell>
        <fwb-table-cell>Laptop</fwb-table-cell>
        <fwb-table-cell>$2999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#"> Edit </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Microsoft Surface Pro</fwb-table-cell>
        <fwb-table-cell>White</fwb-table-cell>
        <fwb-table-cell>Laptop PC</fwb-table-cell>
        <fwb-table-cell>$1999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#"> Edit </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Magic Mouse 2</fwb-table-cell>
        <fwb-table-cell>Black</fwb-table-cell>
        <fwb-table-cell>Accessories</fwb-table-cell>
        <fwb-table-cell>$99</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#"> Edit </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
  <div v-if="showMessage">
    <div class="mt-10 bg-gray-200 px-5 py-3 rounded">
      <h5 class="text-gray-700">Anda belum pernah melakukan appointment.</h5>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue';
import { ref, onMounted } from 'vue';

const showList = ref(false);
const showMessage = ref(false);

onMounted(() => {
  const userid = localStorage.getItem('userid');
  getAppointmentsByUserId(userid);
});

const getAppointmentsByUserId = (userid) => {

  axios.get(`http://localhost:3000/appointments/user/${userid}`)
    .then(response => {
      const result = response.data;
      if (result.status === true) {
        showList.value = true;
        showMessage.value = false;
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
</script>
