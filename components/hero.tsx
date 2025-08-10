export default function Hero() {
  return (
    <section id="home" className="hero relative isolate grid min-h-[100vh] items-center pt-20">
      <div className="hero-inner sticky top-20 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_420px]">
        <div>
          <h1 className="headline m-0 text-[clamp(28px,6vw,48px)] leading-[1.02]">
            Eu crio interfaces e backends que{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">respiram</span>
            .
          </h1>
          <p className="sub mt-3 text-[16px] text-[#9aa4b2]">
            Sou desenvolvedor full-stack — foco em experiências web com atenção a performance, design e escalabilidade.
            Aqui estão alguns projetos e efeitos que eu gosto.
          </p>
          <div className="ctas mt-6 flex gap-3">
            <button
              className="btn rounded-xl border-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] px-4 py-3 font-bold text-[#061025] shadow-[0_8px_32px_rgba(139,92,246,0.12)]"
              id="btn-work"
            >
              Ver Projetos
            </button>
            <a
              className="btn ghost rounded-xl border border-white/10 bg-transparent px-4 py-3 font-semibold text-[#9aa4b2]"
              href="#contact"
            >
              Entrar em contato
            </a>
          </div>

          <div className="card-hero mt-[26px] rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.6)] backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] text-[#9aa4b2]">Stacks favoritas</div>
                <div className="skills mt-3 flex flex-wrap gap-2.5">
                  <div className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-2.5 py-1.5 text-[13px] text-[#9aa4b2]">
                    React / Next.js
                  </div>
                  <div className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-2.5 py-1.5 text-[13px] text-[#9aa4b2]">
                    TypeScript
                  </div>
                  <div className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-2.5 py-1.5 text-[13px] text-[#9aa4b2]">
                    Spring Boot
                  </div>
                  <div className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-2.5 py-1.5 text-[13px] text-[#9aa4b2]">
                    Three.js
                  </div>
                </div>
              </div>
              <div className="text-right text-[12px] text-[#9aa4b2]">Disponível para freelance</div>
            </div>
          </div>
        </div>

        {/* Right column: small interactive card */}
        <div>
          <div
            className="card-hero rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.6)] backdrop-blur-md"
            id="profile-card"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#8b5cf6,#06b6d4)] font-extrabold">
                WO
              </div>
              <div>
                <div className="font-bold">Wallysson Oliveira</div>
                <div className="text-[13px] text-[#9aa4b2]">Desenvolvedor — design centrado em usuário</div>
              </div>
            </div>
            <div className="mt-3 text-[13px] text-[#9aa4b2]">Passe o mouse no cartão para ver o efeito 3D.</div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <a
                  href="#"
                  className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-2.5 py-1.5 text-[13px] text-[#9aa4b2]"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-2.5 py-1.5 text-[13px] text-[#9aa4b2]"
                >
                  LinkedIn
                </a>
              </div>
              <div className="text-[12px] text-[#9aa4b2]">Mais sobre mim →</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
