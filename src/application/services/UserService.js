// src/application/services/UserService.js

import { getUsers } from '../../interfaces/data/UserRepository';

export async function fetchUsers(page = 1) {
  return getUsers(page);
}
