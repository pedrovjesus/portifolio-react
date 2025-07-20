import {
  SiTypescript,
  SiNestjs,
  SiReact,
  SiPhp,
  SiMysql,
  SiEjs,
} from "react-icons/si";

const projects = [
  {
    title: "CRUDius",
    description:
      "Gerador de API REST feito com typescript puro, com foco em trazer agilidade na criação de templates de frontend, ainda em beta porém funcional.",
    techs: ["typescript", "ejs"],
    link: "https://github.com/pedrovjesus/CRUDius",
  },
  {
    title: "MVP TMS",
    description:
      "Sistema para gestão de veículos de transportadora, um template que fiz para negociação que estou em andamento de um sistema completo.",
    techs: ["nestjs", "typescript"],
    link: "https://github.com/pedrovjesus/mvp-tms",
  },
  {
    title: "Survey After Sales",
    description:
      "Esse bot de pesquisa de satisfação feito com PHP puro, foi feito para empresa qbSoft e me permitiu disponibilizar parte do código",
    techs: ["php"],
    link: "https://github.com/pedrovjesus/survey-after-sales",
  },
];

const iconMap = {
  typescript: <SiTypescript className="w-5 h-5 text-blue-600" />,
  nestjs: <SiNestjs className="w-5 h-5 text-red-600" />,
  react: <SiReact className="w-5 h-5 text-cyan-400" />,
  php: <SiPhp className="w-5 h-5 text-purple-700" />,
  mysql: <SiMysql className="w-5 h-5 text-blue-500" />,
  ejs: <SiEjs className="w-5 h-5 text-red-500" />,
};

export const Projects = () => (
  <section id="projects" className="px-6 py-12 bg-zinc-900">
    <h3 className="text-3xl font-semibold mb-8 text-center text-white">
      Projetos
    </h3>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projects.map(({ title, description, techs, link }, i) => (
        <a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-zinc-700 p-6 rounded-lg hover:border-fuchsia-500 transition shadow-lg hover:shadow-fuchsia-600/40 flex flex-col justify-between"
        >
          <div>
            <h4 className="text-2xl font-bold mb-2 text-white">{title}</h4>
            <p className="text-zinc-400 mb-4">{description}</p>
          </div>
          <div className="flex space-x-4">
            {techs.map((tech) => (
              <div key={tech} className="flex items-center space-x-2">
                {iconMap[tech]}
                <span className="text-zinc-300 text-sm capitalize">{tech}</span>
              </div>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
);
