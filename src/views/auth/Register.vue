<template>
  <div class="bg-auth">
    <div class="container mx-auto py-8 px-6 justify-center text-center">
      <div>
        <div class="w-full lg:w-1/2 p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 mx-auto">
          <h2 class="text-2xl text-center font-bold text-gray-900 dark:text-white">
            Register
          </h2>

          <form class="mt-8 space-y-6" action="#">
            <div class="text-start">
              <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                Name</label>
              <input id="full_name" type="text" name="full_name" v-model="full_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name" required />
            </div>
            <div class="text-start">
              <label for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input id="username" type="text" name="username" v-model="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username" required />
            </div>
            <div class="text-start">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input id="email" type="email" name="email" v-model="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com" required />
            </div>
            <div class="text-start">
              <label for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input id="password" type="password" name="password" v-model="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <div class="text-start">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
              <input id="contact" type="text" name="contact" v-model="contact"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="contact" required />
            </div>
            <div class="text-start">
              <label for="foto" class="block mb-0 py-0 text-sm font-medium text-gray-900 dark:text-white">Foto
                Profil</label>
            </div>

            <fwb-file-input v-model="file" dropzone />
            <!-- <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div class="ms-3 text-sm">
                <label
                  for="remember"
                  class="font-medium text-gray-500 dark:text-gray-400"
                  >Remember this device</label
                >
              </div>
              <a
                href="#"
                class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Lost Password?</a
              >
            </div> -->
            <!-- SHow Warning  -->
            <FwbToast v-if="showWarning" type="warning" class="mx-0 px-0 py-0 my-0">
              Semua data harus diisi.
            </FwbToast>
            <!-- SHow Success  -->
            <FwbToast v-if="showSuccess" type="success" class="mx-0 px-0 py-0 my-0">
              Horai! Berhasil Mendaftar.
            </FwbToast>
            <!-- SHow Error  -->
            <FwbToast v-if="showError" type="danger" class="mx-0 px-0 py-0 my-0">
              Username atau Email telah digunakan.
            </FwbToast>
            <button type="button" @click="Register"
              class="w-full px-5 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style="width: 100%">
              Submit
            </button>
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              Already have an account?
              <a @click="GoToLogin" class="text-blue-600 hover:underline dark:text-blue-500">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-auth {
  background-color: #1a56db !important;
}
</style>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { FwbToast } from "flowbite-vue";
import { FwbFileInput } from "flowbite-vue";
import { computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();
const BASE_URL = computed(() => store.BASEURL);
const router = useRouter();
const username = ref("");
const full_name = ref("");
const email = ref("");
const password = ref("");
const profile_image = ref("");
const contact = ref("");
const file = ref(null);
const showWarning = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
// const file = fileInput.files[0]; // Assuming fileInput is your file input element

const Register = async () => {
  // Create a new Blob object from the file

  console.log("username: ", username.value);
  console.log("full_name: ", full_name.value);
  console.log("email: ", email.value);
  console.log("password: ", password.value);
  console.log("contact: ", contact.value);
  console.log("role: ", "user");
  console.log("file: ", file.value);

  if (
    username.value != "" &&
    full_name.value != "" &&
    email.value != "" &&
    password.value != "" &&
    file.value != null &&
    contact.value != ""
  ) {
    showWarning.value = false;
    const fileBlob = new Blob([file.value], { type: file.value.type });

    const formData = new FormData();
    formData.append("username", username.value);
    formData.append("fullName", full_name.value);
    formData.append("email", email.value);
    formData.append("password", password.value);
    formData.append("role", "user");
    formData.append("profileImage", fileBlob, file.value.name); // Append the file directly
    formData.append("contact", contact.value);

    axios.post(`${BASE_URL.value}/users/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log(response.data)
        if (response.data.status == true) {
          showError.value = false;
          showSuccess.value = true;
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
      })
      .catch(error => {
        console.error(error)
        showSuccess.value = false;
        showError.value = true;

      });

    console.log(formData.values);

  } else {
    showWarning.value = true;
  }
};

const GoToLogin = () => {
  router.push("/login");
};
const GoToRegister = () => {
  router.push("/register");
};
</script>
