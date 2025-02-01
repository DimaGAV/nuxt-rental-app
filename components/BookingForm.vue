<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" type="text" placeholder="Ваше имя" />
    <input v-model="email" type="email" placeholder="Email" />
    <button type="submit">Забронировать</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const { defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("Введите имя"),
    email: yup.string().email("Неверный email").required("Введите email"),
  }),
});

const submitForm = handleSubmit((values) => {
  console.log("Отправка формы", values);
});
</script>
