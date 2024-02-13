<template>
  <fwb-select v-model="selected" :options="times" @Change="onChange" />
</template>

<style>
select {
  background: white !important;
  height: 38px !important;
  border-radius: 4px !important;
  padding: 0px 12px !important;
}
</style>

<script setup>
import { FwbSelect } from "flowbite-vue";
import { ref, defineProps } from "vue";
import { useTimeStore } from "../../store/index";

const store = useTimeStore();
const selected = ref();

const times = [
  { value: "08:00", name: "08:00 - 09:00" },
  { value: "09:00", name: "09:00 - 10:00" },
  { value: "10:00", name: "10:00 - 11:00" },
  { value: "15:00", name: "15:00 - 16:00" },
  { value: "16:00", name: "16:00 - 17:00" },
  { value: "17:00", name: "17:00 - 18:00" },
];

const onChange = () => {
  store.setHour(selected.value);
};
</script>
