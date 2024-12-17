<script setup>
import { ref } from 'vue';
const topic = ref()
const showContent = ref(false)
const content = ref()
const tabs = ref([])

function loadTopic(title, isOpen) {
  if (isOpen) {
    showContent.value = isOpen
    topic.value = title
    loadContent(title)
    document.querySelectorAll('details[data-topic]').forEach((el) => {
      if (el.getAttribute('data-topic') !== title) {
        el.open = false
      }
    })
  } else {
    if (topic.value === title) {
      showContent.value = false;
      topic.value = null;
    }
  }
}
const selectedTab = ref()
function loadContent(title) {
  if (title && !tabs.value.includes(title)) {
    tabs.value.push(title)
  }
  if (!showContent.value && tabs.value.length > 1) {
    showContent.value = true
  }
  selectedTab.value = title
  if (title === 'bio') {
    return content.value = 'Olá, meu nome é Meena, tenho 23 anos e sou uma desenvolvedora júnior apaixonada por tecnologia e inovação. 🧑‍💻 <br><br> Estou sempre em busca de novos desafios e oportunidades para crescer, tanto na minha carreira quanto nas minhas paixões pessoais :)'
  }
  if (title === 'interesses') {
    return content.value = 'Tenho um grande interesse por animes, mangás, e livros de ficção científica. 👽️ <br><br> Também gosto muito de praticar esportes, principalmente natação e ciclismo. 🚴'
  }
  if (title === 'educacao') {
    return content.value = 'Atualmente, curso o 4º período de Análise e Desenvolvimento de Sistemas, e o 1º período de Engenharia da Computação. 👩‍🎓'
  }
  if (title === '07/2024') {
    return content.value = '<b>Em julho de 2024, fui promovida a Desenvolvedora Júnior na G3 Telecom</b>.<br><br> 📌 Passei a desenvolver funcionalidades com Laravel, Livewire, Tailwind, e gerenciar ambientes com Docker. <br><br> 📌 Utilizei o Redis para cache e filas assíncronas, além de trabalhar com S3 para armazenamento e MySQL em bancos de dados. <br><br> 📌 Colaborei em times ágeis, seguindo Scrum e utilizando GitFlow para controle de versão, otimizando processos e entregas.'
  }
  if (title === '07/2023') {
    return content.value = '<b>Em julho de 2023, comecei como Estagiária de Desenvolvimento na G3 Telecom</b>.<br><br> 📌 Atuei no desenvolvimento e manutenção de sistemas, utilizando PHP e jQuery para corrigir bugs e implementar funcionalidades. <br><br> 📌 Também contribuí com a documentação técnica, detalhando fluxos e integrações, e trabalhei em equipe, adquirindo uma base sólida em desenvolvimento web.'
  }
}
function closeChildren(title, isOpen) {
  if (!isOpen) {
    const parent = document.querySelector(`details[data-parent="${title}"]`);
    const children = parent.querySelectorAll('details[data-topic]')
    children.forEach((child) => {
      child.open = false
    })
  }
}
function closeTab(index, event) {
  event.stopPropagation()
  if (tabs.value.length > 1) {
    loadContent(tabs.value[index + 1])
  } else {
    showContent.value = false
  }
  if (index === (tabs.value.length - 1)) {
    loadContent(tabs.value[index - 1])
  }
  tabs.value.splice(index, 1)
}

