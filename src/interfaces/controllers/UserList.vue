<!-- src/interfaces/controllers/UserList.vue -->

<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in userList" :key="user.id">
        {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
      </li>
    </ul>
  </div>
  <div>
    <FwbButton
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Click me!</FwbButton
    >
    <FwbListGroup>
      <FwbListGroupItem hover>Item 1</FwbListGroupItem>
      <FwbListGroupItem hover>Item 2</FwbListGroupItem>
      <FwbListGroupItem hover>Item 3</FwbListGroupItem>
      <FwbListGroupItem hover>Item 4</FwbListGroupItem>
      <FwbListGroupItem hover>Item 5</FwbListGroupItem>
    </FwbListGroup>
  </div>
  <div class="grid gap-2">
    <FwbProgress :progress="25" size="sm" label="Small" />
    <FwbProgress :progress="50" size="md" label="Medium" />
    <FwbProgress :progress="75" size="lg" label="Large" />
    <FwbProgress :progress="100" size="xl" label="Extra Large" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchUserList } from '../../application/usecases/FetchUserListUseCase';
import {
  FwbButton,
  FwbListGroup,
  FwbListGroupItem,
  FwbProgress,
} from 'flowbite-vue';

const userList = ref([]);

onMounted(async () => {
  try {
    userList.value = await fetchUserList(2); // Fetch users for page 2
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
});
</script>
