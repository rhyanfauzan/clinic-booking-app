<template>
  <Carousel />
  <div class="container mx-auto">
    <Jumbotron />

    <h1 class="text-3xl text-center mt-10 text-blue-800 font-bold mb-8">
      Fasilitas
    </h1>
    <div class="flex flex-wrap justify-center mx-auto">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8"
      >
        <Card
          :image-src="card.imageSrc"
          :img-alt="card.imageAlt"
          :title="card.title"
          :description="card.description"
          class="flex flex-col h-full"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Carousel from '../../components/atom/Carousel.vue';
import Modal from '../../components/atom/Modal.vue';
import Jumbotron from '../../components/Jumbotron.vue';
import Card from '../../components/atom/Card.vue';

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
