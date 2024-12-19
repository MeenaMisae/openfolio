<script setup>
import { ref } from 'vue';
import axios from 'axios';

const showSuccessMessage = ref(false);
const serverErrorMessage = ref(null);
const errors = ref({});
const form = ref({
  name: '',
  email: '',
  message: ''
});
const validateForm = () => {
  const validationErrors = {};
  Object.entries(form.value).forEach(([field, value]) => {
    if (!value.trim().length) {
      validationErrors[field] = `O campo ${field} é obrigatório.`;
    }
    if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      validationErrors[field] = `Por favor, insira um email válido.`;
    }
  });
  if (Object.keys(validationErrors).length > 0) {
    errors.value = validationErrors;
    setTimeout(() => {
      errors.value = {};
    }, 4000);
    return false;
  }
  errors.value = {};
  return true;
};
const handleSubmit = () => {
  if (validateForm()) {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('message', form.value.message);
    axios
      .post('/', new URLSearchParams(formData).toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then((res) => {
        console.log(res);
        showSuccessMessage.value = true;
        setTimeout(() => {
          showSuccessMessage.value = false;
        }, 3000);
        form.value = { name: '', email: '', message: '' };
      })
      .catch((error) => {
        console.log(error);
        serverErrorMessage.value =
          'Ocorreu um erro ao enviar o formulário, tente novamente mais tarde';
        setTimeout(() => {
          serverErrorMessage.value = null;
        }, 3000);
      });
  }
};
</script>
<template>
  <div class="w-full flex items-center py-6 lg:py-0">
    <section class="flex flex-col w-full items-center justify-center gap-3">
      <div class="flex items-center flex-col gap-3">
        <h1 class="text-3xl">Me contate!</h1>
        <div class="max-w-[600px] text-center leading-7">
          <p>Quer conversar sobre projetos, colaborações ou tirar dúvidas?</p>
          <p>Entre em contato comigo.</p>
        </div>
      </div>
      <div>
        <a href="mailto:contato@meena.com.br" class="btn btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(112, 135, 158)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span> contato@meena.com.br </span>
        </a>
      </div>
      <form
        class="w-[330px] lg:w-[600px] flex flex-col gap-3 h-full"
        @submit.prevent="handleSubmit"
      >
        <input
          v-model="form.name"
          type="text"
          name="name"
          id="name"
          class="input input-primary"
          placeholder="nome"
          required
        />
        <span v-if="errors.name" class="text-red-600">{{ errors.name }}</span>
        <input
          v-model="form.email"
          type="email"
          name="email"
          id="email"
          class="input input-primary"
          placeholder="email"
          required
        />
        <span v-if="errors.email" class="text-red-600">{{ errors.email }}</span>
        <textarea
          v-model="form.message"
          name="message"
          id="message"
          placeholder="mensagem"
          class="textarea textarea-primary"
          required
        ></textarea>
        <span v-if="errors.message" class="text-red-600">{{ errors.message }}</span>
        <span class="text-green-600" v-if="showSuccessMessage"
          >Obrigada! Responderei o mais rápido possível :]</span
        >
        <span class="text-red-600" v-if="serverErrorMessage"> {{ serverErrorMessage }}</span>
        <button type="submit" class="btn btn-primary h-14 !text-white">enviar</button>
      </form>
    </section>
  </div>
</template>
