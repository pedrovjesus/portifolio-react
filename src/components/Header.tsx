export const Header = () => (
  <header className="flex justify-between items-center p-6 border-b border-zinc-700">
    <h1 className="text-2xl font-bold text-fuchsia-500">Pedro Ferreira</h1>
    <nav className="space-x-4">
      <a href="#about" className="hover:text-fuchsia-400">
        Sobre
      </a>
      <a href="#projects" className="hover:text-fuchsia-400">
        Projetos
      </a>
      <a href="#contact" className="hover:text-fuchsia-400">
        Contato
      </a>
    </nav>
  </header>
);
