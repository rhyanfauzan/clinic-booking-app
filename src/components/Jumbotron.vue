<template>
  <div class="bg-primary py-10">
    <div class="container mx-auto text-center">
      <h1 class="text-3xl text-blue-800 font-bold mb-4">Profil Zein Clinic</h1>
      <div class="container lg:px-20 px-10">
        <fwb-p class="text-center">
          Zein Clinic adalah klinik dokter gigi spesialis terbesar yang telah
          melayani pasien di Indonesia selama lebih dari 10 tahun.
        </fwb-p>

        <fwb-p class="text-center">
          Tagline Zein Clinic <strong>“SENYUM PERCAYA DIRI"</strong> kami
          wujudkan dalam bentuk komitmen untuk senantiasa memberikan pelayanan
          serta perawatan dental terbaik bagi setiap pasien melalui tim Dokter
          Gigi Spesialis yang expert dan berpengalaman, peralatan dan
          perlengkapan medis yang mutakhir, serta para staff yang terlatih dan
          berdedikasi.
        </fwb-p>
        <br />
        <fwb-p class="text-center">
          Berada di bawah naungan PT. Zethansa, hingga saat ini Zein Clinic
          telah memiliki 30 cabang klinik di Jabodetabek, Bandung, Surabaya, dan
          Semarang serta melayani lebih dari 15.000 pasien setiap bulannya. Zein
          Clinic beranggotakan lebih dari 700 Dokter Gigi dan staff dengan salah
          satu visi misi terus berkembang serta membangun klinik di kota-kota
          besar di tanah air agar semakin dekat dengan pasien, sekaligus
          memberikan kontribusi nyata bagi peningkatan kualitas kesehatan gigi
          masyarakat.
        </fwb-p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { FwbP } from 'flowbite-vue';

const router = useRouter();

const Login = () => {
  router.push('/doctors');
};
</script>
