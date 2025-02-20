<template>
  <div class="hero-section">
    <h1 class="hero-section__header">
      Аренда коттеджей и квартир посуточно
      <span class="hero-section__header--city">в Пензе</span>
    </h1>

    <!-- Кнопка для открытия модального окна -->
    <button class="hero-section__button" @click="showForm = true">
      Забронировать домик
    </button>
    <img src="/public/images/banner.jpg" alt="Главный баннер" />

    <!-- Модальное окно -->
    <div v-if="showForm" class="modal">
      <!-- Оверлей для закрытия -->
      <div class="modal__overlay" @click.self="closeForm"></div>

      <!-- Содержимое модального окна -->
      <div class="modal__content">
        <button class="modal__close" @click="closeForm">×</button>
        <BookingForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
// import BookingForm from "@/components/BookingForm.vue";

// Управление видимостью модалки
const showForm = ref(false);

// Открытие модалки
const openForm = () => {
  console.log("Открытие модального окна");
  showForm.value = true;
};

// Закрытие модалки
const closeForm = () => {
  console.log("Закрытие модального окна");
  showForm.value = false; // Изменяем состояние
};

watch(showForm, (newValue) => {
  console.log(`showForm изменилось: ${newValue}`);
});
</script>

<style lang="scss" scoped>
@use "@/styles/herosection.scss";
</style>
