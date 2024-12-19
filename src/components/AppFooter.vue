<script setup>
import IconGitHub from './icons/IconGitHub.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';
</script>
<template>
    <footer class="border-[#1E2D3D] text-[#607B96] flex border-y">
        <div class="flex justify-start w-full h-12">
            <span class="h-full items-center flex px-5">
                me encontre:
            </span>
            <a href="https://www.linkedin.com/in/meena-misae/" target="_blank" class="btn-square btn-outline"
                aria-label="Acessar perfil do Linkedin de Meena Misae">
                <IconLinkedIn />
            </a>
            <a href="https://github.com/MeenaMisae" target="_blank" class="btn-square btn-outline"
                aria-label="Acessar perfil do Github de Meena Misae">
                <IconGitHub />
            </a>
        </div>
    </footer>
</template>