<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

onMounted(() => {
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
        opacity: Math.random() * 0.5 + 0.5
      };
    }
    let particles = Array.from({ length: 40 }, createParticle);
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((p) => {
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
    console.error('Canvas element not found.');
  }
});
</script>

<template>
  <main class="min-h-screen flex flex-col border-[#1E2D3D] border">
    <AppHeader />
    <div class="flex flex-1 overflow-auto">
      <canvas class="w-full h-full fixed -z-10 top-0 left-0 pointer-events-none"></canvas>
      <RouterView />
    </div>
    <AppFooter />
  </main>
</template>
