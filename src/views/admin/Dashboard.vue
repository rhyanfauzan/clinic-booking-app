<template>
  <Carousel />
  <div class="container mx-auto">
    <Jumbotron />
    <div class="flex flex-wrap justify-center mx-auto">
      <div class="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
        <Card />
      </div>
      <div class="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
        <Card />
      </div>
      <div class="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
        <Card />
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
</script>
