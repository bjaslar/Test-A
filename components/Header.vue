<template>
  <div class="nav">
    <div class="desktop">
      <div class="nav__container">
        <div class="nav__container__logo">
          <NuxtLink to="/">
            <img :src="logoMonochrome" alt="logo_asioso" />
          </NuxtLink>
        </div>

        <div class="nav__container__menu">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li @click="activeSubmenu = 'show'">About</li>
            <li @click="activeSubmenu = 'show'">Blog</li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><b-icon-telephone></b-icon-telephone> +387 65 655 655</li>
          </ul>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="animate__animated animate__fadeInDown animate"
      leave-active-class="animate__animated animate__fadeOutUp animate"
    >
      <div class="nav__submenu row desktop" v-if="activeSubmenu === 'show'">
        <b-col>
          <span>
            <b-icon-x-circle
              class="pt-2"
              font-scale="4"
              @click="activeSubmenu = ''"
            ></b-icon-x-circle>
          </span>
          <ul>
            <NuxtLink to="/news">
              <li @click="activeSubmenu = ''">News</li>
            </NuxtLink>
            <li>FreeSpirit Service</li>
            <li>Pimcore Service</li>
          </ul>
        </b-col>
      </div>
    </transition>

    <div class="mobile">
      <div class="nav__mobile">
        <NuxtLink to="/">
          <img :src="logoMonochrome" alt="logo_asioso" />
        </NuxtLink>
        <b-button v-b-toggle.sidebar>
          <img :src="mobileNav" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import logoMonochrome from "../assets/images/logo_monochrome.webp";
import MobileNav from "../assets/icons/mobile-nav.svg";
import contentTab from "../assets/images/content-tab.jpeg";

export default {
  data() {
    return {
      activeSubmenu: "",
    };
  },
  computed: {
    logoMonochrome() {
      return logoMonochrome;
    },
    testURL() {
      return "htttps://localhost:3000";
    },
    mobileNav() {
      return MobileNav;
    },
    contentTab() {
      return contentTab;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>