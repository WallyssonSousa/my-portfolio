"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react"

type AcademicItem = {
  title: string
  institution: string
  location?: string
  period: string
  details?: string
  highlights?: string[]
}

type ProfessionalItem = {
  role: string
  company: string
  location?: string
  period: string
  details?: string
  stack?: string[]
}

const ACADEMIC: AcademicItem[] = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Impacta",
    location: "São Paulo, SP",
    period: "2024 — Em Andamento",
    details: "Ênfase em estruturas de dados, engenharia de software e experiência do usuário. Monitoria em Algoritmos.",
    highlights: ["Dados", "Engenharia de Software"],
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "Etec Jardim Paulistano",
    location: "São Paulo, SP",
    period: "2021 — 2023",
    details: "Microserviços, mensageria e observabilidade. Foco em escalabilidade e boas práticas de engenharia.",
    highlights: ["Desenho de arquitetura hexagonal", "Padrões de reatividade e caching"],
  },
]

const PROFESSIONAL: ProfessionalItem[] = [
  {
    role: "Estagiário em Desenvolvimento de Software",
    company: "Soft Clever",
    location: "Presencial",
    period: "2025 - Atual",
    details: "Construção de aplicações web performáticas com foco em DX e UX. Entrega contínua e monitoração ativa.",
    stack: ["Next.js", "TypeScript", "MySQL", "Express", "Docker"],
  },
]

export default function About() {
  return (
    <section id="about" className="py-28">
      <h2 className="section-title mb-5 text-[22px]">Sobre mim</h2>

      {/* Intro curta com reveal */}
      <p className="section-fade m-0 max-w-3xl opacity-0 translate-y-8 blur-[4px] transition-all duration-700 will-change-[transform,opacity,filter]">
        Sou desenvolvedor com experiência em aplicações web, APIs e automação. Gosto de unir engenharia sólida com
        design e microinterações, mantendo performance e clareza como prioridades.
      </p>

      {/* Tabs para tópicos */}
      <div className="section-fade mt-8 opacity-0 translate-y-8 blur-[4px] transition-all duration-700 will-change-[transform,opacity,filter]">
        <Tabs defaultValue="academica" className="w-full">
          <TabsList className="flex w-full justify-start gap-2 rounded-xl bg-white/5 p-1.5 backdrop-blur-sm">
            <TabsTrigger
              value="academica"
              className="text-white/80 hover:text-white data-[state=active]:text-gray-900 data-[state=active]:bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.8))] data-[state=active]:border data-[state=active]:border-white/10 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
            >
              <GraduationCap className="mr-2 h-4 w-4 opacity-80" />
              Acadêmica
            </TabsTrigger>

            <TabsTrigger
              value="profissional"
              className="text-white/80 hover:text-white data-[state=active]:text-gray-900 data-[state=active]:bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.8))] data-[state=active]:border data-[state=active]:border-white/10 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
            >
              <Briefcase className="mr-2 h-4 w-4 opacity-80" />
              Profissional
            </TabsTrigger>
          </TabsList>


          {/* Acadêmica */}
          <TabsContent value="academica" className="mt-6">
            <ul className="space-y-4">
              {ACADEMIC.map((item, i) => (
                <li
                  key={item.title + i}
                  className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.25)] backdrop-blur-md"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[15px] font-semibold">
                        <GraduationCap className="h-4 w-4 opacity-80" />
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-[#cdd6e3]">
                        {item.institution}
                        {item.location && (
                          <span className="ml-2 inline-flex items-center gap-1 text-xs text-[#9aa4b2]">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-[#cdd6e3]">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </div>
                  </div>

                  {(item.details || (item.highlights && item.highlights.length > 0)) && (
                    <Accordion type="single" collapsible className="mt-3">
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-sm">Ver detalhes</AccordionTrigger>
                        <AccordionContent>
                          {item.details && <p className="text-sm text-[#cdd6e3]">{item.details}</p>}
                          {item.highlights && item.highlights.length > 0 && (
                            <ul className="mt-2 list-disc pl-5 text-sm text-[#cdd6e3]">
                              {item.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* Profissional */}
          <TabsContent value="profissional" className="mt-6">
            <ul className="space-y-4">
              {PROFESSIONAL.map((item, i) => (
                <li
                  key={item.role + i}
                  className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.25)] backdrop-blur-md"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[15px] font-semibold">
                        <Briefcase className="h-4 w-4 opacity-80" />
                        {item.role}
                      </div>
                      <div className="mt-1 text-sm text-[#cdd6e3]">
                        {item.company}
                        {item.location && (
                          <span className="ml-2 inline-flex items-center gap-1 text-xs text-[#9aa4b2]">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        )}
                      </div>
                      {item.stack && item.stack.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.stack.map((s) => (
                            <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-[#cdd6e3]">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-[#cdd6e3]">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </div>
                  </div>

                  {item.details && (
                    <Accordion type="single" collapsible className="mt-3">
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-sm">Principais responsabilidades</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-[#cdd6e3]">{item.details}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
