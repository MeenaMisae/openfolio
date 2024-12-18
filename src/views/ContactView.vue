<template>
    <div class="w-full flex items-center py-6 lg:py-0">
        <div class="flex flex-col w-full items-center justify-center gap-3">
            <h1 class="text-3xl">Me contate!</h1>
            <div class="max-w-[600px] text-center leading-7">
                <p>
                    Quer conversar sobre projetos, colaborações ou tirar dúvidas?
                </p>
                <p>Entre em contato comigo.</p>
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
            <form class="w-[330px] lg:w-[600px] flex flex-col gap-3 h-full" name="contact" method="POST" netlify>
                <input type="text" name="name" id="name" class="input input-primary" placeholder="nome" required>
                <input type="email" name="email" id="email" class="input input-primary" placeholder="email" required>
                <textarea name="message" id="message" placeholder="mensagem" class="textarea textarea-primary"
                    required></textarea>
                <button type="submit" class="btn btn-primary h-14">enviar</button>
            </form>
        </div>
    </div>
</template>