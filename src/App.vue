<!-- App.vue -->
<template>
  <!-- Conditionally render Navbar based on the current route -->
  <template v-if="showNavbar">
    <Navbar />
  </template>

  <!-- Main content -->
  <RouterView />

  <!-- Conditionally render Footer based on the current route -->
  <template v-if="showNavbar">
    <Footer />
  </template>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router';
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';

import { onMounted, watch, ref, toRaw } from 'vue';

// Get the current route
const route = useRoute();
const routeName = ref(toRaw(route).name);
const routeMeta = ref(toRaw(route).meta);
const showNavbar = ref(false); // Adjust the condition as per your route logic
const isNavbar = ref(''); // Adjust the condition as per your route logic

watch(
  () => toRaw(route).name,
  (newRouteName) => {
    routeName.value = newRouteName;
  }
);

watch(
  () => toRaw(route).meta,
  (newrouteMeta) => {
    routeMeta.value = newrouteMeta;
    if (routeMeta.value.navbar) {
      isNavbar.value = routeMeta.value.navbar.__name;
    }

    // show navbar
    if (isNavbar.value == 'Navbar') {
      showNavbar.value = true;
    }
  }
);

// Watch for changes to the route and update routeName
onMounted(() => {});
</script>
