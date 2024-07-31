import {
  BookOpen,
  Folder,
  Github,
  Home,
  Instagram,
  Laptop,
  Linkedin,
  MessageSquareIcon,
  Newspaper,
} from "lucide-react";

const sizeIcon = 15;
// routes
export const routes = [
  {
    title: null,
    links: [
      {
        name: "Início",
        path: "/",
        icon: <Home size={sizeIcon} />,
        disabled: false,
        target: "_self",
      },
    ],
  },
  {
    title: "Eu",
    links: [
      {
        name: "Sobre mim",
        path: "/me",
        icon: <BookOpen size={sizeIcon} />,
        disabled: false,
        target: "_self",
      },
      {
        name: "Projectos",
        path: "/projects",
        icon: <Folder size={sizeIcon} />,
        disabled: false,
        target: "_self",
      },
      {
        name: "Tecnologias e Ferramentas",
        path: "/uses",
        icon: <Laptop size={sizeIcon} />,
        disabled: false,
        target: "_self",
      },
    ],
  },
  {
    title: "Diário",
    links: [
      {
        name: "Livro de visitas",
        path: "/guestbook",
        icon: <MessageSquareIcon size={sizeIcon} />,
        disabled: false,
        target: "_self",
      },
      {
        name: "Blog",
        path: "/blog",
        icon: <Newspaper size={sizeIcon} />,
        disabled: true,
        target: "_self",
      },
    ],
  },
  {
    title: "Redes sociais",
    links: [
      {
        name: "Github",
        path: "https://github.com/denycelestino",
        icon: <Github size={sizeIcon} />,
        disabled: false,
        target: "_blank",
      },
      {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/delfim-celestino-amisse-pastola-49320a2b0/",
        icon: <Linkedin size={sizeIcon} />,
        disabled: false,
        target: "_blank",
      },
      {
        name: "Instagram",
        path: "https://www.instagram.com/deny_celestino/",
        icon: <Instagram size={sizeIcon} />,
        disabled: false,
        target: "_blank",
      },
    ],
  },
];

// experiences
export const experiences = [
  {
    logo: "/logo3.png",
    name: "Banco Futuro MCB",
    position: "Analista de TI (Desenvolvedor)",
    time: "2024 - actualmente ",
  },
  {
    logo: "/growskills.jpeg",
    name: "Growskills",
    position: "Desenvolvedor Web",
    time: "2023 • 10 meses",
  },
  {
    logo: "/mozalinklogo.svg",
    name: "Mozalink",
    position: "Desenvolvedor Web",
    time: "2023 • Projecto pessoal",
  },
  {
    logo: "/rocketseat.jpeg",
    name: "Rocketseat",
    position: "Estudante em Desenvolvimento Full-stack",
    time: "2021 - 2022 • 1 ano",
  },
];

