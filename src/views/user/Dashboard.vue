<template>
  <div v-if="showGreet" class="block md:hidden relative">
    <div class="absolute top-0 left-0 py-1 px-2 animate-fade-in-left bg-pink-600">
      <h1 class="text-md text-white font-medium">Hallo, {{ userFullName }}! 😊</h1>
    </div>
  </div>
  <Carousel />
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
import { ref, onMounted } from 'vue';
import Carousel from '../../components/atom/Carousel.vue';
import Modal from '../../components/atom/Modal.vue';
import Jumbotron from '../../components/Jumbotron.vue';
import Card from '../../components/atom/Card.vue';

const showGreet = ref(false);
const userFullName = ref('');

onMounted(() => {
  const userid = localStorage.getItem('userid');
  if (userid != null && userid != '') {
    showGreet.value = true;
    userFullName.value = localStorage.getItem('fullname');
  } else {
    showGreet.value = false;
  }
  console.log(showGreet.value)
  console.log(userFullName.value)
});

const cards = [
  {
    imageSrc: 'src/assets/images/card1.png',
    imageAlt: 'Veneers',
    title: 'Dental Veneers',
    description:
      'VENEER merupakan lapisan material yang terbuat dari composite/porcelain yang berfungsi untuk mengubah bentuk, ukuran, serta warna gigi agar tampilannya lebih estetik.',
  },
  {
    imageSrc: 'src/assets/images/card3.png',
    imageAlt: 'Braces',
    title: 'Braces / Retainer',
    description:
      'Kawat gigi atau behel adalah salah satu alat yang digunakan untuk mendapatkan susunan gigi yang ideal yang bekerja dengan cara memberikan tekanan ke gigi untuk secara perlahan menggerakkan gigi ke posisi idealnya.',
  },
  {
    imageSrc: 'src/assets/images/card2.png',
    imageAlt: 'Whitening',
    title: 'Teeth Whitening',
    description:
      'Bleaching gigi atau pemutihan gigi merupakan prosedur estetika yang digunakan untuk membuat permukaan gigi tampak lebih putih.',
  },
];
</script>
