<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo
        alt="Flowbite logo"
        image-url="https://flowbite.com/docs/images/logo.svg"
        link="#"
      >
        Flowbite
      </fwb-navbar-logo>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="/"> Home </fwb-navbar-link>
        <fwb-navbar-link link="/doctors"> Doctors </fwb-navbar-link>
        <fwb-navbar-link link="/"> History </fwb-navbar-link>
        <fwb-navbar-link link="/"> Availability </fwb-navbar-link>
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
