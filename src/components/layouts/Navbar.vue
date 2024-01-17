<template>
  <fwb-navbar>
    <template #logo>
      <div class="flex items-center">
        <img
          src="../../assets/images/logo2.png"
          alt="logo"
          style="width: 40px"
        />
        <h5 class="ml-2 font-medium text-lg">Clinic Booking App</h5>
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
      </fwb-navbar-collapse>
    </template>

    <template #right-side>
      <fwb-button> Make Appointment </fwb-button>
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

import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Define a reactive variable to track the active link
const isHome = ref(false);
const isDoctors = ref(false);
const isHistory = ref(false);
const isAvailability = ref(false);
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
});
</script>
