export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  cover: string
  images: string[]
  repo?: string
  live?: string
}

export const projects: Project[] = [
  {
    slug: "fin-controll",
    title: "Fin Controll",
    description: "App de controle financeiro com charts dinâmicos, autenticação e planejamento financeiro.",
    tags: ["Spring Boot", "Next.js", "Charts"],
    cover: "/placeholder-tx4c0.png",
    images: ["/finance-overview-dashboard.png", "/placeholder-zmjg9.png", "/dark-analytics-charts.png"],
    repo: "#",
    live: "#",
  },
  {
    slug: "data-view",
    title: "Data View",
    description: "Visualizador de dados e relatórios com múltiplas fontes e dashboards interativos.",
    tags: ["React", "D3"],
    cover: "/dark-data-graphs.png",
    images: ["/d3-dark-charts.png", "/report-builder-interface.png", "/interactive-visuals.png"],
    repo: "#",
    live: "#",
  },
  {
    slug: "rpa-assistente",
    title: "RPA Assistente",
    description: "Automação de processos com geração de relatórios e integração com Excel.",
    tags: ["Python", "PyAutoGUI"],
    cover: "/rpa-automation-workflow-dark.png",
    images: ["/automation-flow.png", "/excel-integration.png", "/report-generation-concept.png"],
    repo: "#",
    live: "#",
  },
  {
    slug: "controle-de-ponto",
    title: "Controle de Ponto",
    description: "Sistema de ponto digital com reconhecimento facial e painel admin.",
    tags: ["TypeScript", "Postgres"],
    cover: "/placeholder.svg?height=460&width=760",
    images: [
      "/placeholder.svg?height=720&width=1200",
      "/placeholder.svg?height=720&width=1200",
      "/placeholder.svg?height=720&width=1200",
    ],
    repo: "#",
    live: "#",
  },
]
