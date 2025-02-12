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
            sucsses ? 'booking__messagge--sucsses' : 'booking__message--error',
          ]"
        >
          {{ message }}
        </p>
      </Form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang=""></style>
