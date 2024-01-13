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
        <fwb-navbar-link is-active link="/"> Home </fwb-navbar-link>
        <fwb-navbar-link link="/doctors"> Doctors </fwb-navbar-link>
        <fwb-navbar-link link="/history"> History </fwb-navbar-link>
        <fwb-navbar-link link="/availability"> Availability </fwb-navbar-link>
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
</script>
