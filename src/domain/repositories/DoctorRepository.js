// src/domain/repositories/DoctorRepository.js

import axios from 'axios';
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();

const BASE_URL = computed(() => store.BASEURL);

export async function getDoctors() {
  try {
    const response = await axios.get(
      `${BASE_URL.value}/users/role?role=doctor`
    );
    console.log(response.data);

    return response.data.result;
  } catch (error) {
    throw new Error('Error fetching doctors');
  }
}
