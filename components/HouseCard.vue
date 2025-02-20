<template>
  <div class="house-card">
    <img :src="house.image" :alt="house.name" class="house-card__image" />
    <div class="house-card__content">
      <div class="house-card__info">
        <div class="house-card__location">
          <img src="/icons/navigation.svg" />{{ house.location }}
        </div>
        <div class="info">
          <img src="/icons/mans.svg" />{{ house.capacity }}
        </div>
        <div class="info"><img src="/icons/house.svg" />{{ house.area }}</div>
      </div>
      <h3 class="house-card__title">{{ house.name }}</h3>
      <div class="house-card__prices">
        <span class="house-card__price">{{ house.price }}</span>
        <span class="house-card__old-price" v-if="house.oldPrice">{{
          house.oldPrice
        }}</span>
      </div>
      <ul class="house-card__tags">
        <li v-for="tag in house.tags" :key="tag">{{ tag }}</li>
      </ul>
      <button class="house-card__button">Подробнее</button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  house: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="scss">
@use "@/styles/housecard.scss";
</style>
