"use client"

import { useEffect, useRef } from "react"

interface Tech {
  name: string
  color: string
  shadowColor?: string
  icon?: string
}

interface OrbitCategory {
  title: string
  techs: Tech[]
  radiusRatio: number
  speed: number
  tilt: number
}

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
}

export default function EnhancedTechStack() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const categories: OrbitCategory[] = [
    {
      title: "O que eu uso no trabalho",
      techs: [
        { name: "Next.js", color: "#FFFFFF", shadowColor: "rgba(255, 255, 255, 0.3)" },
        { name: "TypeScript", color: "#3178C6", shadowColor: "rgba(49, 120, 198, 0.4)" },
        { name: "Express", color: "#339933", shadowColor: "rgba(51, 153, 51, 0.4)" },
        { name: "MySQL", color: "#CC2927", shadowColor: "rgba(204, 41, 39, 0.4)" },
        { name: "Docker", color: "#2496ED", shadowColor: "rgba(36, 150, 237, 0.4)" },
        { name: "Tailwind", color: "#38BDF8", shadowColor: "rgba(56, 189, 248, 0.4)" },
        { name: "Figma", color: "#F24E1E", shadowColor: "rgba(242, 78, 30, 0.4)" },
        { name: "Postman", color: "#FF6C37", shadowColor: "rgba(255, 108, 55, 0.4)" },
        { name: "GitHub", color: "#181717", shadowColor: "rgba(24, 23, 23, 0.4)" },
        { name: "React Native", color: "#3FA9F5", shadowColor: "rgba(63, 169, 245, 0.4)"}

      ],
      radiusRatio: 0.35, // 35% of base radius
      speed: 0.0005,
      tilt: 0.6,
    },
    {
      title: "O que eu uso e estudo na faculdade",
      techs: [
        { name: "Python", color: "#3776AB", shadowColor: "rgba(55, 118, 171, 0.4)" },
        { name: "React", color: "#61DAFB", shadowColor: "rgba(97, 218, 251, 0.4)" },
        { name: "Flask", color: "#FFFFFF", shadowColor: "rgba(255, 255, 255, 0.3)" },
        { name: "Postgres", color: "#336791", shadowColor: "rgba(51, 103, 145, 0.4)" },
        { name: "Kotlin", color: "#A97BFF", shadowColor: "rgba(169, 123, 255, 0.4)" },
      ],
      radiusRatio: 0.55, // 55% of base radius
      speed: 0.0004,
      tilt: 0.5,
    },
    {
      title: "O que eu estudo para desenvolvimento pessoal",
      techs: [
        { name: "Java", color: "#ED8B00", shadowColor: "rgba(237, 139, 0, 0.4)" },
        { name: "Spring Boot", color: "#6DB33F", shadowColor: "rgba(109, 179, 63, 0.4)" },
        { name: "Nest.js", color: "#E0234E", shadowColor: "rgba(224, 35, 78, 0.4)" },
        { name: "MongoDB", color: "#47A248", shadowColor: "rgba(71, 162, 72, 0.4)" },
      ],
      radiusRatio: 0.75, // 75% of base radius
      speed: 0.0003,
      tilt: 0.4,
    },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const baseRadius = Math.min(rect.width, rect.height) * 0.38
      const scaleFactor = baseRadius / 280 // Reduzido de 300 para 280 para elementos maiores

      ctx.clearRect(0, 0, rect.width, rect.height)

      const pulseScale = Math.sin(elapsed * 0.002) * 0.15 + 1

      for (let i = 0; i < 3; i++) {
        const ringRadius = (25 + i * 8) * scaleFactor
        const ringAngle = elapsed * 0.001 * (i % 2 === 0 ? 1 : -1) + (i * Math.PI) / 3

        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(ringAngle)

        ctx.strokeStyle = `rgba(139, 92, 246, ${0.4 - i * 0.1})`
        ctx.lineWidth = 2 * scaleFactor
        ctx.beginPath()
        ctx.ellipse(0, 0, ringRadius, ringRadius * 0.3, 0, 0, Math.PI * 2)
        ctx.stroke()

        const electronAngle = elapsed * 0.003 * (i % 2 === 0 ? 1 : -1)
        const electronX = Math.cos(electronAngle) * ringRadius
        const electronY = Math.sin(electronAngle) * ringRadius * 0.3

        const electronGradient = ctx.createRadialGradient(
          electronX,
          electronY,
          0,
          electronX,
          electronY,
          4 * scaleFactor,
        )
        electronGradient.addColorStop(0, "rgba(6, 182, 212, 1)")
        electronGradient.addColorStop(1, "rgba(6, 182, 212, 0.3)")
        ctx.fillStyle = electronGradient
        ctx.beginPath()
        ctx.arc(electronX, electronY, 4 * scaleFactor, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }

      const energyGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60 * pulseScale * scaleFactor)
      energyGlow.addColorStop(0, "rgba(139, 92, 246, 0.3)")
      energyGlow.addColorStop(0.5, "rgba(6, 182, 212, 0.15)")
      energyGlow.addColorStop(1, "rgba(139, 92, 246, 0)")
      ctx.fillStyle = energyGlow
      ctx.beginPath()
      ctx.arc(centerX, centerY, 60 * pulseScale * scaleFactor, 0, Math.PI * 2)
      ctx.fill()

      const coreSize = 18 * pulseScale * scaleFactor

      const outerCore = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreSize)
      outerCore.addColorStop(0, "rgba(255, 255, 255, 1)")
      outerCore.addColorStop(0.3, "rgba(139, 92, 246, 0.9)")
      outerCore.addColorStop(0.7, "rgba(6, 182, 212, 0.8)")
      outerCore.addColorStop(1, "rgba(139, 92, 246, 0.5)")
      ctx.fillStyle = outerCore
      ctx.beginPath()
      ctx.arc(centerX, centerY, coreSize, 0, Math.PI * 2)
      ctx.fill()

      const innerCore = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreSize * 0.6)
      innerCore.addColorStop(0, "rgba(255, 255, 255, 1)")
      innerCore.addColorStop(0.5, "rgba(139, 92, 246, 1)")
      innerCore.addColorStop(1, "rgba(6, 182, 212, 0.9)")
      ctx.fillStyle = innerCore
      ctx.beginPath()
      ctx.arc(centerX, centerY, coreSize * 0.6, 0, Math.PI * 2)
      ctx.fill()

      const pulseOpacity = Math.sin(elapsed * 0.004) * 0.5 + 0.5
      ctx.strokeStyle = `rgba(255, 255, 255, ${pulseOpacity})`
      ctx.lineWidth = 2 * scaleFactor
      ctx.beginPath()
      ctx.arc(centerX, centerY, coreSize * 0.8, 0, Math.PI * 2)
      ctx.stroke()

      for (let i = 0; i < 6; i++) {
        const particleAngle = elapsed * 0.002 + (i * Math.PI * 2) / 6
        const particleDistance = (45 + Math.sin(elapsed * 0.003 + i) * 5) * scaleFactor
        const particleX = centerX + Math.cos(particleAngle) * particleDistance
        const particleY = centerY + Math.sin(particleAngle) * particleDistance

        const particleGradient = ctx.createRadialGradient(
          particleX,
          particleY,
          0,
          particleX,
          particleY,
          3 * scaleFactor,
        )
        particleGradient.addColorStop(0, "rgba(6, 182, 212, 0.8)")
        particleGradient.addColorStop(1, "rgba(6, 182, 212, 0)")
        ctx.fillStyle = particleGradient
        ctx.beginPath()
        ctx.arc(particleX, particleY, 3 * scaleFactor, 0, Math.PI * 2)
        ctx.fill()
      }

      categories.forEach((category) => {
        const radius = baseRadius * category.radiusRatio

        const ringGradient = ctx.createRadialGradient(
          centerX,
          centerY,
          radius - 2 * scaleFactor,
          centerX,
          centerY,
          radius + 2 * scaleFactor,
        )
        ringGradient.addColorStop(0, "rgba(139, 92, 246, 0.15)")
        ringGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.08)")
        ringGradient.addColorStop(1, "rgba(6, 182, 212, 0.15)")

        ctx.strokeStyle = ringGradient
        ctx.lineWidth = 2 * scaleFactor
        ctx.beginPath()

        ctx.ellipse(centerX, centerY, radius, radius * category.tilt, 0, 0, Math.PI * 2)
        ctx.stroke()

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(elapsed * 0.001 + radius) * 0.05})`
        ctx.lineWidth = 1 * scaleFactor
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, radius, radius * category.tilt, 0, 0, Math.PI * 2)
        ctx.stroke()
      })

      categories.forEach((category) => {
        const radius = baseRadius * category.radiusRatio

        category.techs.forEach((tech, index) => {
          const angle = elapsed * category.speed + (index * Math.PI * 2) / category.techs.length

          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius * category.tilt

          const z = Math.sin(angle) * 0.5 + 0.5
          const scale = 0.8 + z * 0.5
          const iconSize = 32 * scale * scaleFactor

          const shadowColor = tech.shadowColor || `${tech.color}40`
          const glowSize = iconSize * 1.75
          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize)
          glowGradient.addColorStop(0, shadowColor)
          glowGradient.addColorStop(0.5, shadowColor.replace(/[\d.]+\)$/, "0.2)"))
          glowGradient.addColorStop(1, shadowColor.replace(/[\d.]+\)$/, "0)"))
          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(x, y, glowSize, 0, Math.PI * 2)
          ctx.fill()

          const outerGlow = ctx.createRadialGradient(x, y, iconSize / 2, x, y, iconSize / 2 + 8 * scaleFactor)
          outerGlow.addColorStop(0, "rgba(255, 255, 255, 0.02)")
          outerGlow.addColorStop(1, "rgba(255, 255, 255, 0)")
          ctx.fillStyle = outerGlow
          ctx.beginPath()
          ctx.arc(x, y, iconSize / 2 + 8 * scaleFactor, 0, Math.PI * 2)
          ctx.fill()

          const bgGradient = ctx.createLinearGradient(x, y - iconSize / 2, x, y + iconSize / 2)
          bgGradient.addColorStop(0, "rgba(255, 255, 255, 0.02)")
          bgGradient.addColorStop(1, "rgba(255, 255, 255, 0.01)")
          ctx.fillStyle = bgGradient
          ctx.beginPath()
          ctx.arc(x, y, iconSize / 2, 0, Math.PI * 2)
          ctx.fill()

          const innerGlow = ctx.createRadialGradient(x, y, 0, x, y, iconSize / 2 - 4 * scaleFactor)
          innerGlow.addColorStop(0, tech.color)
          innerGlow.addColorStop(0.6, `${tech.color}80`)
          innerGlow.addColorStop(1, "rgba(255, 255, 255, 0.05)")
          ctx.fillStyle = innerGlow
          ctx.beginPath()
          ctx.arc(x, y, iconSize / 2 - 4 * scaleFactor, 0, Math.PI * 2)
          ctx.fill()

          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + z * 0.05})`
          ctx.lineWidth = 1.5 * scaleFactor
          ctx.beginPath()
          ctx.arc(x, y, iconSize / 2, 0, Math.PI * 2)
          ctx.stroke()

          ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 + z * 0.1})`
          ctx.lineWidth = 1 * scaleFactor
          ctx.beginPath()
          ctx.arc(x, y, iconSize / 2 - 2 * scaleFactor, 0, Math.PI * 2)
          ctx.stroke()

          ctx.save()
          ctx.globalAlpha = 0.7 + z * 0.3
          ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
          const fontSize = Math.max(10, 12 * scale * scaleFactor)
          ctx.font = `${fontSize}px sans-serif`
          ctx.textAlign = "center"
          ctx.fillText(tech.name, x + 1, y + iconSize + 14 * scaleFactor)

          ctx.fillStyle = "#9aa4b2"
          ctx.fillText(tech.name, x, y + iconSize + 13 * scaleFactor)
          ctx.restore()
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="tech-stack" className="py-12 sm:py-16 lg:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
        Tecnologias &{" "}
        <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">Ferramentas</span>
      </h2>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center sm:mb-8">
          <canvas
            ref={canvasRef}
            className="h-[700px] w-full max-w-[1000px] sm:h-[750px] md:h-[850px] lg:h-[900px]"
            style={{ maxHeight: "900px" }}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
              <h3 className="mb-3 text-sm font-semibold text-[#e6eef8] sm:text-base">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="chip inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-[#9aa4b2] transition-all hover:bg-white/10 sm:text-sm"
                  >
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tech.color }} />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
