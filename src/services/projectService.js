const projects = {
    '1': { 'title': '_wire-cotton', 'description': 'Projeto de estudo de um painel para gerenciar produtos no e-commerce Wire-Cotton.', 'src': '/images/projects/wire-cotton.webp', 'link': 'https://wire-cotton.vercel.app', 'techs': ['Vue', 'HTML', 'CSS'] },
    '2': { 'title': '_wire-cotton-api', 'description': 'API para integrar dados ao painel do Wire-Cotton.', 'src': '/images/projects/wire-cotton-api.webp', 'link': 'https://github.com/MeenaMisae/wire-cotton-api', 'techs': ['Laravel', 'MySQL'] },
    '3': { 'title': '_meenu', 'description': 'Gestão de produtos alimentícios com estoque e receitas.', 'src': '/images/projects/meenu.webp', 'link': 'https://github.com/MeenaMisae/meenu', 'techs': ['Laravel', 'Livewire', 'HTML', 'CSS'] },
    '4': { 'title': '_nps', 'description': 'Sistema de avaliação utilizando a metodologia NPS, desenvolvido em um contexto corporativo.', 'src': '/images/projects/nps.webp' }
};
export const getProjects = () => {
    return projects;
};