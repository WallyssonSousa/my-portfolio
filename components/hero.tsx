export default function Hero() {
  return (
    <section id="home" className="hero relative isolate grid min-h-screen items-center px-6 pt-32">
      <div className="hero-inner mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_420px]">
        {/* Left Column */}
        <div>
          <h1 className="headline m-0 text-[clamp(32px,6vw,56px)] font-bold leading-[1.1] tracking-tight">
            Eu crio interfaces e backends que{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">respiram</span>
            .
          </h1>

          <p className="sub mt-4 max-w-[580px] text-base leading-relaxed text-[#9aa4b2] sm:text-lg">
            Sou desenvolvedor full-stack — foco em experiências web com atenção a performance, design e escalabilidade.
            Aqui estão alguns projetos e efeitos que eu gosto.
          </p>

          {/* CTAs */}
          <div className="ctas mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              className="btn group relative overflow-hidden rounded-xl border-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] px-6 py-3.5 font-bold text-white transition-all"
              id="btn-work"
            >
              <span className="relative z-10">Ver Projetos</span>
            </button>
            <a
              className="btn ghost group rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center font-semibold text-[#9aa4b2] backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              href="#contact"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Right Column - Enhanced Profile Card */}
        <div>
          <div
            className="card-hero group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 backdrop-blur-xl transition-all hover:border-white/20"
            id="profile-card"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 via-transparent to-[#06b6d4]/5 opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] font-extrabold text-xl text-white">
                  WS
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Wallysson Sousa</div>
                  <div className="text-sm text-[#9aa4b2]">Desenvolvedor Full-Stack</div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm text-[#9aa4b2] backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="chip inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm text-[#9aa4b2] backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                  >
                    LinkedIn
                  </a>
                </div>
                <a
                  href="#"
                  className="group flex items-center gap-1 text-sm text-[#9aa4b2] transition-colors hover:text-white"
                >
                  Mais sobre mim
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
