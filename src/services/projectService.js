const projects = {
  1: {
    title: '_wire-cotton',
    description: 'Projeto de estudo de um painel para gerenciar produtos no e-commerce Wire-Cotton.',
    src: '/images/projects/wire-cotton.webp',
    srcset: '/images/projects/wire-cotton-480w.webp 480w, /images/projects/wire-cotton-800w.webp 800w, /images/projects/wire-cotton-1512w.webp 1512w',
    link: 'https://wire-cotton.vercel.app',
    techs: ['Vue', 'HTML', 'CSS']
  },
  2: {
    title: '_wire-cotton-api',
    description: 'API para integrar dados ao painel do Wire-Cotton.',
    src: '/images/projects/wire-cotton-api.webp',
    srcset: '/images/projects/wire-cotton-api-480w.webp 480w, /images/projects/wire-cotton-api-800w.webp 800w, /images/projects/wire-cotton-api-1512w.webp 1512w',
    link: 'https://github.com/MeenaMisae/wire-cotton-api',
    techs: ['Laravel', 'MySQL']
  },
  3: {
    title: '_meenu',
    description: 'Gestão de produtos alimentícios com estoque e receitas.',
    src: '/images/projects/meenu.webp',
    srcset: '/images/projects/meenu-480w.webp 480w, /images/projects/meenu-800w.webp 800w, /images/projects/meenu-1512w.webp 1512w',
    link: 'https://github.com/MeenaMisae/meenu',
    techs: ['Laravel', 'Livewire', 'HTML', 'CSS']
  },
  4: {
    title: '_nps',
    description: 'Sistema de avaliação utilizando a metodologia NPS, desenvolvido em um contexto corporativo.',
    src: '/images/projects/nps.webp',
    srcset: '/images/projects/nps-480w.webp 480w, /images/projects/nps-800w.webp 800w, /images/projects/nps-1512w.webp 1512w'
  }
};

export const getProjects = () => {
  return projects;
};
