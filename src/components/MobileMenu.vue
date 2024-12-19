<script setup>
import { RouterLink } from 'vue-router';
import { onBeforeUnmount, onMounted, ref } from 'vue';
defineProps({
  showMenu: {
    type: Boolean,
    required: true
  }
});
const emit = defineEmits(['update:showMenu']);
const menu = ref(null);
function closeMenu() {
  emit('update:showMenu', false);
}
onMounted(() => {
  document.addEventListener('click', closeMenu);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu);
});
</script>
<template>
  <transition name="slide-down">
    <div v-show="showMenu" class="absolute top-full left-0 w-full bg-[#04060A]" ref="menu">
      <ul class="text-white">
        <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
          <RouterLink
            to="/"
            class="w-full h-full flex items-center"
            @click="closeMenu"
            activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]"
          >
            <span class="ml-4">_olá</span>
          </RouterLink>
        </li>
        <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
          <RouterLink
            to="/about"
            class="w-full h-full flex items-center"
            @click="closeMenu"
            activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]"
          >
            <span class="ml-4">_sobre-mim</span>
          </RouterLink>
        </li>
        <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
          <RouterLink
            to="/projects"
            class="w-full h-full flex items-center"
            @click="closeMenu"
            activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]"
          >
            <span class="ml-4">_projetos</span>
          </RouterLink>
        </li>
        <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
          <RouterLink
            to="/contact"
            class="w-full h-full flex items-center"
            @click="closeMenu"
            activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]"
          >
            <span class="ml-4">_contato</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </transition>
</template>
