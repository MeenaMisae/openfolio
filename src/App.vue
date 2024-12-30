<script setup>
import { RouterView } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

onMounted(() => {
  const canvas = document.querySelector('canvas');
  if (!canvas) {
    console.error('Canvas element not found.');
    return;
  }
  const PARTICLE_COUNT = 40;
  const PARTICLE_SIZE_MIN = 0.001;
  const PARTICLE_SIZE_MAX = 1;
  const SPEED_FACTOR = 1;
  const ctx = canvas.getContext('2d', { alpha: true });
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  let resizeTimeout;
  window.addEventListener('resize', () => {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 200);
  });
  function createParticle(x = null, y = null) {
    return {
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      size: Math.random() * PARTICLE_SIZE_MAX + PARTICLE_SIZE_MIN,
      dx: (Math.random() - 0.5) * SPEED_FACTOR,
      dy: (Math.random() - 0.5) * SPEED_FACTOR,
      opacity: Math.random() * 0.5 + 0.5
    };
  }
  const particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle());
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  let isRunning = true;
  let lastTime = 0;
  const FPS = 60;
  const frameInterval = 1000 / FPS;

  function animate(timestamp) {
    if (!isRunning) return;
    const deltaTime = timestamp - lastTime;
    if (deltaTime < frameInterval) {
      requestAnimationFrame(animate);
      return;
    }
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
        particles[i] = createParticle(p.x < 0 ? canvas.width : p.x > canvas.width ? 0 : p.x, p.y < 0 ? canvas.height : p.y > canvas.height ? 0 : p.y);
        continue;
      }
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  onUnmounted(() => {
    isRunning = false;
    window.removeEventListener('resize', resizeCanvas);
  });
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
