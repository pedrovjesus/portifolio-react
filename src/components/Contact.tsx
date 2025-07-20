export const Contact = () => (
  <section id="contact" className="px-6 py-12">
    <h3 className="text-3xl font-semibold mb-6 text-center">Contato</h3>
    <form className="max-w-lg mx-auto space-y-4">
      <input
        type="text"
        placeholder="Seu nome"
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
      />
      <input
        type="email"
        placeholder="Seu email"
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
      />
      <textarea
        placeholder="Sua mensagem"
        rows={5}
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
      />
      <button
        type="submit"
        className="bg-fuchsia-500 px-4 py-2 rounded text-white hover:bg-fuchsia-600"
      >
        Enviar
      </button>
    </form>
  </section>
);
