// src/application/usecases/FetchUserListUseCase.js

import { login } from '../../domain/repositories/UserRepository';

export async function fetchLogin(email, password) {
  const usersData = await login(email, password);

  return usersData;
}
