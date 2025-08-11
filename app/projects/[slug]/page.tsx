import Header from "@/components/header"
import Footer from "@/components/footer"
import PageEffects from "@/components/page-effects"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

type Props = { params: { slug: string } }

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p: { slug: string }) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b1020] to-[#071024] text-[#e6eef8]">
      {/* Efeitos globais (reveals, tilt, ripple, etc.) */}
      <PageEffects />

      <Header />

      <main className="relative z-10 mx-auto max-w-[1100px] px-10 pt-24 pb-16">
        {/* Voltar */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-4 py-2 text-sm text-[#cdd6e3] transition-colors hover:text-white"
          >
            ← Voltar para projetos
          </Link>
        </div>

        {/* Hero do projeto */}
        <section className="section-fade opacity-0 translate-y-8 blur-[4px] transition-all duration-700">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] shadow-[0_6px_30px_rgba(2,6,23,0.35)] backdrop-blur-md">
            <div className="relative">
              <img
                src={project.images[0] || project.cover}
                alt={`Hero do projeto ${project.title}`}
                className="h-[360px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-[1fr_320px]">
              <div>
                <h1 className="m-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-3xl font-extrabold text-transparent">
                  {project.title}
                </h1>
                <p className="mt-3 max-w-2xl text-[#cdd6e3]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags
                    .filter((t: any) => !!t)
                    .map((t: Key) => (
                      <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#cdd6e3]">
                        {t}
                      </span>
                    ))}
                </div>
              </div>

              <aside className="space-y-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-4 py-3 text-center font-semibold text-white/90 transition-transform duration-200 hover:-translate-y-[1px]"
                  >
                    Acessar Live
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-4 py-3 text-center font-semibold text-white/90 transition-transform duration-200 hover:-translate-y-[1px]"
                  >
                    Repositório
                  </a>
                )}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-[#9aa4b2]">
                  <p className="m-0">
                    Este projeto segue o padrão visual do portfólio com foco em microinterações, performance e clareza.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="section-fade mt-8 opacity-0 translate-y-8 blur-[4px] transition-all duration-700">
          <h2 className="mb-4 text-[18px]">Galeria</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.images.slice(1).map((src: any, i: number) => (
              <div
                key={src + i}
                className="overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] shadow-[0_6px_30px_rgba(2,6,23,0.25)]"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Imagem ${i + 2} do projeto ${project.title}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Texto adicional */}
        <section className="section-fade mt-10 opacity-0 translate-y-8 blur-[4px] transition-all duration-700">
          <h2 className="mb-3 text-[18px]">Detalhes</h2>
          <p className="max-w-3xl text-[#cdd6e3]">
            Descreva aqui os objetivos, desafios técnicos, stack, decisões de design e resultados. Você pode adicionar
            benchmarks, métricas de performance e próximos passos.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
