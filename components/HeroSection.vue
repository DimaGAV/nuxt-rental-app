<template>
  <div class="hero-section center">
    <div class="hero-section__header">
      <h1 class="hero-section__text">
        Аренда коттеджей и квартир посуточно
        <span class="hero-section__text--city">в Пензе</span>
      </h1>

      <button class="hero-section__button" @click="showForm = true">
        Забронировать домик
      </button>
    </div>
    <img src="public/images/banner.jpg" alt="Главный баннер" />

    <BookingForm :visible="showForm" @close="closeForm" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const showForm = ref(false);

const closeForm = () => {
  showForm.value = false;
};
</script>

<style lang="scss" scoped>
@use "@/styles/herosection.scss";
</style>
