<script setup>
import { ref } from 'vue';
import NestedDetails from '@/components/NestedDetails.vue'
const topics = ref([
  {
    'name': 'pessoal',
    'details': [{
      'bio': {
        'presentation': 'Olá, meu nome é Meena, tenho 23 anos e sou uma desenvolvedora júnior apaixonada por tecnologia e inovação. 🧑‍💻 <br><br> Estou sempre em busca de novos desafios e oportunidades para crescer, tanto na minha carreira quanto nas minhas paixões pessoais :)'
      },
      'color': '#E99287',
    },
    {
      'interesses': {
        'lista': 'Tenho um grande interesse por animes, mangás, e livros de ficção científica. 👽️ <br><br> Também gosto muito de praticar esportes, principalmente natação e ciclismo. 🚴'
      },
      'color': '#43D9AD'
    },
    {
      'educacao': {
        'lista': 'Atualmente, curso o 4º período de Análise e Desenvolvimento de Sistemas, e o 1º período de Engenharia da Computação. 👩‍🎓'
      },
      'color': '#3A49A4'
    }]
  },
  {
    'name': 'profissional',
    'details': [{
      '2024': {
        'descricao': '<b>Em julho de 2024, fui promovida a Desenvolvedora Júnior na G3 Telecom</b>.<br><br> Passei a desenvolver funcionalidades com Laravel, Livewire, Tailwind, e gerenciar ambientes com Docker. <br><br>Utilizei o Redis para cache e filas assíncronas, além de trabalhar com S3 para armazenamento e MySQL em bancos de dados. <br><br>Colaborei em times ágeis, seguindo Scrum e utilizando GitFlow para controle de versão, otimizando processos e entregas.'
      },
      'color': '#E99287'
    },
    {
      '2023': {
        'descricao': '<b>Em julho de 2023, comecei como Estagiária de Desenvolvimento na G3 Telecom</b>.<br><br> Atuei no desenvolvimento e manutenção de sistemas, utilizando PHP e jQuery para corrigir bugs e implementar funcionalidades. <br><br>Também contribuí com a documentação técnica, detalhando fluxos e integrações, e trabalhei em equipe, adquirindo uma base sólida em desenvolvimento web.',
      },
      'color': '#43D9AD'
    }]
  },
])

const showContent = ref(false)
const isOpen = ref(Array(topics.value.length).fill(false))
const formattedData = ref({})

function handleContent(detail) {
  formattedData.value = detail
  showContent.value = true
}
function hideContent() {
  showContent.value = false
}
function toggleDetails(index) {
  isOpen.value = Array(topics.value.length).fill(false);
  isOpen.value[index] = true;
}
</script>
<template>
  <div>
    <div class="h-16 flex items-center pl-5">
      <h1 class="text-white">_sobre-mim</h1>
    </div>
    <div class="space-y-1">
      <NestedDetails v-for="(topic, index) in topics" :key="index" :details="topic.details" :open="isOpen[index]"
        @click.prevent="toggleDetails(index)" @render-content="handleContent" @clear-content="hideContent">
        <template #title>{{ topic.name }}</template>
      </NestedDetails>
    </div>
    <div class="px-2 mt-6">
      <div class="flex gap-x-3 items-center my-[5%]" v-show="showContent">
        <img src="@/assets/images/me.png" alt="" class="object-cover rounded-full w-12 h-12">
        <div class="flex flex-col">
          <span class="text-[#5565E8] font-bold">@meena.hiwa</span>
          <span class="text-[#607B96] text-sm">5 meses atrás</span>
        </div>
      </div>
      <div class="flex items-center">
        <div
          class="bg-[#011221] p-4 rounded-lg border-[1px] w-full break-words overflow-auto max-h-96 border-[#1E2D3D] text-[#D8DEE9] font-mono"
          v-show="showContent">
          <div v-for="(data, key) in formattedData" :key="key" class="w-full">
            <div v-if="typeof data === 'object'">
              <p v-html="Object.values(data)[0]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
