<script setup>
import { onMounted, ref } from 'vue';
import emailjs from '@emailjs/browser';

const isRecaptchaVerified = ref(false);
const showSuccessMessage = ref(false);
const serverErrorMessage = ref(null);
const errors = ref({});
const form = ref({ name: '', email: '', message: '' });
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
onMounted(() => {
  window.grecaptcha.render('grecaptcha', {
    sitekey: recaptchaKey,
    callback: (response) => {
      console.log('reCAPTCHA validado:', response);
      isRecaptchaVerified.value = true;
      errors.value.recaptcha = null;
    },
    'expired-callback': () => {
      console.log('reCAPTCHA expirado.');
      isRecaptchaVerified.value = false;
    }
  });
  emailjs.init({
    publicKey: publicKey
  });
});

const validateForm = () => {
  const validationErrors = {};
  if (!isRecaptchaVerified.value) {
    validationErrors['recaptcha'] = 'Por favor, preencha o recaptcha antes de continuar.';
  }
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
    const contactForm = document.getElementById('contact-form');
    emailjs.sendForm(serviceId, templateId, contactForm).then(
      () => {
        showSuccessMessage.value = true;
        form.value = { name: '', email: '', message: '' };
      },
      (error) => {
        console.log(error);
        serverErrorMessage.value = 'Ocorreu um erro ao enviar o formulário, tente novamente mais tarde';
      }
    );
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#70879E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span> contato@meena.com.br </span>
        </a>
      </div>
      <form class="w-[330px] lg:w-[600px] flex flex-col gap-3 h-full" @submit.prevent="handleSubmit" id="contact-form">
        <input v-model="form.name" type="text" name="from_name" id="from_name" class="input input-primary" placeholder="nome" required />
        <span v-if="errors.name" class="text-red-600">{{ errors.name }}</span>
        <input v-model="form.email" type="email" name="from_email" id="from_email" class="input input-primary" placeholder="email" required />
        <span v-if="errors.email" class="text-red-600">{{ errors.email }}</span>
        <textarea v-model="form.message" name="message" id="message" placeholder="mensagem" class="textarea textarea-primary" required></textarea>
        <span v-if="errors.message" class="text-red-600">{{ errors.message }}</span>
        <span class="text-green-600" v-if="showSuccessMessage">Obrigada! Responderei o mais rápido possível :]</span>
        <span class="text-red-600" v-if="serverErrorMessage"> {{ serverErrorMessage }}</span>
        <div class="w-full flex justify-center my-3">
          <div id="grecaptcha" :data-sitekey="recaptchaKey"></div>
        </div>
        <span v-if="errors.recaptcha" class="text-red-600">{{ errors.recaptcha }}</span>
        <button type="submit" class="btn btn-primary h-14 !text-white">enviar</button>
      </form>
    </section>
  </div>
</template>
