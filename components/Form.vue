<template>
  <Form @submit="submitForm" @invalid-submit="handleValidationError">
    <div>
      <label for="name">Имя</label>
      <Field id="name" name="name" placeholder="Ваше имя" />
      <ErrorMessage name="name" />
    </div>

    <div>
      <label for="email">Email</label>
      <Field id="email" name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" />
    </div>

    <button type="submit" :disabled="loading">
      {{ loading ? "Отправка..." : "Забронировать" }}
    </button>

    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

// Состояния для индикации статуса отправки
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// Схема валидации
const validationSchema = yup.object({
  name: yup.string().required("Введите имя"),
  email: yup.string().email("Неверный email").required("Введите email"),
});

// Обработка отправки формы
const submitForm = (values, { resetForm }) => {
  loading.value = true; // Включаем индикатор загрузки
  successMessage.value = ""; // Сбрасываем сообщения
  errorMessage.value = "";

  setTimeout(() => {
    // Эмуляция успешной отправки
    successMessage.value = "Форма успешно отправлена!";
    console.log("Успешные данные:", values);

    // Сброс формы
    resetForm();
    loading.value = false; // Выключаем индикатор загрузки
  }, 2000); // Задержка в 2 секунды
};

// Обработка ошибок валидации
const handleValidationError = () => {
  errorMessage.value = "Пожалуйста, заполните все поля корректно.";
};
</script>
