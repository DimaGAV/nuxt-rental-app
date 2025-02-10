<template>
  <header class="header">
    <nav class="nav">
      <NuxtLink to="/" class="logo"
        ><img src="/images/logo.svg" alt="Домик58"
      /></NuxtLink>
      <ul class="nav-links">
        <li><NuxtLink to="/">Коттеджи</NuxtLink></li>
        <li><NuxtLink to="/">Квартиры</NuxtLink></li>
        <li><NuxtLink to="/">Развлечения</NuxtLink></li>
        <li><NuxtLink to="/">Контакты</NuxtLink></li>
      </ul>
      <a href="tel:+79273855588" class="phone">
        <img src="/icons/Phone.svg" alt="phone" />
        +7 (927) 385-55-88</a
      >
    </nav>
  </header>
</template>
/
<style lang="scss">
@use "@/styles/header.scss";
</style>
