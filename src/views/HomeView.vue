<script setup>
</script>

<template>
  <div class="flex justify-between flex-col h-[70vh]">
    <div class="flex justify-center items-center h-[60%] w-full flex-col relative">
      <img src="/images/background-blurs.png" alt="" class="absolute w-[100%] top-2 opacity-65 lg:hidden">
      <div class="w-[85%] flex flex-col space-y-2">
        <h1 class="text-[#E5E9F0] text-lg">Olá. Meu nome é</h1>
        <span class="text-5xl text-[#E5E9F0]">Meena Hiwatashi</span>
        <span class="text-xl text-[#43D9AD]">> Desenvolvedora Web</span>
      </div>
    </div>
    <div class="w-full flex justify-center z-10">
      <div class="w-[85%] space-y-3">
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
