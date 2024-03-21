<template>
  <div class="bg-auth">
    <div class="container mx-auto py-8 px-6 justify-center text-center">
      <div>
        <div class="w-full lg:w-1/2 p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 mx-auto">
          <h2 class="text-2xl text-center font-bold text-gray-900 dark:text-white">
            Sign in to Zein Clinic
          </h2>
          <!-- <img src="../assets/images/login.png" alt="" class="mx-auto" style="height: 170px" /> -->

          <form class="mt-3 space-y-6" action="#">
            <div class="text-start">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input id="email" type="email" name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com" required />
            </div>
            <div class="text-start">
              <label for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input id="password" type="password" name="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <!-- SHow Warning  -->
            <FwbToast v-if="showWarning" type="warning" class="mx-0 px-0 py-0 my-0">
              Email dan password harus diisi.
            </FwbToast>
            <!-- SHow Success  -->
            <FwbToast v-if="showSuccess" type="success" class="mx-0 px-0 py-0 my-0">
              Horai! Berhasil Login.
            </FwbToast>
            <!-- SHow Error  -->
            <FwbToast v-if="showError" type="danger" class="mx-0 px-0 py-0 my-0">
              Email atau password salah.
            </FwbToast>
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
            <button type="button" @click="Login"
              class="w-full px-5 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style="width: 100%">
              Login
            </button>
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              Not registered yet?
              <a @click="GoToRegister" class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
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

const router = useRouter();
const showWarning = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

const Login = async () => {
  showWarning.value = false;

  console.log("email: ", email.value);
  console.log("password: ", password.value);

  if (
    email.value != "" &&
    password.value != ""
  ) {

    const formData = new FormData();
    formData.append("email", email.value);
    formData.append("password", password.value);

    axios.post('http://localhost:3000/users/login', formData, {
      headers: {
        'Content-Type': "application/json",
      },
    })
      .then(response => {
        if (response.data.status == true) {
          showError.value = false;
          showSuccess.value = true;

          const userData = response.data.result.userData;
          console.log(response.data.result.userData)
          localStorage.setItem('userid', userData.id);
          localStorage.setItem('username', userData.username);
          localStorage.setItem('fullname', userData.full_name);
          localStorage.setItem('email', userData.email);
          localStorage.setItem('role', userData.role);
          localStorage.setItem('contact', userData.contact);
          localStorage.setItem('profile_image', userData.profile_image);
          localStorage.setItem('rating', userData.rating);

          setTimeout(() => {
            router.push("/");
          }, 500);
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

const GoToRegister = () => {
  router.push('/register');
};
</script>../../application/usecases/FetchAuthUseCase
