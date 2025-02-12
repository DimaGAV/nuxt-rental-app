<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="/images/logo.svg" alt="Домик 58" />
      </div>

      <nav class="header__nav">
        <NuxtLink to="#" class="btn btn--green">Коттеджи</NuxtLink>
        <NuxtLink to="#" class="btn btn--orange">Квартиры</NuxtLink>
        <ul class="menu">
          <li><NuxtLink to="#">Развлечения</NuxtLink></li>
          <li><NuxtLink to="#">Акции</NuxtLink></li>
          <li><NuxtLink to="#">Праздники</NuxtLink></li>
          <li class="menu__dropdown">
            <span>О нас</span>
            <ul class="submenu">
              <li><NuxtLink to="#">Компания</NuxtLink></li>
              <li><NuxtLink to="#">Команда</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="#">Блог</NuxtLink></li>
          <li><NuxtLink to="#">Контакты</NuxtLink></li>
        </ul>
      </nav>

      <div class="header__phone">
        <a href="tel:+79273855588">
          <img src="/icons/phone.svg" alt="Телефон" />
          +7 (927) 385-55-88
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "@/styles/header.scss";
</style>
