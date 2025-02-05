<template>
  <div class="house-card">
    <img :src="house.image" :alt="house.name" class="house-image" />
    <div class="house-content">
      <h3 class="house-title">{{ house.name }}</h3>
      <div class="house-lication">{{ house.location }}</div>
      <div class="house-info">
        <span>{{ house.capacity }}</span> | <span>{{ house.area }}</span>
      </div>
      <ul class="house-tags">
        <li v-for="tag in house.tags" :key="tag">{{ tag }}</li>
      </ul>
      <div class="house-prices">
        <span class="house-price">{{ house.price }}</span>
        <span class="house-old-price" v-if="house.oldPrice">{{
          house.oldPrice
        }}</span>
      </div>
      <button class="house-button">Подробнее</button>
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
