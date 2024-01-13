<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li
      v-for="doctor in doctorList"
      :key="doctor.email"
      class="flex justify-between gap-x-6 py-5"
    >
      <div class="flex min-w-0 gap-x-4">
        <img
          v-if="doctor.profile_image != 'http://localhost:3000/uploads/'"
          class="w-12 flex-none rounded-full bg-gray-50"
          :src="doctor.profile_image"
          alt="doctor"
          style="object-fit: cover"
        />
        <img
          v-else
          class="w-12 flex-none rounded-full bg-gray-50"
          src="../../assets/images/logo.png"
          alt="doctor"
          style="object-fit: cover"
        />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {{ doctor.full_name }}
          </p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">
            {{ doctor.email }}
          </p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">
          Reviews {{ doctor.rating }}/5
        </p>
        <div class="mt-1 flex items-center gap-x-1.5">
          <!-- <p class="text-xs leading-5 text-gray-500">{{ doctor.rating }}/5</p> -->
          <fwb-rating size="sm" :rating="doctor.rating" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchDoctorList } from '../../application/usecases/FetchDoctorListUseCase';
import { FwbRating } from 'flowbite-vue';

const doctorList = ref([]);

onMounted(async () => {
  try {
    doctorList.value = await fetchDoctorList();
    console.log(doctorList.value);
  } catch (error) {
    console.error('Error fetching doctors:', error.message);
  }
});
</script>
