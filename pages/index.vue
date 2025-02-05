<template>
  <div>
    <!-- <Form /> -->
    <HeroSection />
    <HouseList :house="houses" />
  </div>
</template>

<script setup>
// const houses = await useFetch("/data/houses.json").then((res) => res.data);
const { data: houses } = await useFetch("/data/houses.json");
</script>
