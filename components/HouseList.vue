<template>
  <div class="house-list center">
    <h2 class="house-list__header">Выберите дом по душе</h2>
    <div class="house-list__card">
      <HouseCard v-for="house in houses" :key="house.id" :house="house" />
    </div>
    <button class="house-list__button">
      Больше домов
      <svg
        width="13.750977"
        height="13.750732"
        viewBox="0 0 13.751 13.7507"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          id="Vector"
          d="M7.31 7.31L1.06 13.56C0.95 13.68 0.79 13.75 0.62 13.75C0.45 13.75 0.3 13.68 0.18 13.56C0.06 13.45 0 13.29 0 13.12C0 12.95 0.06 12.8 0.18 12.68L5.99 6.87L0.18 1.06C0.06 0.95 0 0.79 0 0.62C0 0.45 0.06 0.3 0.18 0.18C0.3 0.06 0.45 0 0.62 0C0.79 0 0.95 0.06 1.06 0.18L7.31 6.43C7.37 6.49 7.42 6.56 7.45 6.63C7.48 6.71 7.5 6.79 7.5 6.87C7.5 6.95 7.48 7.03 7.45 7.11C7.42 7.19 7.37 7.25 7.31 7.31ZM13.56 6.43L7.31 0.18C7.2 0.06 7.04 0 6.87 0C6.7 0 6.55 0.06 6.43 0.18C6.31 0.3 6.25 0.45 6.25 0.62C6.25 0.79 6.31 0.95 6.43 1.06L12.24 6.87L6.43 12.68C6.31 12.8 6.25 12.95 6.25 13.12C6.25 13.29 6.31 13.45 6.43 13.56C6.55 13.68 6.7 13.75 6.87 13.75C7.04 13.75 7.2 13.68 7.31 13.56L13.56 7.31C13.62 7.25 13.67 7.19 13.7 7.11C13.73 7.03 13.75 6.95 13.75 6.87C13.75 6.79 13.73 6.71 13.7 6.63C13.67 6.56 13.62 6.49 13.56 6.43Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
    </button>
  </div>
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
