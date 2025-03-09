<template>
  <div v-if="visible" class="booking">
    <div class="booking__overlay" @click="closeModal"></div>
    <div class="booking__modal">
      <button class="booking__close" @click="closeModal">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="31"
            height="31"
            transform="translate(0.5 0.5)"
            fill-opacity="0"
          />
          <path
            d="M23.07 7.73L7.51 23.29C7.32 23.48 7.22 23.73 7.22 24C7.22 24.26 7.32 24.51 7.51 24.7C7.7 24.89 7.95 25 8.22 25C8.48 25 8.74 24.89 8.92 24.7L24.48 9.15C24.67 8.96 24.77 8.7 24.77 8.44C24.77 8.17 24.67 7.92 24.48 7.73C24.29 7.54 24.04 7.44 23.77 7.44C23.51 7.44 23.25 7.54 23.07 7.73Z"
            fill="#B9C0C0"
          />
          <path
            d="M7.51 9.12L23.07 24.67C23.25 24.86 23.51 24.97 23.77 24.97C24.04 24.97 24.29 24.86 24.48 24.67C24.67 24.49 24.77 24.23 24.77 23.97C24.77 23.7 24.67 23.45 24.48 23.26L8.92 7.7C8.74 7.51 8.48 7.41 8.22 7.41C7.95 7.41 7.7 7.51 7.51 7.7C7.32 7.89 7.22 8.14 7.22 8.41C7.22 8.67 7.32 8.93 7.51 9.12Z"
            fill="#B9C0C0"
          />
        </svg>
      </button>
      <h2 class="booking__title">Забронировать домик</h2>
      <p class="booking__text">
        Оставьте свои контакты, мы подберем для вас подходящий домик
      </p>

      <Form @submit="submitForm" v-slot="{ errors }" class="booking__form">
        <div class="booking__field">
          <Field
            name="name"
            v-model="form.name"
            type="text"
            class="booking__input"
            placeholder="Ваше имя*"
            rules="required|min:2"
          />
          <span class="booking__error" v-if="errors.name">{{
            errors.name
          }}</span>
        </div>

        <div class="booking__field">
          <Field
            name="phone"
            v-model="form.phone"
            type="tel"
            class="booking__input"
            placeholder="+7 (___) ___-__-__*"
            rules="required|phone"
          />
          <span class="booking__error" v-if="errors.phone">{{
            errors.phone
          }}</span>
        </div>

        <div class="booking__field">
          <Field
            name="comment"
            v-model="form.comment"
            as="textarea"
            class="booking__textarea"
            placeholder="Комментарий"
            rules="min:5"
          />
        </div>

        <div class="booking__checkbox">
          <input
            class="checkbox"
            type="checkbox"
            id="agree"
            v-model="form.agree"
          />
          <label for="agree">
            Я соглашаюсь с
            <a href="#">Политикой Конфеденциальности</a> сайта
          </label>
        </div>

        <button
          type="submit"
          class="booking__button"
          :disabled="isSubmitting || !form.agree"
        >
          {{ isSubmitting ? "Отправка..." : "Отправить" }}
        </button>
        <p
          v-if="message"
          :class="[
            'booking__message',
            success ? 'booking__message--success' : 'booking__message--error',
          ]"
        >
          {{ message }}
        </p>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { Form, Field, defineRule, configure } from "vee-validate";
import { required, min } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule(
  "phone",
  (value) =>
    /^(\+7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/.test(
      value
    ) || "Введите корректный номер телефона"
);

configure({
  validateOnInput: true,
});

const props = defineProps({
  visible: Boolean,
});
const emit = defineEmits(["close"]);

const form = ref({
  name: "",
  phone: "",
  comment: "",
  agree: false,
});

const isSubmitting = ref(false);
const message = ref("");
const success = ref(false);

// Закрытие формы
const closeModal = () => {
  emit("close");
};

const submitForm = () => {
  isSubmitting.value = true;
  message.value = "";

  setTimeout(() => {
    isSubmitting.value = false;

    if (Math.random() > 0.3) {
      success.value = true;
      message.value = "Форма успешно отправлена!";
      form.value = { name: "", phone: "", comment: "", agree: false };
      closeModal();
    } else {
      success.value = false;
      message.value = "Ошибка при отправке. Попробуйте ещё раз";
    }
  }, 2000);
};
</script>

<style lang="scss">
@use "@/styles/bookingform.scss";
</style>
