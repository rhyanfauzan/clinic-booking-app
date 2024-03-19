// src/domain/repositories/UserRepository.js

import axios from 'axios';
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();

const BASE_URL = computed(() => store.BASEURL);

export async function login(email, password) {
  try {
    const response = await axios.post(
      `${BASE_URL.value}/users/login`
    );

    return response.data.result;
  } catch (error) {
    throw new Error('Error fetching doctors');
  }
}
