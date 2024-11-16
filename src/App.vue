<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { onBeforeUnmount, onMounted, ref } from 'vue';
const menu = ref(null)
const showMenu = ref(false)
function closeMenu(e) {
  if (menu.value && !menu.value.contains(e.target)) {
    showMenu.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', closeMenu)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu)
})
function toggleMenu(event) {
  event.stopPropagation()
  showMenu.value = !showMenu.value
}
</script>

<template>
  <main class="bg-[#010C15] p-4 h-screen overflow-auto">
    <div class="bg-[#011627] border-[#1E2D3D] border-2 rounded-xl overflow-auto h-full">
      <nav class="sticky top-0 w-full rounded bg-[#011627] z-10 relative">
        <ul class="text-[#607B96] h-14 border-[#1E2D3D] border-b-2 p-5 flex items-center justify-between">
          <li>
            meena-hiwatashi
          </li>
          <li class="lg:hidden">
            <button @click="toggleMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" v-show="!showMenu">
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#607B96" stroke="#607B96"></path>
              </svg>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                v-show="showMenu">
                <path
                  d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z"
                  fill="#607B96" />
              </svg>
            </button>
          </li>
        </ul>
        <div v-show="showMenu" class="absolute top-full left-0 w-full z-50 bg-[#011627]" ref="menu">
          <ul class="text-white">
            <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
              <RouterLink to="/" class="w-full h-full flex items-center" @click="showMenu = false"
                activeClass="font-semibold border-l-[#FEA55F] border-l-2">
                <span class="ml-4">_olá</span>
              </RouterLink>
            </li>
            <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
              <RouterLink to="/about" class="w-full h-full flex items-center" @click="showMenu = false"
                activeClass="font-semibold border-l-[#FEA55F] border-l-2">
                <span class=" ml-4">_sobre-mim</span>
              </RouterLink>
            </li>
            <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
              <RouterLink to="/projects" class="w-full h-full flex items-center" @click="showMenu = false"
                activeClass="font-semibold border-l-[#FEA55F] border-l-2">
                <span class="ml-4">_projetos</span>
              </RouterLink>
            </li>
            <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
              <RouterLink to="/contact" class="w-full h-full flex items-center" @click="showMenu = false"
                activeClass="font-semibold border-l-[#FEA55F] border-l-2">
                <span class="ml-4">_contato</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
      <RouterView />
    </div>
  </main>
</template>