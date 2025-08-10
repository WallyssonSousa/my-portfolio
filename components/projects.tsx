export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <h2 className="section-title mb-5 text-[22px]">Projetos em destaque</h2>
      <div className="projects grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          className="project tilt section-fade transform-gpu rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 shadow-[0_6px_30px_rgba(2,6,23,0.3)] backdrop-blur-md transition-all duration-300 opacity-0 translate-y-8 blur-[4px]"
          data-tilt
        >
          <h3 className="mb-2 font-semibold">Fin Controll</h3>
          <p className="m-0 text-sm text-[#9aa4b2]">
            App de controle financeiro com charts dinâmicos, autenticação e planejamento financeiro.
          </p>
          <div className="tags mt-3 flex flex-wrap gap-2">
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">Spring Boot</span>
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">Next.js</span>
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">Charts</span>
          </div>
        </article>

        <article
          className="project tilt section-fade transform-gpu rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 shadow-[0_6px_30px_rgba(2,6,23,0.3)] backdrop-blur-md transition-all duration-300 opacity-0 translate-y-8 blur-[4px]"
          data-tilt
        >
          <h3 className="mb-2 font-semibold">Data View</h3>
          <p className="m-0 text-sm text-[#9aa4b2]">
            Visualizador de dados e relatórios com múltiplas fontes e dashboards interativos.
          </p>
          <div className="tags mt-3 flex flex-wrap gap-2">
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">React</span>
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">D3</span>
          </div>
        </article>

        <article
          className="project tilt section-fade transform-gpu rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 shadow-[0_6px_30px_rgba(2,6,23,0.3)] backdrop-blur-md transition-all duration-300 opacity-0 translate-y-8 blur-[4px]"
          data-tilt
        >
          <h3 className="mb-2 font-semibold">RPA Assistente</h3>
          <p className="m-0 text-sm text-[#9aa4b2]">
            Automação de processos com geração de relatórios e integração com Excel.
          </p>
          <div className="tags mt-3 flex flex-wrap gap-2">
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">Python</span>
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">PyAutoGUI</span>
          </div>
        </article>

        <article
          className="project tilt section-fade transform-gpu rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 shadow-[0_6px_30px_rgba(2,6,23,0.3)] backdrop-blur-md transition-all duration-300 opacity-0 translate-y-8 blur-[4px]"
          data-tilt
        >
          <h3 className="mb-2 font-semibold">Controle de Ponto</h3>
          <p className="m-0 text-sm text-[#9aa4b2]">
            Sistema de ponto digital com reconhecimento facial e painel admin.
          </p>
          <div className="tags mt-3 flex flex-wrap gap-2">
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">TypeScript</span>
            <span className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">Postgres</span>
          </div>
        </article>
      </div>
    </section>
  )
}
