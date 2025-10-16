"use client";

import { useState, useRef } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import PageEffects from "@/components/page-effects";
import Projects from "@/components/projects";
import TechStack from "@/components/stacks";

export default function Page() {
  const [hasExited, setHasExited] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-[#0b1020] to-[#071024] text-[#e6eef8] overflow-x-hidden overflow-y-hidden"
    >
      <PageEffects />

      {!hasExited && (
        <>
          <Header onExit={() => setHasExited(true)} />

          <main className="relative z-10 mx-auto max-w-[1100px] px-10">
            <Hero />
            <TechStack />
            <Projects />
            <About />
            <Contact />
            <footer className="py-10 text-center text-[#9aa4b2]">
              © Wallysson Oliveira · Portfólio Pessoal.
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