//projects
export const projects = [
  {
    title: "Mozalink",
    description: `Mozalink é uma plataforma dedicada a conectar talentos a oportunidades. Com uma abordagem inovadora, a plataforma visa criar um ambiente onde os indivíduos possam descobrir e serem descobertos, facilitando a conexão entre talentos promissores e oportunidades empolgantes. Seja você um profissional em busca de novos horizontes ou uma empresa em busca de talento, Findizi está aqui para simplificar e potencializar o processo de descoberta.`,
    visit: "https://www.mozalink.com",
    github: null,
    image: "/mozalink.jpeg",
  },
  {
    title: "BARN (ERP)",
    description: `Barn é a solução inovadora para gerenciar estoque e marcar serviços. Simplifique o controle de inventário e mantenha suas operações claras e precisas em tempo real.

    Nossa plataforma também permite que empresas e indivíduos criem e gerenciem ofertas de serviços, facilitando reservas.
    
    Melhore a eficiência do seu estoque e expanda suas oportunidades de negócios com Barn. Comece hoje e transforme sua gestão com Barn!`,
    visit: "https://barni.vercel.app/login",
    github: null,
    image: "/barn.jpg",
    private: false,
  },
  {
    title: "Trafegotop (Growskills)",
    description: `TrafegoTop é uma inovadora plataforma pertencente a Growskills e desenvolvida sob a custódia da empresa Growskills. Projetada com o objetivo de auxiliar as pessoas nos estudos para exames de condução, oferece uma abordagem eficiente e acessível para a preparação, tornando o processo de aprendizado mais intuitivo e eficaz.`,
    visit: "https://trafegotop.app",
    github: null,
    image: "/trafegotop.jpg",
    private: false,
  },
  {
    title: "Tabby",
    description: `Tabby simplifica o gerenciamento de mesas em restaurantes, permitindo que os funcionários vejam rapidamente as mesas ocupadas, disponíveis e em processo de limpeza. Com uma interface intuitiva, os usuários podem atualizar o status das mesas, fazer reservas e otimizar a distribuição dos clientes, melhorando a eficiência do serviço e a experiência dos clientes.`,
    visit: "https://tabby-ten.vercel.app",
    github: null,
    image: "/tabby.jpg",
    private: false,
  },
  {
    title: "Growskills portfolio (NextJs version)",
    description: `Este projeto é um clone do website da empresa GrowSkills, desenvolvido com Next.js, Sass e GSAP. Utilizando essas tecnologias, recriei a estrutura e o design do site original de forma precisa. O Next.js garantiu uma experiência de usuário responsiva e eficiente, o Sass facilitou a organização do CSS, e o GSAP adicionou animações e interatividade, tornando a navegação mais atraente. Este projeto destaca minhas habilidades em frontend e minha capacidade de criar websites funcionais e visualmente atraentes.`,
    visit: "https://growskills-portfolio.vercel.app",
    github: null,
    image: "/growskills-portifolio.jpg",
    private: false,
  },
  {
    title: "Ask Moza",
    description: `O Ask Moza representa a convergência de inovação e tecnologia, desenvolvido com Next.js, Vercel AI SDK e a poderosa API da OpenAI. Este assistente de inteligência artificial foi projetado para oferecer respostas precisas e detalhadas a todas as perguntas relacionadas ao banco Absa. Sua capacidade de compreensão avançada e agilidade na entrega de informações tornam-no uma ferramenta valiosa para explorar e compreender aspectos diversos do banco.`,
    visit: "https://askmozabanco.vercel.app",
    github: null,
    image: "/absamockup.jpg",
    private: false,
  },
  {
    title: "Copy News",
    description: `Copynews é uma plataforma que faz o consumo da Api do Tabnews para buscar informacoes novas , relevantes e antigas da mesma.`,
    visit: "https://copynews.vercel.app",
    github: "https://github.com/denycelestino/copynews",
    image: "/copynews.jpg",
    private: false,
  },

  {
    title: "AlliancePot:",
    description: `AlliancePot é uma plataforma dedicada a auxiliar as pessoas na economia de dinheiro e no estabelecimento de metas financeiras alcançáveis. Proporcionando orientação e suporte, a plataforma oferece uma experiência personalizada para que os usuários possam poupar de forma eficaz e atingir seus objetivos financeiros com sucesso.`,
    visit: "https://alliancepot.vercel.app/",
    github: null,
    image: "/alliancepot.jpg",
    private: false,
  },
  {
    title: "Eulevo",
    description: `EuLevo é uma inovadora plataforma que conecta viajantes a pessoas que desejam enviar suas encomendas para outras cidades. Simplificando o processo de transporte de mercadorias, a plataforma oferece uma solução eficiente e confiável para facilitar o envio de encomendas, proporcionando praticidade tanto para quem viaja quanto para quem busca uma maneira conveniente de enviar seus itens.`,
    visit: "https://eulevo.vercel.app/",
    github: null,
    image: "/eulevo.jpg",
    private: false,
  },
  {
    title: "Projecto confidencial",
    description: `Um projeto privado inovador e estratégico, cujos detalhes não podem ser divulgados. Desenvolvido com cuidado e expertise, este projeto abraça a confidencialidade para preservar sua singularidade e impacto no cenário atual. Sua natureza exclusiva reflete o compromisso com a inovação e a busca por soluções diferenciadas.`,
    visit: null,
    github: null,
    image: "/pambs.jpg",
    private: true,
  },
  {
    title: "Projecto confidencial",
    description: `Um projeto privado inovador e estratégico, cujos detalhes não podem ser divulgados. Desenvolvido com cuidado e expertise, este projeto abraça a confidencialidade para preservar sua singularidade e impacto no cenário atual. Sua natureza exclusiva reflete o compromisso com a inovação e a busca por soluções diferenciadas.`,
    visit: null,
    github: null,
    image: "/futuro.jpg",
    private: true,
  },


];

