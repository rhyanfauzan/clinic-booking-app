// src/domain/repositories/AvailabilityRepository.js

import axios from 'axios';
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();

const BASE_URL = computed(() => store.BASEURL);

export async function getAvailability(doctorId, date, hour) {
  try {
    const response = await axios.get(
      `${BASE_URL.value}/availability/check/?doctorId=${doctorId}&date=${date}&hour=${hour}&minute=00`
    );

    return response.data.result;
  } catch (error) {
    throw new Error('Error fetching Availability');
  }
}
