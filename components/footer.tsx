import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24">
      {/* Linha de destaque superior com gradiente (toque Apple-like) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#8b5cf6]/60 via-white/10 to-[#06b6d4]/60" />

      <div className="mx-auto max-w-[1100px] px-10">
        {/* Bloco principal com glass + borda sutil */}
        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-6 py-6 shadow-[0_6px_30px_rgba(2,6,23,0.35)] backdrop-blur-md">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Marca */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#8b5cf6,#06b6d4)] font-extrabold text-[#061025]">
                W
              </div>
              <div>
                <div className="text-sm font-semibold">Wallysson Oliveira</div>
                <div className="text-xs text-[#9aa4b2]">Dev Full Stack</div>
              </div>
            </div>

            {/* Navegação secundária */}
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-start gap-4 text-sm text-[#cdd6e3] md:justify-center">
                <li>
                  <a className="transition-colors hover:text-white" href="#home">
                    Início
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href="#projects">
                    Projetos
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href="#about">
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-3 py-2 text-sm text-[#cdd6e3] transition-colors hover:text-white"
              >
                <Github className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-3 py-2 text-sm text-[#cdd6e3] transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Divider sutil */}
          <div className="my-5 h-px w-full bg-white/5" />

          {/* Linha inferior */}
          <div className="flex flex-col items-start justify-between gap-3 text-xs text-[#9aa4b2] md:flex-row md:items-center">
            <p>© {year} Wallysson Oliveira. Todos os direitos reservados.</p>
            <p className="text-[11px]">
              Feito com Next.js + Tailwind. Design com foco em performance e microinterações.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
