<script setup>
import { ref } from 'vue';
import NestedDetails from '@/components/NestedDetails.vue'
const topics = ref([
  {
    'name': 'pessoal',
    'details': [{
      'bio': {
        "nome": "Meena Hiwatashi",
        "idade": 23,
        "cargo": "Desenvolvedora Jr",
      },
      'color': '#E99287',
    },
    { 'interesses': { 'lista': ['animes', 'robótica/eletrônica', 'livros de ficção científica'] }, 'color': '#43D9AD' },
    {
      'educacao': {
        'analise_e_desenvolv_de_sistemas': '3º período',
        'engenharia_da_computacao': '1º período',
      },
      'color': '#3A49A4'
    }]
  },
  {
    'name': 'profissional',
    'details': [{
      'carreira': {
        'inicio': 'Julho de 2023',
        'cargo': 'Estagiária de Desenvolvimento',
        'empresa': 'G3 Telecom',
        'responsabilidades': [
          'Auxílio no desenvolvimento e manutenção de sistemas',
          'Documentação de sistemas',
          'Utilização de PHP e jQuery'
        ]
      },
      'color': '#E99287'
    },
    {
      'cargo_atual': {
        'inicio': 'Julho de 2024',
        'cargo': 'Desenvolvedora Jr',
        'tecnologias': [
          'Laravel', 'Livewire', 'Tailwind', 'jQuery', 'Docker', 'Redis', 'S3', 'MySQL'
        ],
        'colaboracao': 'Colaborei com o time usando Metodologias Ágeis e GitFlow'
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

function getClass(data) {
  if (Array.isArray(data)) {
    return 'text-[#A3BE8C]';
  }
  if (typeof data === 'string') {
    return 'text-[#88C0D0]';
  }
  if (typeof data === 'number') {
    return 'text-[#D08770]'
  }
  return '';
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
    <div class="px-2 flex items-center h-[40vh]">
      <div class="bg-[#011221] p-4 rounded-lg border-[1px] w-full break-words border-[#1E2D3D] text-[#D8DEE9] font-mono"
        v-show="showContent">
        <p>{</p>
        <div v-for="(data, key) in formattedData" :key="key" class="w-full">
          <div v-if="typeof data === 'object'">
            <div v-for="(value, index) in data" :key="index" class="pl-4">
              "{{ index }}": <span :class="getClass(value)">
                <template v-if="typeof value === 'number'">{{ value }}</template>
                <template v-else>"{{ value }}"</template>
                <span class="text-white" v-if="index !== Object.keys(data).length - 1">,</span>
              </span>
            </div>
          </div>
        </div>
        <p>}</p>
      </div>
    </div>

    <!-- <div class="text-white pl-5"> -->
    <!-- {{ topics[selectedTopic].details[selectedContent] }} -->
    <!-- </div> -->
  </div>
</template>
