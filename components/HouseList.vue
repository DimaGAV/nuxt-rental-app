<template>
  <div class="house-list">
    <HouseCard v-for="house in houses" :key="house.id" :house="house" />
  </div>
  <button class="list-button">Больше домов</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
const houses = ref([]);
onMounted(async () => {
  try {
    const response = await fetch("api/houses");
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }
    houses.value = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных", error);
  }
});
defineProps({
  houses: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss">
@use "@/styles/houselist.scss";
</style>
