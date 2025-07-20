const projects = [
  { title: "Sistema de Orçamentos", tech: "NestJS + React + MySQL", link: "#" },
  { title: "Dashboard Administrativo", tech: "Next.js + Prisma", link: "#" },
];

export const Projects = () => (
  <section id="projects" className="px-6 py-12">
    <h3 className="text-3xl font-semibold mb-6 text-center">Projetos</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <div
          key={i}
          className="border border-zinc-700 p-4 rounded-lg hover:border-fuchsia-500 transition"
        >
          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
          <p className="text-zinc-400">{project.tech}</p>
          <a
            href={project.link}
            className="text-fuchsia-400 hover:underline mt-2 inline-block"
          >
            Ver Projeto
          </a>
        </div>
      ))}
    </div>
  </section>
);
