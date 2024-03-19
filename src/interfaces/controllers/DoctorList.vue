<template>
  <div class="container md:min-h-[50vh] lg:min-h-[50vh] mx-auto">
    <div v-if="doctorList.length == 0">
      <div class="mt-10 bg-gray-200 px-5 py-3 rounded">
        <h5 class="text-gray-700">Failed to show doctor list.</h5>
      </div>
    </div>
    <ul v-else role="list" class="divide-y divide-gray-100">
      <li v-for="doctor in doctorList" :key="doctor.email" class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img v-if="doctor.profile_image === `${BASE_URL.value}/uploads/`"
            class="w-12 flex-none rounded-full bg-gray-50" src="../../assets/images/logo.png" alt="doctor"
            style="object-fit: cover" />
          <img v-else
            class="w-12 flex-none rounded-full bg-gray-50" :src="doctor.profile_image" alt="doctor"
            style="object-fit: cover; width: 50px; height: 50px;" />

          <div class="min-w-0 flex-auto">
            <p class="text-sm mb-0 font-semibold leading-6 text-gray-900">
              {{ doctor.full_name }}
            </p>
            <p class="mt-0 truncate text-xs leading-5 text-gray-500">
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchDoctorList } from '../../application/usecases/FetchDoctorListUseCase';
import { FwbRating } from 'flowbite-vue';
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();

const BASE_URL = computed(() => store.BASEURL);
const doctorList = ref([]);

onMounted(async () => {
  try {
    doctorList.value = await fetchDoctorList();
    console.log(doctorList.value)
    console.log(`${BASE_URL.value}/uploads/`)

  } catch (error) {
    console.error('Error fetching doctors:', error.message);
  }
  console.log(doctorList.value.length);
});
</script>
