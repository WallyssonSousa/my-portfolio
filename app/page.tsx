"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import PageEffects from "@/components/page-effects"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null)

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
