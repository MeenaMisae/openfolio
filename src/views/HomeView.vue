<script setup>
</script>

<template>
  <div class="flex justify-between flex-col h-full overflow-hidden pl-3 lg:px-48">
    <div class="css-blurry-gradient-blue"></div>
    <div class="css-blurry-gradient-green"></div>
    <div class="ml-3 flex justify-center items-center max-w-2xl h-96">
      <div class="flex flex-col space-y-2">
        <h1 class="text-white text-lg lg:text-xl">Olá. Meu nome é</h1>
        <span class="text-5xl text-white">Meena Hiwatashi</span>
        <span class="text-xl lg:text-2xl text-[#43D9AD] typewriter-animation typewriter-text max-w-fit">>
          Desenvolvedora
          Web</span>
      </div>
    </div>
    <div class="ml-3 flex justify-center items-center max-w-2xl">
      <div class="space-y-3">
        <span class="text-[#607B96] text-sm">// acesse meu perfil no github</span>
        <p class="text-white">
          <span class="text-[#4D5BCE]">const </span>
          <span class="text-[#43D9AD]">githubLink</span>
          =
          <a href="https://github.com/MeenaMisae" target="_blank">
            <span class="text-[#E99287] underline">“https://github.com/MeenaMisae”</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

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