"use client"

import { GraduationCap, Briefcase, Wrench, ExternalLink, Calendar, MapPin } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

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

type PersonalProject = {
  name: string
  slug?: string
  description: string
  stack?: string[]
  links?: { label: string; href: string }[]
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

const PERSONAL: PersonalProject[] = [
  {
    name: "Fin Controll",
    slug: "fin-controll",
    description: "App de controle financeiro com charts dinâmicos, autenticação e planejamento financeiro.",
    stack: ["Next.js", "Charts", "Spring Boot"],
    links: [
      { label: "Detalhes", href: "/projects/fin-controll" },
      { label: "Repo", href: "#" },
    ],
  },
  {
    name: "Data View",
    slug: "data-view",
    description: "Visualizador de dados e relatórios com múltiplas fontes e dashboards interativos.",
    stack: ["React", "D3"],
    links: [
      { label: "Detalhes", href: "/projects/data-view" },
      { label: "Live", href: "#" },
    ],
  },
  {
    name: "RPA Assistente",
    slug: "rpa-assistente",
    description: "Automação de processos com geração de relatórios e integração com Excel.",
    stack: ["Python", "PyAutoGUI"],
    links: [{ label: "Detalhes", href: "/projects/rpa-assistente" }],
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

            <TabsTrigger
              value="projetos"
              className="text-white/80 hover:text-white data-[state=active]:text-gray-900 data-[state=active]:bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.8))] data-[state=active]:border data-[state=active]:border-white/10 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
            >
              <Wrench className="mr-2 h-4 w-4 opacity-80" />
              Projetos pessoais
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

          {/* Projetos pessoais */}
          <TabsContent value="projetos" className="mt-6">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PERSONAL.map((proj) => (
                <li
                  key={proj.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.25)] backdrop-blur-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="m-0 text-[15px] font-semibold">{proj.name}</h3>
                      <p className="mt-1 text-sm text-[#9aa4b2]">{proj.description}</p>
                    </div>
                  </div>

                  {proj.stack && proj.stack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {proj.stack.map((s) => (
                        <span key={s} className="rounded-md bg-white/5 px-2 py-1 text-[12px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {proj.links && proj.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proj.links.map((l) => (
                        <a
                          key={l.href + l.label}
                          href={l.href}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-3 py-2 text-xs text-[#cdd6e3] transition-colors hover:text-white"
                        >
                          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Shine sutil no hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 transition duration-300 group-hover:ring-white/10" />
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
