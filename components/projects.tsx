import Link from "next/link"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <h2 className="section-title mb-5 text-[22px]">Projetos em destaque</h2>

      <div className="projects grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="project tilt section-fade group relative transform-gpu rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-0 shadow-[0_6px_30px_rgba(2,6,23,0.3)] backdrop-blur-md transition-all duration-300 opacity-0 translate-y-8 blur-[4px]"
            data-tilt
            aria-label={`Abrir projeto ${p.title}`}
          >
            {/* Capa */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={p.cover || "/placeholder.svg"}
                alt={`Capa do projeto ${p.title}`}
                className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Overlay highlight no hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Conteúdo */}
            <div className="p-4">
              <h3 className="mb-2 font-semibold">{p.title}</h3>
              <p className="m-0 text-sm text-[#9aa4b2]">{p.description}</p>
              <div className="tags mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag rounded-md bg-white/5 px-2 py-1 text-[12px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tornar o card clicável sem alterar layout */}
            <Link
              href={`/projects/${p.slug}`}
              className="absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/70 rounded-xl"
              aria-label={`Ver detalhes do projeto ${p.title}`}
            />

            {/* Borda/shine sutil no foco/hover */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 transition duration-300 group-hover:ring-white/10" />
          </article>
        ))}
      </div>
    </section>
  )
}
