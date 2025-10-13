"use client"

import type React from "react"

import Link from "next/link"
import { projects } from "@/data/projects"
import { useEffect, useRef } from "react"

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <h2 className="section-title mb-5 text-[22px]">Projetos em destaque</h2>

      <div className="projects grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <ProjectCard key={p.slug} project={p} index={index} />
        ))}
      </div>
    </section>
  )
}

interface Project {
  slug: string
  title: string
  description: string
  cover?: string
  tags: string[]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }

    card.addEventListener("mousemove", handleMouseMove)
    return () => card.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <article
      ref={cardRef}
      className="project-card section-fade group relative transform-gpu overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] shadow-[0_6px_30px_rgba(2,6,23,0.3)] backdrop-blur-md transition-all duration-500 opacity-0 translate-y-8 blur-[4px] hover:border-white/20"
      data-tilt
      aria-label={`Abrir projeto ${project.title}`}
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="absolute inset-[-2px] rounded-xl opacity-50 blur-xl"
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(139,92,246,0.12), transparent 40%)",
          }}
        />
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        <img
          src={project.cover || "/placeholder.svg"}
          alt={`Capa do projeto ${project.title}`}
          className="h-56 w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />

        <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        <div className="absolute inset-0 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full">
          <div className="h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
        </div>
      </div>

      <div className="relative p-5">
        <h3 className="mb-2 text-lg font-semibold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#b4bcc8] group-hover:to-[#b4bcc8] group-hover:bg-clip-text group-hover:text-transparent">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#9aa4b2] transition-colors duration-300 group-hover:text-[#b4bcc8]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={tag}
              className="tag inline-flex items-center rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#9aa4b2] backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-[#b4bcc8]"
              style={{
                transitionDelay: `${i * 30}ms`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[rgba(139,92,246,0.12)] to-[rgba(139,92,246,0.12)] transition-all duration-500 group-hover:w-full" />
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(139,92,246,0.12)]/70 rounded-xl"
        aria-label={`Ver detalhes do projeto ${project.title}`}
      />

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#8b5cf6]/20" />
    </article>
  )
}
