<script setup>
const technologies = ['HTML', 'CSS', 'Vue'];
const projects = {
    '1': { 'title': '_wire-cotton', 'description': 'Front-end desenvolvido em Vue.js para um painel de administração de produtos em um e-commerce. Permite o gerenciamento eficiente de itens, facilitando a experiência do usuário na gestão de um catálogo online.', 'src': '/images/projects/wire-cotton.avif' },
    '2': { 'title': '_wire-cotton-api', 'description': 'Back-end em Laravel com MySQL, atuando como API para o projeto Wire-Cotton, fornecendo funcionalidades e dados para o painel de administração e garantindo a integridade e eficiência das operações de e-commerce.', 'src': '/images/projects/wire-cotton.avif' },
    '3': { 'title': '_meenu', 'description': 'Em construção, esse projeto é voltado para o setor alimentício e permite o gerenciamento de produtos, incluindo funcionalidades como precificação, receitas, controle de estoque e outras ferramentas importantes para a área de alimentos.', 'src': '/images/projects/wire-cotton.avif' }
} 
</script>
<template>
    <div class="pb-3 w-full">
        <div class="h-16 flex items-center pl-5">
            <h1 class="text-white">_projetos</h1>
        </div>
        <details class="bg-[#1E2D3D]">
            <summary class="text-white pl-5 py-2">
                <span class="ml-2">tecnologias</span>
            </summary>
            <div class="bg-[#011627] pl-5">
                <ul class="text-white space-y-4 pt-4">
                    <li v-for="tech in technologies" :key="tech" class="items-center flex gap-3 w-full">
                        <input type="checkbox" :id="tech">
                        <label :for="tech" class="w-full flex gap-2">
                            <img :src="`/icons/techs/${tech.toLowerCase()}.svg`" :alt="`imagem de ${tech}`">
                            <span>{{ tech }}</span>
                        </label>
                    </li>
                </ul>
            </div>
        </details>
        <div class="w-full px-7 mt-6 flex flex-col space-y-4">
            <div v-for="(project, index) in projects" :key="index" class="space-y-3">
                <span class="text-[#5565E8] font-bold">Projeto {{ index }}
                    <span class="text-[#607B96] ml-2 font-normal">/{{ project.title }}</span>
                </span>
                <div class="border-[#1E2D3D] border rounded-2xl">
                    <div class="w-full h-48 overflow-hidden">
                        <img :src="project.src" alt="" class="rounded-t-2xl">
                    </div>
                    <div class="bg-[#011221] rounded-b-2xl p-8 space-y-6 border-t border-[#1E2D3D]">
                        <p class="text-[#607B96]">
                            {{ project.description }}
                        </p>
                        <button class="bg-[#1C2B3A] rounded-lg text-white w-full h-10">ver-projeto</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>