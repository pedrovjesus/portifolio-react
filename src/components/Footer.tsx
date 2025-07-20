import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Footer = () => (
  <footer className="px-6 py-12 bg-zinc-900 text-center text-white">
    <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>

    <div className="flex justify-center gap-8 text-green-400 text-3xl mb-4">
      <a
        href="https://www.linkedin.com/in/pedro-jesus-386a6628a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-300 transition duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/pedrovjesus"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-300 transition duration-300"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="mailto:pedroferreira00jesus@gmail.com"
        className="hover:text-green-300 transition duration-300"
        aria-label="E-mail"
      >
        <FaEnvelope />
      </a>
    </div>

    <p className="text-zinc-500 text-sm">
      © {new Date().getFullYear()} Pedro Jesus. Todos os direitos reservados.
    </p>
  </footer>
);
