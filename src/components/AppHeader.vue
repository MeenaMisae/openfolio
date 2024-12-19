<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import MobileMenu from './MobileMenu.vue';
const showMenu = ref(false);
function toggleMenu(event) {
  event.stopPropagation();
  showMenu.value = !showMenu.value;
}
</script>
<template>
  <header class="rounded-lg h-full flex flex-col sticky top-0 z-10 bg-[#04060A] lg:bg-transparent">
    <nav class="w-full rounded">
      <ul
        class="grid lg:grid-cols-12 grid-cols-4 text-[#607B96] relative transition-all duration-300 menu"
        :class="{ 'border-transparent': showMenu, 'border-b-[#1E2D3D]': !showMenu }"
      >
        <li class="lg:col-span-4 col-span-3">
          <RouterLink to="/" class="flex items-center h-14 w-full px-5 lg:justify-center text-2xl">
            Meena Hiwatashi
          </RouterLink>
        </li>
        <li class="border-x border-x-[#1E2D3D] items-center justify-center hidden lg:flex">
          <RouterLink to="/" class="menu-item" activeClass="active-menu-item">
            <span>_olá</span>
          </RouterLink>
        </li>
        <li class="border-x border-x-[#1E2D3D] items-center justify-center hidden lg:flex truncate">
          <RouterLink to="/about" class="menu-item" activeClass="active-menu-item">
            <span>_sobre-mim</span>
          </RouterLink>
        </li>
        <li class="border-x border-x-[#1E2D3D] items-center justify-center hidden lg:flex">
          <RouterLink to="/projects" class="menu-item" activeClass="active-menu-item">
            <span>_projetos</span>
          </RouterLink>
        </li>
        <li
          class="border-l border-l-[#1E2D3D] items-center justify-center hidden lg:flex col-start-12"
        >
          <RouterLink to="/contact" class="menu-item" activeClass="active-menu-item">
            <span>_me-contate</span>
          </RouterLink>
        </li>
        <li class="lg:hidden flex items-center justify-end">
          <button
            @click="toggleMenu"
            class="w-full flex justify-end pr-5 h-full items-center"
            aria-label="Abrir menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              v-show="!showMenu"
            >
              <path
                d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                fill="#607B96"
                stroke="#607B96"
              ></path>
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-show="showMenu"
            >
              <path
                d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z"
                fill="#607B96"
              />
            </svg>
          </button>
        </li>
      </ul>
      <MobileMenu :showMenu="showMenu" @update:showMenu="showMenu = $event" />
    </nav>
  </header>
</template>
