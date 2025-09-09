export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative isolate grid min-h-[100vh] items-center px-5 pt-24 sm:pt-28"
    >
      <div className="hero-inner grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_420px]">
        {/* Coluna Esquerda */}
        <div>
          <h1 className="headline m-0 text-[clamp(26px,6vw,48px)] leading-[1.1]">
            Eu crio interfaces e backends que{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              respiram
            </span>
            .
          </h1>

          <p className="sub mt-3 max-w-[540px] text-[15px] text-[#9aa4b2] sm:text-[16px]">
            Sou desenvolvedor full-stack — foco em experiências web com atenção
            a performance, design e escalabilidade. Aqui estão alguns projetos e
            efeitos que eu gosto.
          </p>

          {/* CTAs */}
          <div className="ctas mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              className="btn rounded-xl border-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] px-5 py-3 font-bold text-[#061025] shadow-[0_8px_32px_rgba(139,92,246,0.12)]"
              id="btn-work"
            >
              Ver Projetos
            </button>
            <a
              className="btn ghost rounded-xl border border-white/10 bg-transparent px-5 py-3 font-semibold text-[#9aa4b2] text-center"
              href="#contact"
            >
              Entrar em contato
            </a>
          </div>

          {/* Card Hero */}
          <div className="card-hero mt-6 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.6)] backdrop-blur-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-[12px] text-[#9aa4b2]">
                  Stacks favoritas
                </div>
                <div className="skills mt-3 flex flex-wrap gap-2.5">
                  {["React / Next.js", "TypeScript", "Spring Boot", "Three.js"].map((stack) => (
                    <div
                      key={stack}
                      className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-2.5 py-1.5 text-[13px] text-[#9aa4b2]"
                    >
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-left sm:text-right text-[12px] text-[#9aa4b2]">
                Disponível para freelance
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div>
          <div
            className="card-hero rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.6)] backdrop-blur-md"
            id="profile-card"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#8b5cf6,#06b6d4)] font-extrabold">
                WO
              </div>
              <div>
                <div className="font-bold">Wallysson Oliveira</div>
                <div className="text-[13px] text-[#9aa4b2]">
                  Desenvolvedor — design centrado em usuário
                </div>
              </div>
            </div>

            <div className="mt-3 text-[13px] text-[#9aa4b2]">
              Passe o mouse no cartão para ver o efeito 3D.
            </div>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-2">
                <a
                  href="#"
                  className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-[#9aa4b2]"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-[#9aa4b2]"
                >
                  LinkedIn
                </a>
              </div>
              <div className="text-[12px] text-[#9aa4b2]">
                Mais sobre mim →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
