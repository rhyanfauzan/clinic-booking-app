// src/domain/repositories/UserRepository.js

import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export async function getUsers(page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=${page}`);
    return response.data.data; // Assuming the user data is in response.data.data
  } catch (error) {
    throw new Error('Error fetching users');
  }
}
