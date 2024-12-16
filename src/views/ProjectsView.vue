<script setup>
import { computed, ref } from 'vue';
import { getProjects } from '@/services/projectService';

const technologies = ['HTML', 'CSS', 'Vue', 'Laravel', 'Livewire'];
const checkedTechs = ref([]);
const projects = computed(() => getProjects())
const filteredProjects = computed(() => {
    if (checkedTechs.value.length) {
        return Object.values(projects.value).filter(project => {
            return project.techs && project.techs.some(tech => checkedTechs.value.includes(tech))
        })
    }
    return projects.value
})
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 lg:flex-1 lg:h-auto lg:w-auto h-full w-full">
        <div class="h-16 flex items-center pl-5 lg:hidden">
            <h1 class="text-white">_projetos</h1>
        </div>
        <div class="lg:col-span-2 lg:w-full lg:border-x lg:border-x-[#1E2D3D] space-y-1">
            <details open>
                <summary class="text-white pl-5 py-2 bg-[#1E2D3D]">
                    <span class="ml-2">tecnologias</span>
                </summary>
                <div class="pl-5">
                    <ul class="text-white space-y-4 pt-4 h-fit">
                        <li v-for="tech in technologies" :key="tech" class="items-center flex gap-3 w-full">
                            <input type="checkbox" :id="tech" :value="tech" v-model="checkedTechs">
                            <label :for="tech" class="w-full flex gap-2">
                                <img :src="`/icons/techs/${tech.toLowerCase()}.svg`" :alt="`imagem de ${tech}`">
                                <span>{{ tech }}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </details>
        </div>
        <div class="lg:w-full lg:col-span-10">
            <div class="lg:flex lg:w-full h-10 hidden border-b-2 border-[#1E2D3D]">
                <div
                    class="text-[#607B96] font-semibold flex items-center justify-between px-4 border-[#1E2D3D] border border-y-0 w-full">
                    <span>{{ checkedTechs.join('; ') }}</span>
                </div>
            </div>
            <div class="flex gap-12 flex-wrap items-center justify-center pt-6">
                <a v-for="(project, index) in filteredProjects" :key="index" class="lg:h-72 w-80 group"
                    title="Ver projeto" :href="project.link" target="_blank">
                    <div
                        class="flex items-center justify-between px-2 opacity-70 group-hover:opacity-100 transition-opacity">
                        <div class="flex items-center gap-3 pb-2">
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.0802 3.61111V12.2778C15.0802 12.4693 15.0041 12.653 14.8687 12.7885C14.7332 12.9239 14.5495 13 14.358 13H1.35796C1.16642 13 0.982719 12.9239 0.847276 12.7885C0.711833 12.653 0.635742 12.4693 0.635742 12.2778V2.88889H14.358C14.5495 2.88889 14.7332 2.96498 14.8687 3.10042C15.0041 3.23587 15.0802 3.41957 15.0802 3.61111ZM8.15696 1.44444H0.635742V0.722222C0.635742 0.530677 0.711833 0.346977 0.847276 0.211534C0.982719 0.076091 1.16642 0 1.35796 0H6.71252L8.15696 1.44444Z"
                                    stroke="#FFFFFF" />
                            </svg>
                            <span class="">{{ project.title }}</span>
                        </div>
                        <span v-if="project.link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </span>
                    </div>
                    <div
                        class="bg-[#12171F] rounded-lg border-[1px] border-[#1f2836] text-[#D8DEE9] font-mono flex flex-col gap-4 h-full">
                        <div class="rounded-2xl flex flex-col relative">
                            <div class="flex w-full justify-end">
                                <div class="absolute flex flex-col w-full">
                                    <img :src="`/icons/techs/filled/${tech.toLowerCase()}.svg`" alt=""
                                        v-for="(tech) in project.techs" :key="tech" class="max-w-fit self-end p-1">
                                </div>
                            </div>
                            <div class="h-36 w-full overflow-hidden">
                                <img :src="project.src" alt="" class="object-cover rounded h-full w-full">
                            </div>
                            <div class="px-6 py-2">
                                {{ project.description }}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>