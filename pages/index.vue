<template>
  <div>
    <!-- <Form /> -->
    <HeroSection />
    <HouseList :houses="houses" />
  </div>
</template>

<script setup>
// const houses = await useFetch("/data/houses.json").then((res) => res.data);
const { data: houses } = await useFetch("/api/houses");
</script>
