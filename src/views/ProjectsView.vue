<script setup>
const technologies = ['HTML', 'CSS', 'Vue'];
const projects = { '1': { 'title': '_wire-cotton', 'description': 'iodsjisdjisj' } } 
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
        <div class="w-full px-7 mt-6">
            <div v-for="(project, index) in projects" :key="index">
                <span class="text-[#5565E8] font-bold">Projeto {{ index }}
                    <span class="text-[#607B96] ml-2 font-normal">/{{ project.title }}</span>
                </span>
                <div class="border-[#1E2D3D] w-full"></div>
            </div>
        </div>
    </div>
</template>