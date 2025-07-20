import {
  SiTypescript,
  SiReact,
  SiNestjs,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiNodedotjs,
  SiMui,
} from "react-icons/si";

const skills = [
  {
    name: "TypeScript",
    description:
      "Linguagem principal nos meus projetos. Utilizo com React, NestJS e Express.",
    icon: "typescript",
  },
  {
    name: "Node.js",
    description:
      "Base do meu trabalho com backend. Experiência sólida com NestJS, Express, serviços REST e integração com bancos de dados.",
    icon: "node",
  },
  {
    name: "React",
    description:
      "Biblioteca que uso para criar interfaces modernas, performáticas e reutilizáveis, geralmente com TypeScript e Tailwind.",
    icon: "react",
  },
  {
    name: "NestJS",
    description:
      "Framework backend robusto que uso para construir APIs escaláveis, devido a sua arquitetura modular e simplicidade para manter boas práticas.",
    icon: "nestjs",
  },
  {
    name: "Material UI (MUI)",
    description:
      "Biblioteca de componentes que utilizo para criar interfaces acessíveis e consistentes com foco em produtividade.",
    icon: "mui",
  },
  {
    name: "PHP",
    description:
      "Normalmente mais aceito em hospedagens, e primeira linguagem que prestei serviço.",
    icon: "php",
  },
  {
    name: "MySQL",
    description:
      "Trabalho com modelagem e normalização, normalmente uso com ORMs como TypeORM.",
    icon: "mysql",
  },
  {
    name: "HTML",
    description:
      "Conhecimento sólido de marcação semântica, acessibilidade e estruturação de conteúdo web.",
    icon: "html",
  },
  {
    name: "CSS",
    description:
      "Estilização personalizada e criação de layouts responsivos, com ou sem frameworks utilitários.",
    icon: "css",
  },
  {
    name: "Tailwind CSS",
    description:
      "Framework preferido para estilização rápida, responsiva e consistente, principalmente com React e Next.js.",
    icon: "tailwind",
  },
  {
    name: "Git",
    description:
      "Controle de versão com GitHub, branches e integração contínua. Fundamental em todos os meus fluxos de trabalho.",
    icon: "git",
  },
  {
    name: "Docker",
    description:
      "Atualmente estudando para criar ambientes isolados, padronizar desenvolvimento e facilitar deploys.",
    icon: "docker",
  },
];

const iconMap = {
  typescript: <SiTypescript className="w-6 h-6 text-blue-600" />,
  node: <SiNodedotjs className="w-6 h-6 text-green-600" />,
  react: <SiReact className="w-6 h-6 text-cyan-400" />,
  nestjs: <SiNestjs className="w-6 h-6 text-red-600" />,
  mui: <SiMui className="w-6 h-6 text-indigo-400" />,
  php: <SiPhp className="w-6 h-6 text-purple-700" />,
  mysql: <SiMysql className="w-6 h-6 text-blue-500" />,
  html: <SiHtml5 className="w-6 h-6 text-orange-500" />,
  css: <SiCss3 className="w-6 h-6 text-blue-400" />,
  tailwind: <SiTailwindcss className="w-6 h-6 text-teal-400" />,
  git: <SiGit className="w-6 h-6 text-orange-600" />,
  docker: <SiDocker className="w-6 h-6 text-sky-600" />,
};

export const Skills = () => (
  <section id="skills" className="px-6 py-12 bg-zinc-800 text-white">
    <h3 className="text-3xl font-semibold mb-8 text-center">Habilidades</h3>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {skills.map(({ name, description, icon }, i) => (
        <div
          key={i}
          className="border border-zinc-700 p-6 rounded-lg hover:border-green-500 transition shadow-lg hover:shadow-green-300/40 flex items-start space-x-4"
        >
          <div>{iconMap[icon as keyof typeof iconMap]}</div>

          <div>
            <h4 className="text-xl font-bold mb-1">{name}</h4>
            <p className="text-zinc-400 text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
