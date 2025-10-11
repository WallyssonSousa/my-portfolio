"use client"

import About from "@/components/about"
import Contact from "@/components/contact"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PageEffects from "@/components/page-effects"
import Projects from "@/components/projects"
import { useEffect, useRef } from "react"

import TechStack from "@/components/stacks"

export default function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const categories = [
    {
      title: "O que eu uso no trabalho",
      techs: [
        { name: "React", color: "#61DAFB" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Next.js", color: "#FFFFFF" },
        { name: "Node.js", color: "#339933" },
      ],
    },
    {
      title: "Estudos e faculdade",
      techs: [
        { name: "Java", color: "#ED8B00" },
        { name: "Spring Boot", color: "#6DB33F" },
        { name: "Python", color: "#3776AB" },
        { name: "SQL", color: "#CC2927" },
      ],
    },
    {
      title: "Desenvolvimento pessoal",
      techs: [
        { name: "Three.js", color: "#049EF4" },
        { name: "Rust", color: "#CE422B" },
        { name: "Go", color: "#00ADD8" },
        { name: "Docker", color: "#2496ED" },
      ],
    },
  ]

  useEffect(() => {
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-[#0b1020] to-[#071024] text-[#e6eef8]"
    >
      <PageEffects />

      <Header />

      <main className="relative z-10 mx-auto max-w-[1100px] px-10">
        <Hero />
        <TechStack categories={categories} />
        <Projects />
        <About />
        <Contact />
        <footer className="py-10 text-center text-[#9aa4b2]">
          © Wallysson Oliveira · Portfólio Pessoal.
        </footer>
      </main>
    </div>
  )
}
