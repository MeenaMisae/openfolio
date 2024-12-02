<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    loop: true,
    autoplay: true,
    direction: "vertical",
    slidesPerView: 1,
    initialSlide: 0,
    keyboardControl: true,
    mousewheelControl: true,
    coverflow: {
      rotate: 0,
      stretch: 150,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  });
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
</script>

<template>
  <div class="flex w-full flex-col py-5">
    <div class="flex-1 flex justify-center flex-col items-center w-full">
      <div class="absolute top-20 h-fit w-full justify-end lg:flex hidden">
        <div class="flex flex-col items-center">
          <img src="/images/me.png" alt="" class="object-cover rounded-full w-16 h-16 border-[3.5px] border-[#303a4b]">
          <span
            class="bg-[#111821] text-white h-[29px] rounded-lg p-3 flex items-center text-sm">solicitar_contato</span>
        </div>
      </div>
      <div class="flex lg:flex-1 flex-col w-full items-center justify-center px-8 lg:flex-row gap-6">
        <div class="flex flex-col items-center lg:items-start lg:gap-3">
          <span class="text-[#8095AB]">Olá, eu sou</span>
          <h1
            class="text-[25pt] lg:text-[40pt] font-semibold tracking-tighter text-white typewriter-animation typewriter-text max-w-fit">
            Meena Hiwatashi</h1>
          <p class="text-[#7fcaff] text-center w-[350px] lg:w-[520px] lg:text-start text-[13pt]">
            Sou uma desenvolvedora de software fullstack com foco principal no desenvolvimento front-end.
          </p>
        </div>
        <div class="lg:max-w-xl">
          <div class="swiper w-full lg:h-72 h-56">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide rounded-lg bg-black w-full h-48 overflow-hidden lg:px-3 px-6 border-[#1E2D3D] border">
                <div class="h-12 flex items-center">
                  <span class="text-[#E8B44F] font-semibold">_wire_cotton</span>
                </div>
                <div class="w-full">
                  <img src="/images/projects/wire-cotton.svg" alt="" class="w-full h-full object-cover rounded">
                </div>
              </div>
              <div class="swiper-slide rounded-lg bg-black w-full h-48 overflow-hidden px-6 border-[#1E2D3D] border">
                <div class="h-12 flex items-center">
                  <span class="text-[#E8B44F] font-semibold">_nps</span>
                </div>
                <div>
                  <img src="/images/projects/nps.png" alt="" class="w-full h-full object-cover rounded">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 pt-4">
        <a class="btn" href="https://github.com/MeenaMisae/portfolio" target="_blank">
          Gostou? Clona pra você!
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="#70879E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
        <div class="flex items-center flex-col lg:hidden">
          <img src="/images/me.png" alt="" class="object-cover rounded-full w-16 h-16 border-[3.5px] border-[#303a4b]">
          <span
            class="bg-[#111821] text-white h-[29px] rounded-lg p-3 flex items-center text-sm">solicitar_contato</span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <div class="css-blurry-gradient-blue"></div>
    <div class="css-blurry-gradient-green"></div> -->
<style scoped>
.typewriter-text {
  width: fit-content;
  border-right: 3px solid rgba(255, 255, 255, .75);
  white-space: nowrap;
  overflow: hidden;
  padding-right: 2px;
}

.typewriter-animation {
  animation: typewriter 3.5s steps(40) 1s 1 normal both,
    blinkTextCursor 800ms steps(40) infinite normal;
}

.css-blurry-gradient-blue {
  position: fixed;
  bottom: 25%;
  right: 5%;
  width: 300px;
  height: 300px;
  border-radius: 0% 0% 50% 50%;
  rotate: 10deg;
  filter: blur(70px);
  background: radial-gradient(circle at 50% 50%, rgba(77, 91, 206, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
}

.css-blurry-gradient-green {
  position: absolute;
  top: 20%;
  right: 20%;
  width: 300px;
  height: 300px;
  border-radius: 0% 50% 0% 50%;
  filter: blur(70px);
  background: radial-gradient(circle at 50% 50%, rgba(67, 217, 173, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
}

@keyframes typewriter {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, .75);
  }

  to {
    border-right-color: transparent;
  }
}


@keyframes typewriter {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
</style>