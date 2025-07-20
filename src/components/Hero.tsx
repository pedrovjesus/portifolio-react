export const Hero = () => (
  <section className="flex flex-col-reverse md:flex-row items-center justify-between px-28 py-12 bg-zinc-900 gap-8">
    <div className="text-center md:text-left md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
        <span className="text-green-500">Pedro</span> Jesus
      </h1>

      <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-6">
        Fullstack Developer
      </h2>

      <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
        Desenvolvimento web é minha paixão. Crio soluções bem estruturadas, com
        foco em performance, experiência do usuário e qualidade de código.
      </p>
    </div>

    <div className="flex justify-center md:justify-end md:w-1/2">
      <div className="w-40 h-40 md:w-62 md:h-62 rounded-full overflow-hidden shadow-[0_0_70px_#22c55e]">
        <img
          src="/imagem.png"
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);
