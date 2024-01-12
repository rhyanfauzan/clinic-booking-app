// src/application/usecases/FetchUserListUseCase.js

import { getUsers } from '../../domain/repositories/UserRepository';
import User from '../../domain/entities/User';

export async function fetchUserList(page = 1) {
  const usersData = await getUsers(page);

  // Map API response to User entities
  const userList = usersData.map((user) => {
    return new User(
      user.id,
      user.email,
      user.first_name,
      user.last_name,
      user.avatar
    );
  });

  return userList;
}
