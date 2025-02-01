<template>
  <div>
    <HeroSection />
    <HouseList :house="houses" />
  </div>
</template>

<script setup>
const houses = await useFetch("/data/houses.json").then((res) => res.data);
</script>
