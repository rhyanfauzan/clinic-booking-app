<template>
  <div class="container md:min-h-[50vh] lg:min-h-[55vh] mx-auto px-10">
    <div class="my-5">
      <Breadcrum />
    </div>
    <!-- <div class="my-5">
      <HistoryList />
    </div>
    <div class="col text-center">
      <fwb-pagination
        v-model="currentPage"
        :total-pages="10"
        show-icons
      ></fwb-pagination>
    </div> -->
    <!-- else  -->

    <div class="card flex flex-wrap justify-center mx-auto my-5">
      <div>
        <img
          src="../../assets/images/login.png"
          alt=""
          style="width: 300px; object-fit: cover"
        />
      </div>
      <div class="p-5 w-full text-center">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          You not have access for history
        </h5>
        <p class="font-normal mb-5 text-gray-700 dark:text-gray-400">
          Please login first
        </p>

        <fwb-button class="px-10" href="/login" color="light" size="md" pill
          >Login</fwb-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue';
import { ref } from 'vue';
import Breadcrum from '../../components/layouts/Breadcrum.vue';
import HistoryList from '../../interfaces/controllers/HistoryList.vue';

const currentPage = ref(1);

const GoToLogin = () => {
  // router.push('/login');
  aler('ok');
};
</script>
