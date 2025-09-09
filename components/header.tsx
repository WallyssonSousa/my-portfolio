"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[linear-gradient(180deg,rgba(11,16,32,0.6),rgba(11,16,32,0.2))] backdrop-blur-md px-6 py-3">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between">
        <div className="brand flex items-center gap-3 font-semibold">
          <div className="logo flex h-11 w-11 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#8b5cf6,#06b6d4)] font-extrabold text-[#061025]">
            W
          </div>
          <div>
            <div className="text-[14px]">Wallysson Oliveira</div>
            <div className="text-[12px] text-[#9aa4b2]">Dev Full Stack</div>
          </div>
        </div>

        <nav className="hidden md:block">
          <ul id="menu" className="relative flex list-none gap-[18px] p-0">
            <li className="active opacity-90 text-[14px]">
              <a href="#home">Início</a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#projects">Projetos</a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#about">Sobre</a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden flex items-center justify-center p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 rounded-lg border border-white/10 bg-[rgba(11,16,32,0.95)] backdrop-blur-lg">
          <ul className="flex flex-col gap-4 p-4 text-center">
            <li className="active opacity-90 text-[14px]">
              <a href="#home" onClick={() => setIsOpen(false)}>
                Início
              </a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projetos
              </a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#about" onClick={() => setIsOpen(false)}>
                Sobre
              </a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
