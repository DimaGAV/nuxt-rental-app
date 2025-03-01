<template>
  <header class="header">
    <div class="header__container center">
      <div class="header__logo">
        <img src="/images/logo.svg" alt="Домик 58" />
      </div>

      <nav class="header__nav">
        <div class="header__btn">
          <button class="btn btn--green">
            <NuxtLink to="#">Коттеджи</NuxtLink>
          </button>
          <button class="btn btn--orange">
            <NuxtLink to="#">Квартиры</NuxtLink>
          </button>
        </div>
        <ul class="header__menu">
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
  <div class="border-bottom"></div>
</template>

<style lang="scss">
@use "@/styles/header.scss";
</style>
