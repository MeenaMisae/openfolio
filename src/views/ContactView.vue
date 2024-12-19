<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
    name: '',
    email: '',
    message: ''
})
const showSuccessMessage = ref(false)
const showErrorMessage = ref(false)
function handleSubmit(event) {
    const formEl = event.target
    const formData = new FormData(formEl)
    axios.post('/', new URLSearchParams(formData), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
        .then((res) => {
            form.value = { name: '', email: '', message: '' };
            showSuccessMessage.value = true;
            console.log(res);
        })
        .catch((error) => {
            showErrorMessage.value = true;
            console.log(formData)
            console.error(error);
        });
}
</script>
<template>
    <div class="w-full flex items-center py-6 lg:py-0">
        <div class="flex flex-col w-full items-center justify-center gap-3">
            <div class="flex items-center flex-col gap-3">
                <h1 class="text-3xl">Me contate!</h1>
                <div class="max-w-[600px] text-center leading-7">
                    <p>
                        Quer conversar sobre projetos, colaborações ou tirar dúvidas?
                    </p>
                    <p>Entre em contato comigo.</p>
                </div>
            </div>
            <div>
                <a href="mailto:contato@meena.com.br" class="btn btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="rgb(112, 135, 158)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>
                        contato@meena.com.br
                    </span>
                </a>
            </div>
            <form class="w-[330px] lg:w-[600px] flex flex-col gap-3 h-full" name="contact" data-netlify="true"
                @submit.prevent="handleSubmit">
                <input v-model="form.name" type="text" name="name" id="name" class="input input-primary"
                    placeholder="nome" required>
                <input v-model="form.email" type="text" name="email" id="email" class="input input-primary"
                    placeholder="email" required>
                <textarea v-model="form.message" name="message" id="message" placeholder="mensagem"
                    class="textarea textarea-primary" required></textarea>
                <input type="hidden" name="form-name" value="contact" />
                <span class="text-red-600" v-show="showErrorMessage">Ocorreu um erro ao enviar o formulário, tente
                    novamente mais tarde.</span>
                <span class="text-green-600" v-show="showSuccessMessage">Obrigada! Responderei o mais rápido
                    possível :]</span>
                <button type="submit" class="btn btn-primary h-14">enviar</button>
            </form>
        </div>
    </div>
</template>