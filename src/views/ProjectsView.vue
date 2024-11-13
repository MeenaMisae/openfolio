<script setup>
const technologies = ['HTML', 'CSS', 'Vue', 'Laravel', 'Livewire'];
const projects = {
    '1': { 'title': '_wire-cotton', 'description': 'Painel de administração de produtos em um e-commerce. Permite o gerenciamento eficiente de itens, facilitando a experiência do usuário na gestão de um catálogo online.', 'src': '/images/projects/wire-cotton.avif', 'finished': true },
    '2': { 'title': '_wire-cotton-api', 'description': 'API para o projeto Wire Cotton, fornecendo funcionalidades e dados para o painel de administração e garantindo a integridade e eficiência das operações de e-commerce.', 'src': '/images/projects/wire-cotton.avif', 'finished': true },
    '3': { 'title': '_meenu', 'description': 'Projeto voltado para o setor alimentício e permite o gerenciamento de produtos, incluindo funcionalidades como precificação, receitas, controle de estoque e outras ferramentas.', 'src': '/images/projects/wire-cotton.avif', 'finished': false }
} 
</script>
<template>
    <div class="pb-3 w-full overflow-hidden">
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
        <div class="w-full h-full flex">
            <div class="max-w-5xl flex lg:flex-row flex-col gap-6 px-6 lg:px-0">
                <div v-for="(project, index) in projects" :key="index" class="w-full mt-6 flex flex-col gap-y-4">
                    <span class="text-[#5565E8] font-bold text-lg">Projeto {{ index }}
                        <span class="text-[#607B96] ml-2 font-normal">/{{ project.title }}</span>
                    </span>
                    <div class="border-[#1E2D3D] border rounded-2xl">
                        <div class="w-full h-48 overflow-hidden">
                            <img :src="project.src" alt="" class="rounded-t-2xl">
                        </div>
                        <div class="bg-[#011221] rounded-b-2xl border-t border-[#1E2D3D] p-8 flex flex-col gap-y-6">
                            <p class="text-[#607B96]">
                                {{ project.description }}
                            </p>
                            <a class="flex items-center justify-center bg-[#1C2B3A] rounded-lg text-white w-full h-10">
                                {{ project.finished ? 'Ver projeto' : '🚧 Em construção' }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>