// src/application/usecases/FetchAvailabilityUseCase.js

import { getAvailability } from '../../domain/repositories/AvailabilityRepository';
import Doctor from '../../domain/entities/Doctor';
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();

const BASE_URL = computed(() => store.BASEURL);

export async function fetchAvailability(doctorId, date, hour) {
  const availabilityData = await getAvailability(doctorId, date, hour);

  return availabilityData;
}
