<template>
  <div>
    <HeroSection />
    <HouseList :houses="houses" />
  </div>
</template>

<script setup>
import BookingForm from "~/components/BookingForm.vue";

const { data: houses } = await useFetch("/api/houses");
</script>
