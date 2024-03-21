<template>
  <fwb-navbar>
    <template #logo>
      <div class="flex items-center">
        <img src="../../assets/images/logo2.png" alt="logo" style="width: 40px" />
        <h5 class="ml-2 font-medium text-lg">Zein Clinic</h5>
      </div>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link :is-active="isHome" link="/"> Home </fwb-navbar-link>
        <fwb-navbar-link :is-active="isDoctors" link="/doctors">
          Doctors
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="isHistory" link="/history">
          History
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="isAvailability" link="/availability">
          Availability
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="isAppointment" link="/appointment">
          Appointment
        </fwb-navbar-link>
        <fwb-navbar-link v-if="showLogout" @click="onLogout" class="hidden md:block ">
          Logout
        </fwb-navbar-link>
        <fwb-navbar-link v-if="showLogin" link="/login" class="hidden md:block ">
          Login
        </fwb-navbar-link>
        <hr class="py-2" />
        <fwb-navbar-link v-if="showLogin" link="/login" class="block md:hidden">
          <div class="bg-gray-600 px-3 py-2 text-center text-white rounded">
            Login
          </div>
        </fwb-navbar-link>
        <fwb-navbar-link v-if="showLogout" @click="onLogout" class="block md:hidden">
          <div class="bg-red-800 px-3 py-2 text-center text-white rounded">
            Logout
          </div>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>

    <template #right-side>
      <FwbButton type="button" @click="goToAppointment"> Make Appointment </FwbButton>
    </template>
  </fwb-navbar>
  <hr class="border-gray-200 sm:mx-auto dark:border-gray-700" />
</template>

<script setup>
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue';

import { ref, watchEffect, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Define a reactive variable to track the active link
const isHome = ref(false);
const isDoctors = ref(false);
const isHistory = ref(false);
const isAvailability = ref(false);
const isAppointment = ref(false);
const showLogin = ref(false);
const showLogout = ref(false);
// Watch the route object for changes and update the activeLink variable
watchEffect(() => {
  if (route.path == '/') {
    isHome.value = true;
  }
  if (route.path == '/doctors') {
    isDoctors.value = true;
  }
  if (route.path == '/history') {
    isHistory.value = true;
  }
  if (route.path == '/availability') {
    isAvailability.value = true;
  }
  if (route.path == '/appointment') {
    isAppointment.value = true;
  }
});

const goToAppointment = () => {
  router.push("/appointment");
}

const onLogout = () => {
  localStorage.removeItem('userid');
  localStorage.removeItem('username');
  localStorage.removeItem('fullname');
  localStorage.removeItem('email');
  localStorage.removeItem('role');
  localStorage.removeItem('contact');
  localStorage.removeItem('profile_image');
  localStorage.removeItem('rating');
  setTimeout(() => {
    router.push("/");
  }, 500);
}


onMounted(() => {
  const userid = localStorage.getItem('userid');
  if (userid != null && userid != '') {
    showLogout.value = true;
    showLogin.value = false;
  } else {
    showLogin.value = true;
    showLogout.value = false;
  }
});
</script>
