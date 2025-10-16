"use client"

import { use } from "react"
import Header from "@/components/header"
import PageEffects from "@/components/page-effects"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

type Props = { params: Promise<{ slug: string }> }

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params) // ✅ Desembrulha a Promise
  const project = projects.find((p: { slug: string }) => p.slug === slug)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (!project || !project.images || project.images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [project])

  if (!project) return notFound()

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b1020] to-[#071024] text-[#e6eef8]">
      <PageEffects />
      <Header />

      <main className="relative z-10 mx-auto max-w-[1150px] px-6 pt-24 pb-24">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-4 py-2 text-sm text-[#cdd6e3] transition hover:text-white hover:border-white/20"
          >
            ← Voltar para projetos
          </Link>
        </div>

        <section className="opacity-0 translate-y-8 blur-[4px] animate-[fadeUp_0.8s_ease_forwards]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] shadow-[0_6px_30px_rgba(2,6,23,0.35)] backdrop-blur-md">
            
            {/* Galeria */}
            {project.images && project.images.length > 0 && (
              <div className="relative overflow-hidden rounded-t-2xl border-b border-white/10 bg-white/[0.02]">
                <div className="relative h-[360px] md:h-[420px] w-full">
                  <Image
                    src={
                      project.images[currentImage].startsWith("/")
                        ? project.images[currentImage]
                        : `/${project.images[currentImage]}`
                    }
                    alt={`Imagem ${currentImage + 1} do projeto ${project.title}`}
                    fill
                    className="object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
                </div>
              </div>
            )}

            {/* Conteúdo */}
            <div className="grid gap-10 p-12 md:grid-cols-[1fr_320px] sm:p-10">
              <div>
                <h1 className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-2xl font-extrabold text-transparent md:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-[#cdd6e3]/90 leading-relaxed">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags
                      .filter(Boolean)
                      .map((t: string) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#cdd6e3]"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                )}
              </div>

              <aside className="flex flex-col gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-4 py-3 text-center font-semibold text-white/90 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  >
                    Acessar Projeto
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-4 py-3 text-center font-semibold text-white/90 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                  >
                    Ver Código no GitHub
                  </a>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  )
}
