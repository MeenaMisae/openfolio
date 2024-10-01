<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue';

const showMenu = ref(false)
</script>

<template>
  <main class="bg-[#010C15] h-screen w-screen p-4">
    <div class="bg-[#011627] border-[#1E2D3D] border-2 h-full w-full rounded-xl">
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
          <li class="h-14 flex items-center pl-4"><span>_olá</span></li>
          <li class="h-14 flex items-center pl-4"><span>_sobre-mim</span></li>
          <li class="h-14 flex items-center pl-4"><span>_projetos</span></li>
          <li class="h-14 flex items-center pl-4"><span>_contato</span></li>
          <li class="h-14"></li>
        </ul>
      </div>
      <div v-else>
        <RouterView />
      </div>
    </div>
  </main>
</template>
