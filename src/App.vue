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
  const canvas = document.querySelector('canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 0.001,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.5,
      };
    }
    let particles = Array.from({ length: 40 }, createParticle);
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          return false;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        return true;
      });
      while (particles.length < 40) {
        particles.push(createParticle());
      }
      requestAnimationFrame(animate);
    }

    animate();
  } else {
    console.error("Canvas element not found.");
  }
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
  <main class="min-h-screen flex flex-col border-[#1E2D3D] border">
    <div class="rounded-lg h-full flex flex-col flex-1">
      <nav class="sticky top-0 w-full rounded z-10 bg-[#04060A] lg:bg-transparent">
        <ul class="grid lg:grid-cols-12 grid-cols-4 text-[#607B96] relative transition-all duration-300 menu"
          :class="{ 'border-transparent': showMenu, 'border-b-[#1E2D3D]': !showMenu }">
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
          <li class="border-l border-l-[#1E2D3D] items-center justify-center hidden lg:flex col-start-12">
            <RouterLink to="/contact" class="menu-item" activeClass="active-menu-item">
              <span>_me-contate</span>
            </RouterLink>
          </li>
          <li class="lg:hidden flex items-center justify-end">
            <button @click="toggleMenu" class="w-full flex justify-end pr-5 h-full items-center"
              aria-label="Abrir menu">
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
        <transition name="slide-down">
          <div v-show="showMenu" class="absolute top-full left-0 w-full bg-[#04060A]" ref="menu">
            <ul class="text-white">
              <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
                <RouterLink to="/" class="w-full h-full flex items-center" @click="showMenu = false"
                  activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]">
                  <span class="ml-4">_olá</span>
                </RouterLink>
              </li>
              <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
                <RouterLink to="/about" class="w-full h-full flex items-center" @click="showMenu = false"
                  activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]">
                  <span class="ml-4">_sobre-mim</span>
                </RouterLink>
              </li>
              <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
                <RouterLink to="/projects" class="w-full h-full flex items-center" @click="showMenu = false"
                  activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]">
                  <span class="ml-4">_projetos</span>
                </RouterLink>
              </li>
              <li class="h-14 flex items-center border-b border-b-[#1E2D3D]">
                <RouterLink to="/contact" class="w-full h-full flex items-center" @click="showMenu = false"
                  activeClass="font-semibold border-l-[#C44656] border-l-4 bg-[#111820]">
                  <span class="ml-4">_contato</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </transition>
      </nav>
      <div class="flex flex-1 overflow-auto">
        <canvas class="w-full h-full fixed -z-10 top-0 left-0 pointer-events-none"></canvas>
        <RouterView />
      </div>
      <footer class="border-[#1E2D3D] text-[#607B96] flex border-y">
        <div class="flex justify-start w-full h-12">
          <span class="h-full items-center flex px-5">
            me encontre:
          </span>
          <a href="https://www.linkedin.com/in/meena-misae/" target="_blank"
            class="hover:bg-[#111820] px-4 items-center flex hover:stroke-[#E8B44F]  stroke-[#70879E] border-[#1E2D3D] border-x transition-colors duration-200 ease-in-out"
            aria-label="Acessar perfil do Linkedin de Meena Misae">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://github.com/MeenaMisae" target="_blank"
            class="hover:bg-[#111820] px-4 items-center flex hover:stroke-[#E8B44F]  stroke-[#70879E] border-[#1E2D3D] border-x transition-colors duration-200 ease-in-out"
            aria-label="Acessar perfil do Github de Meena Misae">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
              </path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  </main>
</template>