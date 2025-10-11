"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import type { LucideIcon } from "lucide-react"

interface Tech {
    name: string
    icon?: LucideIcon | React.ComponentType<{ className?: string }>
    color: string
}

interface TechCategory {
    title: string
    techs: Tech[]
}

interface TechStackProps {
    categories: TechCategory[]
}

export default function TechStack({ categories }: TechStackProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isAnimating, setIsAnimating] = useState(true)
    const [explosionStyles, setExplosionStyles] = useState<React.CSSProperties[]>([])

    const allTechs = categories.flatMap((cat) => cat.techs)

    useEffect(() => {
        const styles = allTechs.map((_, index) => {
            const angle = (index / allTechs.length) * Math.PI * 2
            const distance = 150 + Math.random() * 100
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance
            const rotation = Math.random() * 720 - 360

            return {
                "--explosion-x": `${x}px`,
                "--explosion-y": `${y}px`,
                "--explosion-rotate": `${rotation}deg`,
            } as React.CSSProperties
        })
        setExplosionStyles(styles)
    }, [allTechs.length])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false)
            setTimeout(() => setIsAnimating(true), 50)
        }, 8000)

        return () => clearInterval(interval)
    }, [])

    const getExplosionStyle = (index: number, total: number) => {
        const angle = (index / total) * Math.PI * 2
        const distance = 150 + Math.random() * 100
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance
        const rotation = Math.random() * 720 - 360

        return {
            "--explosion-x": `${x}px`,
            "--explosion-y": `${y}px`,
            "--explosion-rotate": `${rotation}deg`,
        } as React.CSSProperties
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        const DPR = Math.min(window.devicePixelRatio || 1, 2)

        const resize = () => {
            const rect = container.getBoundingClientRect()
            canvas.width = Math.floor(rect.width * DPR)
            canvas.height = Math.floor(rect.height * DPR)
            canvas.style.width = rect.width + "px"
            canvas.style.height = rect.height + "px"
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
        }
        resize()
        window.addEventListener("resize", resize)


        const colorWithOpacity = (color: string, opacity: number) => {
            const rgbMatch = color.match(/rgb$$(\d+),\s*(\d+),\s*(\d+)$$/)
            if (rgbMatch) {
                return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`
            }

            if (color.startsWith("#")) {
                const hex = color.replace("#", "")
                const r = Number.parseInt(hex.substring(0, 2), 16)
                const g = Number.parseInt(hex.substring(2, 4), 16)
                const b = Number.parseInt(hex.substring(4, 6), 16)
                return `rgba(${r}, ${g}, ${b}, ${opacity})`
            }


            return color
        }

        interface Particle {
            x: number
            y: number
            vx: number
            vy: number
            life: number
            maxLife: number
            color: string
            size: number
        }

        const particles: Particle[] = []

        const createParticle = (x: number, y: number, color: string) => {
            const angle = Math.random() * Math.PI * 2
            const speed = 0.5 + Math.random() * 1.5
            particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                maxLife: 60 + Math.random() * 40,
                color,
                size: 1 + Math.random() * 2,
            })
        }

        const getTechPositions = () => {
            const positions: { x: number; y: number; color: string }[] = []
            const techItems = container.querySelectorAll<HTMLElement>(".tech-item")
            const containerRect = container.getBoundingClientRect()

            techItems.forEach((item) => {
                const rect = item.getBoundingClientRect()
                const x = rect.left - containerRect.left + rect.width / 2
                const y = rect.top - containerRect.top + rect.height / 2
                const colorEl = item.querySelector<HTMLElement>(".tech-circle")
                const color = colorEl?.style.borderColor || "#8b5cf6"
                positions.push({ x, y, color })
            })

            return positions
        }

        let animationFrame: number
        let particleSpawnCounter = 0

        const animate = () => {
            const rect = container.getBoundingClientRect()
            ctx.clearRect(0, 0, rect.width, rect.height)

            const positions = getTechPositions()

            ctx.globalAlpha = 0.15
            for (let i = 0; i < positions.length; i++) {
                for (let j = i + 1; j < positions.length; j++) {
                    const dx = positions[j].x - positions[i].x
                    const dy = positions[j].y - positions[i].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 200) {
                        const gradient = ctx.createLinearGradient(positions[i].x, positions[i].y, positions[j].x, positions[j].y)
                        gradient.addColorStop(0, positions[i].color)
                        gradient.addColorStop(1, positions[j].color)

                        ctx.strokeStyle = gradient
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(positions[i].x, positions[i].y)
                        ctx.lineTo(positions[j].x, positions[j].y)
                        ctx.stroke()
                    }
                }
            }

            if (isAnimating && particleSpawnCounter % 3 === 0) {
                positions.forEach((pos) => {
                    if (Math.random() > 0.7) {
                        createParticle(pos.x, pos.y, pos.color)
                    }
                })
            }
            particleSpawnCounter++

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i]
                p.x += p.vx
                p.y += p.vy
                p.life++
                p.vy += 0.02

                const alpha = 1 - p.life / p.maxLife

                if (p.life >= p.maxLife) {
                    particles.splice(i, 1)
                    continue
                }

                ctx.globalAlpha = alpha * 0.6
                ctx.fillStyle = p.color
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            }


            positions.forEach((pos) => {
                const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 60)
                gradient.addColorStop(0, colorWithOpacity(pos.color, 0.2))
                gradient.addColorStop(1, "transparent")

                ctx.globalAlpha = isAnimating ? 0.4 : 0.2
                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, 60, 0, Math.PI * 2)
                ctx.fill()
            })

            animationFrame = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrame)
        }
    }, [isAnimating])

    return (
        <section id="tech-stack" className="py-28">
            <h2 className="section-title mb-5 text-[22px]">Tecnologias e <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">Ferramentas</span></h2>
            <p className="section-fade m-0 max-w-3xl text-[#9aa4b2] opacity-0 translate-y-8 blur-[4px] transition-all duration-700">
                Meu ecossistema de desenvolvimento
            </p>

            <div className="section-fade mt-10 opacity-0 translate-y-8 blur-[4px] transition-all duration-700">
                <div
                    ref={containerRef}
                    className="relative flex min-h-[320px] flex-wrap items-center justify-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-8 shadow-[0_6px_30px_rgba(2,6,23,0.25)] backdrop-blur-md md:min-h-[420px]"
                >
                    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" />

                    {allTechs.map((tech, index) => {
                        const animationDelay = `${index * 0.05}s`
                        return (
                            <div
                                key={`${tech.name}-${index}`}
                                className={`tech-item group relative z-10 ${isAnimating ? "explode" : ""}`}
                                style={{
                                    ...explosionStyles[index],
                                    animationDelay,
                                }}
                            >
                                <div
                                    className="tech-circle flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 group-hover:scale-110 md:h-20 md:w-20"
                                    style={{
                                        backgroundColor: `${tech.color}15`,
                                        borderColor: tech.color,
                                        boxShadow: `0 0 30px ${tech.color}60, 0 0 60px ${tech.color}30`,
                                    }}
                                >
                                    {tech.icon && <tech.icon className="h-8 w-8 md:h-10 md:w-10" style={{ color: tech.color }} />}
                                </div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                    {tech.name}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 shadow-[0_6px_30px_rgba(2,6,23,0.25)] backdrop-blur-md"
                        >
                            <h3 className="mb-3 text-sm font-semibold text-[#e6eef8] md:text-[14px]">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.techs.map((tech, techIdx) => (
                                    <div
                                        key={`${tech.name}-${techIdx}`}
                                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-[#cdd6e3] md:text-[13px]"
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

            <style jsx>{`
        @keyframes explode {
          0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            transform: translate(var(--explosion-x), var(--explosion-y)) scale(1.2) rotate(var(--explosion-rotate));
            opacity: 1;
          }
          30% {
            transform: translate(var(--explosion-x), var(--explosion-y)) scale(1) rotate(var(--explosion-rotate));
            opacity: 1;
          }
          70% {
            transform: translate(var(--explosion-x), var(--explosion-y)) scale(1) rotate(var(--explosion-rotate));
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .tech-item {
          transition: all 0.3s ease;
        }

        .tech-item.explode {
          animation: explode 4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .tech-circle {
          transition: all 0.3s ease;
        }

        .tech-item.explode .tech-circle {
          animation: pulse-glow 0.5s ease-in-out;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.5) drop-shadow(0 0 20px currentColor);
          }
        }
      `}</style>
        </section>
    )
}