export const uses = [
  {
    title: "Front-end",
    stacks: [
      {
        name: "CSS",
        icon: "/css.svg",
        invert: false,
      },
      {
        name: "Framer Motion",
        icon: "/framer-motion.svg",
        invert: false,
      },
      {
        name: "HTML",
        icon: "/html.svg",
        invert: false,
      },

      {
        name: "Javascript",
        icon: "/javascript.svg",
        invert: false,
      },
      {
        name: "NextJS",
        icon: "/nextjs.svg",
        invert: true,
      },
      {
        name: "React",
        icon: "/react.svg",
        invert: false,
      },
      {
        name: "Radix",
        icon: "/radix.svg",
        invert: true,
      },
      {
        name: "React Router",
        icon: "/react-router.svg",
        invert: false,
      },
      {
        name: "Redux",
        icon: "/redux.svg",
        invert: false,
      },
      {
        name: "Sass",
        icon: "/sass.svg",
        invert: false,
      },
      {
        name: "Tailwindcss",
        icon: "/tailwindcss.svg",
        invert: false,
      },
      {
        name: "Typescript",
        icon: "/typescript.svg",
        invert: false,
      },
      {
        name: "Socket.IO",
        icon: "/socketio.svg",
        invert: true,
      },
      {
        name: "Vite",
        icon: "/vite.svg",
        invert: false,
      },
      {
        name: "Zustand",
        icon: "/zustand.svg",
        invert: false,
      },
    ],
  },
  {
    title: "Testes",
    stacks: [
      {
        name: "Cypress",
        icon: "/cypress.svg",
        invert: false,
      },
      {
        name: "Playwright",
        icon: "/playwright.svg",
        invert: false,
      },
    ],
  },
  {
    title: "Design",
    stacks: [
      {
        name: "Adobe XD",
        icon: "/xd.svg",
        invert: false,
      },
      {
        name: "Figma",
        icon: "/figma.svg",
        invert: false,
      },
    ],
  },
  {
    title: "Documentação",
    stacks: [
      {
        name: "Storybook",
        icon: "/storybook.svg",
        invert: false,
      },
    ],
  },
  {
    title: "Observabilidade e analytics",
    stacks: [
      {
        name: "Google Analytics",
        icon: "/google-analytics.svg",
        invert: false,
      },
      {
        name: "Vercel Analytics",
        icon: "/vercel-analytics.svg",
        invert: true,
      },
    ],
  },
  {
    title: "Back-end",
    stacks: [
      {
        name: "Express",
        icon: "/express.svg",
        invert: false,
      },
      {
        name: "javascript",
        icon: "/javascript.svg",
        invert: false,
      },

      {
        name: "Node",
        icon: "/nodejs.svg",
        invert: false,
      },
      {
        name: "Prisma",
        icon: "/prisma.svg",
        invert: true,
      },
      {
        name: "Socket.IO",
        icon: "/socketio.svg",
        invert: true,
      },
      {
        name: "Typescript",
        icon: "/typescript.svg",
        invert: false,
      },
    ],
  },
  {
    title: "Banco de dados",
    stacks: [
      {
        name: "Docker",
        icon: "/docker.svg",
        invert: false,
      },
      {
        name: "Firebase",
        icon: "/firebase.svg",
        invert: false,
      },
      {
        name: "Vercel",
        icon: "/vercel.svg",
        invert: true,
      },
    ],
  },
  {
    title: "Controle de versões",
    stacks: [
      {
        name: "Git",
        icon: "/git.svg",
        invert: false,
      },
      {
        name: "Github",
        icon: "/github.svg",
        invert: true,
      },
    ],
  },
  {
    title: "Extensões, plugins e temas",
    stacks: [
      {
        name: "ESLint",
        icon: "/eslint.svg",
        invert: false,
      },
      {
        name: "Prettier",
        icon: "/prettier.svg",
        invert: false,
      },
      {
        name: "Live server",
        icon: "/live-server.svg",
        invert: false,
      },
      {
        name: "Material Icon Theme",
        icon: "/material-icon-theme.svg",
        invert: false,
      },
    ],
  },
  {
    title: "Aplicativos",
    stacks: [
      {
        name: "Discord",
        icon: "/discord.svg",
        invert: false,
      },
      {
        name: "Visual Studio",
        icon: "/vscode.svg",
        invert: false,
      },

      {
        name: "Firefox",
        icon: "/firefox.svg",
        invert: false,
      },
      {
        name: "Spotify",
        icon: "/spotify.svg",
        invert: false,
      },
    ],
  },
];
