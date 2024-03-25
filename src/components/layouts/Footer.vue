<template>
  <FwbFooter footer-type="socialmedia">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />

    <div class="md:flex items-start md:justify-between">
      <div class="flex items-center">
        <img
          src="../../assets/images/logo2.png"
          alt="logo"
          style="width: 40px"
        />
        <h5 class="ml-2 font-medium text-lg">Zein Clinic</h5>
      </div>
      <div class="mt-5 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Contact
          </h2>
          <FwbFooterLinkGroup class="flex flex-col items-start">
            <FwbFooterLink class="mb-4" href="https://maps.app.goo.gl/eKNs5kXrKLEddkSn6 ">
              Jl. Soekarno-Hatta, Bandung
            </FwbFooterLink>
            <FwbFooterLink class="mb-4" href="https://wa.me/08123456789">
              0812 3456 7890
            </FwbFooterLink>
          </FwbFooterLinkGroup>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Follow us
          </h2>
          <FwbFooterLinkGroup class="flex flex-col items-start">
            <FwbFooterLink class="mb-4" href="https://instagram.com/"> Instagram </FwbFooterLink>
            <FwbFooterLink class="mb-4" href="https://tiktok.com/"> Tiktok </FwbFooterLink>
          </FwbFooterLinkGroup>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Legal
          </h2>
          <FwbFooterLinkGroup class="flex flex-col items-start">
            <FwbFooterLink class="mb-4" href="/">
              Privacy Policy
            </FwbFooterLink>
            <FwbFooterLink class="mb-4" href="/">
              Terms & Conditions
            </FwbFooterLink>
          </FwbFooterLinkGroup>
        </div>
      </div>
    </div>
  </FwbFooter>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterIcon,
  FwbFooterBrand,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue';
</script>
