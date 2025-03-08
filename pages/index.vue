<template>
  <div>
    <HeroSection />
    <HouseList :houses="houses" />
  </div>
</template>

<script setup>
const { data: houses } = await useFetch("/api/houses");
</script>
