<template>
  <header class="header">
    <div class="header__container center">
      <div @click="isVisible = !isVisible" class="header__burger">
        <div class="burger-item"></div>
        <div class="burger-item"></div>
        <div class="burger-item"></div>
      </div>
      <div class="header__logo">
        <a href="/"><img src="/images/logo.svg" alt="Домик 58" /></a>
      </div>

      <nav class="header__nav">
        <div class="header__btn">
          <a href="#" class="btn btn--green">Коттеджи</a>
          <a href="#" class="btn btn--orange"> Квартиры </a>
        </div>
        <ul class="header__menu">
          <li class="menu-item"><a hrerf="#">Развлечения</a></li>
          <li class="menu-item"><a href="#">Акции</a></li>
          <li class="menu-item"><a href="#">Праздники</a></li>
          <li class="menu__dropdown">
            <span>О нас</span>
            <ul class="submenu">
              <li><a href="#">О нас</a></li>
              <li><a href="#">Сотрудничество</a></li>
              <li class="submenu__item"><a href="#">Работа у нас</a></li>
            </ul>
          </li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>

      <nav v-show="isVisible" class="mobile__nav">
        <ul class="mobile__menu">
          <li><a class="text-green" hrerf="#">Коттеджи</a></li>
          <li><a class="text-orange" hrerf="#">Квартиры</a></li>
          <li><a hrerf="#">Развлечения</a></li>
          <li><a href="#">Акции</a></li>
          <li><a href="#">Праздники</a></li>
          <li class="mobmenu__dropdown">
            <span>О нас</span>
          </li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Контакты</a></li>
          <li>
            <div class="mobmenu-phone">
              <a href="tel:+79273855588">
                <img src="/icons/phone.svg" alt="Телефон" />
                +7 (927) 385-55-88
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <div class="header__phone">
        <a href="tel:+79273855588">
          <img src="/icons/phone.svg" alt="Телефон" />
          <span class="header__phone--number">+7 (927) 385-55-88</span>
        </a>
      </div>
    </div>
  </header>
  <div class="border-bottom"></div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>
<style lang="scss">
@use "@/styles/header.scss";
</style>
