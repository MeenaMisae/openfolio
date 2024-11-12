<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue';

const showMenu = ref(false)
</script>

<template>
  <main class="bg-[#010C15] p-4 h-screen overflow-auto">
    <div class="bg-[#011627] border-[#1E2D3D] border-2 w-full rounded-xl overflow-auto h-full">
      <nav>
        <ul class="text-[#607B96] h-14 border-[#1E2D3D] border-b-2 p-5 flex items-center justify-between">
          <li>
            meena-hiwatashi
          </li>
          <li class="lg:hidden">
            <button @click="showMenu = !showMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" v-show="!showMenu">
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
      </nav>
      <div v-if="showMenu">
        <ul class="divide-[#1E2D3D] text-white divide-y-[2px] flex-grow">
          <li class="h-14 flex items-center pl-4">
            <RouterLink to="/" class="w-full h-full flex items-center" @click="showMenu = false">_olá</RouterLink>
          </li>
          <li class="h-14 flex items-center pl-4">
            <RouterLink to="/about" class="w-full h-full flex items-center" @click="showMenu = false">_sobre-mim
            </RouterLink>
          </li>
          <li class="h-14 flex items-center pl-4">
            <RouterLink to="/projects" class="w-full h-full flex items-center" @click="showMenu = false">_projetos
            </RouterLink>
          </li>
          <li class="h-14 flex items-center pl-4">
            <RouterLink to="/contact" class="w-full h-full flex items-center" @click="showMenu = false">_contato
            </RouterLink>
          </li>
          <li class="h-14"></li>
        </ul>
      </div>
      <div v-else>
        <RouterView />
      </div>
    </div>
  </main>
</template>