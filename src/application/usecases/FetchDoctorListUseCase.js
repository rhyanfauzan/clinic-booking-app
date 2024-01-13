// src/application/usecases/FetchDoctorListUseCase.js

import { getDoctors } from '../../domain/repositories/DoctorRepository';
import Doctor from '../../domain/entities/Doctor';
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();

const BASE_URL = computed(() => store.BASEURL);

export async function fetchDoctorList() {
  const doctorsData = await getDoctors();
  console.log(doctorsData);
  // Map API response to Doctor entities
  const doctorList = doctorsData.map((doctor) => {
    return new Doctor(
      doctor.id,
      doctor.email,
      doctor.full_name,
      `${BASE_URL.value}/uploads/${doctor.profile_image}`,
      doctor.rating
    );
  });

  return doctorList;
}
