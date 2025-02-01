<template>
  <div>
    <Header />
    <HouseDetails :house="house" />
    <BookingForm />
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from "vue-routes";

const route = useRoute();
const houseId = route.param.id;

const house = await useFetch("/data/house_${houseId}.json").then(
  (res) => res.data
);
</script>

<style lang="scss"></style>
