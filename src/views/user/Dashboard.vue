<template>
  <div v-if="showGreet" class="block md:hidden relative">
    <div class="absolute top-0 left-0 py-1 px-2 animate-fade-in-left bg-pink-600">
      <h1 class="text-md text-white font-medium">Hallo, {{ userFullName }}! 😊</h1>
    </div>
  </div>
  <Carousel :banners="banners" />
  <div class="container mx-auto">
    <Jumbotron />

    <h1 class="hidden md:block text-3xl text-center text-blue-800 font-bold mt-0 mb-8">
      Fasilitas
    </h1>
    <div class="flex flex-wrap justify-center mx-auto">
      <div v-for="(card, index) in cards" :key="index" class="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
        <Card :image-src="card.imageSrc" :img-alt="card.imageAlt" :title="card.title" :description="card.description"
          class="flex flex-col h-full" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: slideInLeft 0.8s ease-in-out forwards;
}
</style>

<script setup>
import axios from 'axios';
import Carousel from '../../components/atom/Carousel.vue';
import Jumbotron from '../../components/Jumbotron.vue';
import Card from '../../components/atom/Card.vue';
import { ref, onMounted, computed } from 'vue';
import { useVariableStore } from '../../store/index';

const store = useVariableStore();
const BASE_URL = computed(() => store.BASEURL);
const showGreet = ref(false);
const userFullName = ref('');
const cards = ref([]);
const banners = ref([]);

const getAllBanner = () => {
  axios.get(`${BASE_URL.value}/banner`)
    .then(response => {
      const result = response.data;
      if (result.status === true) {
        result.result.forEach(element => {
          banners.value.push({ "id": element.id, "additional": element.additional, "src": `${BASE_URL.value}/uploads/${element.image}`});
        });
      } else {
      }
    })
    .catch(error => {
      console.error(error)
    });
}

const getAllContent = () => {
  axios.get(`${BASE_URL.value}/content`)
    .then(response => {
      const result = response.data;
      if (result.status === true) {
        result.result.forEach(element => {
          cards.value.push({ "id": element.id, "title": element.title, "description": element.description, "imageSrc": `${BASE_URL.value}/uploads/${element.image}`});
        });
      } else {
      }
    })
    .catch(error => {
      console.error(error)
    });
}


onMounted(() => {
  getAllBanner();
  getAllContent();
  const userid = localStorage.getItem('userid');
  if (userid != null && userid != '') {
    showGreet.value = true;
    userFullName.value = localStorage.getItem('fullname');
  } else {
    showGreet.value = false;
  }
});

</script>