</script>
<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 lg:flex-1 lg:h-auto lg:w-auto h-full w-full">
    <div class="h-16 flex items-center pl-5 lg:hidden">
      <h1 class="text-white">_sobre-mim</h1>
    </div>
    <div class="lg:col-span-2 lg:w-full lg:border-x lg:border-x-[#1E2D3D] space-y-1">
      <details @toggle="closeChildren('pessoal', $event.target.open)" data-parent="pessoal" open>
        <summary class="text-white pl-5 py-2 bg-[#1E2D3D]">
          <span class="ml-2">pessoal</span>
        </summary>
        <details class="pl-5 text-[#607B96]" @toggle="loadTopic('bio', $event.target.open)" data-topic="bio"
          :class="{ 'text-white': topic === 'bio' }" open>
          <summary class="py-2 accordeon flex gap-2">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.0802 3.61111V12.2778C15.0802 12.4693 15.0041 12.653 14.8687 12.7885C14.7332 12.9239 14.5495 13 14.358 13H1.35796C1.16642 13 0.982719 12.9239 0.847276 12.7885C0.711833 12.653 0.635742 12.4693 0.635742 12.2778V2.88889H14.358C14.5495 2.88889 14.7332 2.96498 14.8687 3.10042C15.0041 3.23587 15.0802 3.41957 15.0802 3.61111ZM8.15696 1.44444H0.635742V0.722222C0.635742 0.530677 0.711833 0.346977 0.847276 0.211534C0.982719 0.076091 1.16642 0 1.35796 0H6.71252L8.15696 1.44444Z"
                fill="#E99287" />
            </svg>
            bio
          </summary>
        </details>
        <details class="pl-5 text-[#607B96]" @toggle="loadTopic('interesses', $event.target.open)"
          data-topic="interesses" :class="{ 'text-white': topic === 'interesses' }">
          <summary class="py-2 accordeon flex gap-2">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.0802 3.61111V12.2778C15.0802 12.4693 15.0041 12.653 14.8687 12.7885C14.7332 12.9239 14.5495 13 14.358 13H1.35796C1.16642 13 0.982719 12.9239 0.847276 12.7885C0.711833 12.653 0.635742 12.4693 0.635742 12.2778V2.88889H14.358C14.5495 2.88889 14.7332 2.96498 14.8687 3.10042C15.0041 3.23587 15.0802 3.41957 15.0802 3.61111ZM8.15696 1.44444H0.635742V0.722222C0.635742 0.530677 0.711833 0.346977 0.847276 0.211534C0.982719 0.076091 1.16642 0 1.35796 0H6.71252L8.15696 1.44444Z"
                fill="#43D9AD" />
            </svg>
            interesses
          </summary>
        </details>
        <details class="pl-5 text-[#607B96]" @toggle="loadTopic('educacao', $event.target.open)" data-topic="educacao"
          :class="{ 'text-white': topic === 'educacao' }">
          <summary class="py-2 accordeon flex gap-2">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.0802 3.61111V12.2778C15.0802 12.4693 15.0041 12.653 14.8687 12.7885C14.7332 12.9239 14.5495 13 14.358 13H1.35796C1.16642 13 0.982719 12.9239 0.847276 12.7885C0.711833 12.653 0.635742 12.4693 0.635742 12.2778V2.88889H14.358C14.5495 2.88889 14.7332 2.96498 14.8687 3.10042C15.0041 3.23587 15.0802 3.41957 15.0802 3.61111ZM8.15696 1.44444H0.635742V0.722222C0.635742 0.530677 0.711833 0.346977 0.847276 0.211534C0.982719 0.076091 1.16642 0 1.35796 0H6.71252L8.15696 1.44444Z"
                fill="#3A49A4" />
            </svg>
            educacao
          </summary>
        </details>
      </details>
      <details @toggle="closeChildren('profissional', $event.target.open)" data-parent="profissional">
        <summary class="text-white pl-5 py-2 bg-[#1E2D3D]">
          <span class="ml-2">profissional</span>
        </summary>
        <details class="pl-5 text-[#607B96]" @toggle="loadTopic('07/2024', $event.target.open)" data-topic="07/2024"
          :class="{ 'text-white': topic === '07/2024' }">
          <summary class="py-2 accordeon flex gap-2">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.0802 3.61111V12.2778C15.0802 12.4693 15.0041 12.653 14.8687 12.7885C14.7332 12.9239 14.5495 13 14.358 13H1.35796C1.16642 13 0.982719 12.9239 0.847276 12.7885C0.711833 12.653 0.635742 12.4693 0.635742 12.2778V2.88889H14.358C14.5495 2.88889 14.7332 2.96498 14.8687 3.10042C15.0041 3.23587 15.0802 3.41957 15.0802 3.61111ZM8.15696 1.44444H0.635742V0.722222C0.635742 0.530677 0.711833 0.346977 0.847276 0.211534C0.982719 0.076091 1.16642 0 1.35796 0H6.71252L8.15696 1.44444Z"
                fill="#43D9AD" />
            </svg>
            07/2024
          </summary>
        </details>
        <details class="pl-5 text-[#607B96]" @toggle="loadTopic('07/2023', $event.target.open)" data-topic="07/2023"
          :class="{ 'text-white': topic === '07/2023' }">
          <summary class="py-2 accordeon flex gap-2">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.0802 3.61111V12.2778C15.0802 12.4693 15.0041 12.653 14.8687 12.7885C14.7332 12.9239 14.5495 13 14.358 13H1.35796C1.16642 13 0.982719 12.9239 0.847276 12.7885C0.711833 12.653 0.635742 12.4693 0.635742 12.2778V2.88889H14.358C14.5495 2.88889 14.7332 2.96498 14.8687 3.10042C15.0041 3.23587 15.0802 3.41957 15.0802 3.61111ZM8.15696 1.44444H0.635742V0.722222C0.635742 0.530677 0.711833 0.346977 0.847276 0.211534C0.982719 0.076091 1.16642 0 1.35796 0H6.71252L8.15696 1.44444Z"
                fill="#E99287" />
            </svg>
            07/2023
          </summary>
        </details>
      </details>
    </div>
    <div class="lg:w-full lg:col-span-10">
      <div class="lg:grid lg:grid-cols-8 lg:w-full h-10 hidden border-b-2 border-[#1E2D3D]">
        <div
          class="text-[#607B96] cursor-pointer flex items-center justify-between px-4 border-[#1E2D3D] border border-y-0 hover:bg-[#111820] transition-colors duration-200 ease-in-out"
          :class="{ 'text-white font-semibold border-b-2 border-b-[#5565E8] bg-[#111820]': tab === selectedTab }"
          v-for="(tab, index) in tabs" :key="index" @click.prevent="loadContent(tab)">
          <span>{{ tab }}</span>
          <span @click="closeTab(index, $event)" class="opacity-100 hover:opacity-70 h-full flex items-center">
            <svg width="13" height="13" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.10015 4.20762L8.81265 0.495117L9.87315 1.55562L6.16065 5.26812L9.87315 8.98062L8.81265 10.0411L5.10015 6.32862L1.38765 10.0411L0.327148 8.98062L4.03965 5.26812L0.327148 1.55562L1.38765 0.495117L5.10015 4.20762Z"
                fill="#848b91" />
            </svg>
          </span>
        </div>
      </div>
      <div class="flex flex-col px-4 py-6 lg:p-6" v-show="showContent">
        <div class="flex gap-x-3 items-center mb-3">
          <img src="/images/me.png" alt="" class="object-cover rounded-full w-12 h-12">
          <div class="flex flex-col">
            <span class="text-[#5565E8] font-bold">@meena.hiwa</span>
            <span class="text-[#607B96] text-sm">5 meses atrás</span>
          </div>
        </div>
        <div
          class="bg-[#12171F] p-4 rounded-lg border-[1px] w-full max-h-dvh overflow-y-auto border-[#1f2836] text-[#D8DEE9] font-mono lg:max-w-4xl"
          v-html="content">
        </div>
      </div>
    </div>
  </div>
</template>
