<template>
  <FwbFooter footer-type="socialmedia">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />

    <div class="md:flex md:justify-between">
      <FwbFooterBrand
        alt="Flowbite Logo"
        href="https://flowbite.com"
        name="Flowbite"
        src="https://flowbite.com/docs/images/logo.svg"
      />
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Resources
          </h2>
          <FwbFooterLinkGroup class="flex flex-col items-start">
            <FwbFooterLink class="mb-4" href="/"> Flowbite </FwbFooterLink>
            <FwbFooterLink class="mb-4" href="/"> Tailwind CSS </FwbFooterLink>
          </FwbFooterLinkGroup>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Follow us
          </h2>
          <FwbFooterLinkGroup class="flex flex-col items-start">
            <FwbFooterLink class="mb-4" href="/"> GitHub </FwbFooterLink>
            <FwbFooterLink class="mb-4" href="/"> Discord </FwbFooterLink>
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
