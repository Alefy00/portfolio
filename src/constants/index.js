
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    tailwindcss,
    typescript, 
    python,
    django,
    sqlite3,
    healing,
    ceub,
    atlas,
    bank,
    netflix,
    bootstrap,
    arrow

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: sqlite3,
        name: "Sqlite3",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Estagio Web",
        company_name: "movely",
        icon: arrow,
        iconBg: "#accbe1",
        date: "Janeiro 2023 - Dezembro 2023",
        points: [
            "Aprendei fundamentos essenciais de HTML, CSS e JavaScript durante o estágio",
            "Participei ativamente de projetos, ganhando experiência prática no ciclo de vida do desenvolvimento Landing Pages",

        ],
    },
    {
        title: "Gerente Operacional",
        company_name: "Grupo Forte",
        icon: arrow,
        iconBg: "#accbe1",
        date: "Setembro 2020 - Fevereito 2021",
        points: [
            "Direcionamento estratégico com o cliente, acompanhamento dos KPIs do programa de reposição e informações mercadológicas.",
            "Implementação de planos de ação, coleta negociação de prazos e entregas, tradução das estratégias",
            "E informações para a equipe de campo através dos coordenadores"

        ],
    },
    {
        title: "Estagio Web",
        company_name: "movely",
        icon: arrow,
        iconBg: "#accbe1",
        date: "Janeiro 2023 - Dezembro 2023",
        points: [
            "Aprendei fundamentos essenciais de HTML, CSS e JavaScript durante o estágio",
            "Participei ativamente de projetos, ganhando experiência prática no ciclo de vida do desenvolvimento Landing Pages",

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Alefy00',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alefy-xavier-developer',
    }
];

export const projects = [
    {
        iconUrl: healing,
        theme: 'btn-back-red',
        name: 'Healing',
        description: 'Este é um sistema de agendamento de consultas desenvolvido em Python utilizando o framework Django.',
        link: 'https://github.com/Alefy00/Healing',
    },
    {
        iconUrl: ceub,
        theme: 'btn-back-black',
        name: 'Ponto Professor',
        description: 'Projeto de conclusão do curso de Análise e desenvolvimento de sistema, software de marcação de ponto das aulas dos professores, dados via API da Universidade.',
        link: 'https://github.com/Alefy00/PontoProf',
    },
    {
        iconUrl: atlas,
        theme: 'btn-back-blue',
        name: 'Quizz Hematologia',
        description: 'Quiz voltado para a área da Biomedicina/Hematologia.',
        link: 'https://alefy00.github.io/Atlas2.0/',
    },
    {
        iconUrl: bank,
        theme: 'btn-back-green',
        name: 'Bank',
        description: 'Construção e evolução de um sistema bancário.',
        link: 'https://github.com/Alefy00/Banco',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-black',
        name: 'Clone Netflix',
        description: 'Desevolvimento do clone da Netflix.',
        link: 'https://github.com/Alefy00',
    },

];