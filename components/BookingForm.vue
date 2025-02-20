<template>
  <div class="booking">
    <div class="booking__overlay" @click="closeModal"></div>
    <div class="booking__modal">
      <button class="booking__close" @click="closeModal">x</button>
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
            placeholder="Ваше имя"
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
            placeholder="+7 (___) ___-__-__"
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
          <input type="checkbox" id="agree" v-model="form.agree" />
          <label for="agree"
            >Я соглашаюсь с <a href="#">Политикой Конфеденциальности</a></label
          >
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
            success ? 'booking__messagge--success' : 'booking__message--error',
          ]"
        >
          {{ message }}
        </p>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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

const form = ref({
  name: "",
  phone: "",
  comment: "",
  agree: false,
});

/* const onSubmit = (values) => {
  console.log("Отправка данных:", values);
}; */

const isSubmitting = ref(false);
const message = ref("");
const success = ref(false);

const submitForm = () => {
  isSubmitting.value = true;
  message.value = false;

  setTimeout(() => {
    isSubmitting.value = false;

    if (Math.random() > 0.3) {
      success.value = true;
      message.value = "Форма успешно отправлена!";
      form.value = { name: "", phone: "", comment: "", agree: false };
    } else {
      success.value = false;
      message.value = "Ошибка при отправке. Попробуйте ещё раз";
    }
  }, 2000);
};
</script>

<style lang="scss" scoped>
@use "@/styles/bookingform.scss";

.booking__message {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;

  &--success {
    color: green;
  }

  &--error {
    color: red;
  }
}
</style>
