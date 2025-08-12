"use client"

import { useEffect } from "react"

export default function PageEffects() {
    useEffect(() => {
        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches

        
        const header = document.querySelector("header")
        const headerH = () => (header ? header.getBoundingClientRect().height : 0)

        const anchorHandler = (a: HTMLAnchorElement) => (ev: Event) => {
            const href = a.getAttribute("href") || ""
            if (!href.startsWith("#")) return
            const target = document.querySelector(href) as HTMLElement | null
            if (!target) return
            ev.preventDefault()
            const y = target.getBoundingClientRect().top + window.scrollY - headerH() - 8
            window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" })
        }
        const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        anchorLinks.forEach((a) => a.addEventListener("click", anchorHandler(a)))

        // Botão "Ver Projetos"
        const btnWork = document.getElementById("btn-work")
        const btnClick = () => {
            const target = document.querySelector("#projects")
            if (!target) return
            const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - headerH() - 8
            window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" })
        }
        btnWork?.addEventListener("click", btnClick)

        // Barra de progresso
        const progress = document.createElement("div")
        progress.className =
            "fixed left-0 top-0 h-[3px] w-full origin-left scale-x-0 z-[60] bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] shadow-[0_0_20px_rgba(139,92,246,0.35)] pointer-events-none"
        document.body.appendChild(progress)

        let ticking = false
        const onScrollProgress = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                const max = document.documentElement.scrollHeight - window.innerHeight
                const p = max > 0 ? window.scrollY / max : 0
                progress.style.transform = `scaleX(${p})`
                ticking = false
            })
        }
        window.addEventListener("scroll", onScrollProgress, { passive: true })
        onScrollProgress()

        // Reveals
        const revealEls = document.querySelectorAll<HTMLElement>(".section-fade")
        if (!prefersReducedMotion && "IntersectionObserver" in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const el = entry.target as HTMLElement
                            el.classList.remove("opacity-0", "translate-y-8", "blur-[4px]")
                            el.classList.add("opacity-100", "translate-y-0", "blur-0")
                            io.unobserve(el)
                        }
                    })
                },
                { threshold: 0.2 },
            )
            revealEls.forEach((el) => io.observe(el))
        } else {
            revealEls.forEach((el) => {
                el.classList.remove("opacity-0", "translate-y-8", "blur-[4px]")
                el.classList.add("opacity-100", "translate-y-0", "blur-0")
            })
        }

        // Sublinhado dinâmico do menu
        const menu = document.getElementById("menu")
        let underline: HTMLDivElement | null = null
        const setActive = () => {
            if (!menu) return
            const links = menu.querySelectorAll<HTMLAnchorElement>("a")
            const sections = document.querySelectorAll<HTMLElement>("main section[id]")
            let current = "home"
            sections.forEach((sec) => {
                const rect = sec.getBoundingClientRect()
                if (rect.top <= window.innerHeight * 0.35) current = sec.id
            })
            links.forEach((a) => {
                const isActive = a.getAttribute("href") === `#${current}`
                a.parentElement?.classList.toggle("font-bold", isActive)
                a.parentElement?.classList.toggle("text-[#8b5cf6]", isActive)
                if (isActive && underline) {
                    const r = a.getBoundingClientRect()
                    const parentR = menu.getBoundingClientRect()
                    const x = r.left - parentR.left
                    const w = r.width
                    underline.style.opacity = "1"
                    underline.style.transform = `translateX(${x}px)`
                    underline.style.width = `${w}px`
                }
            })
        }
        if (menu) {
            underline = document.createElement("div")
            underline.className =
                "absolute bottom-[-6px] h-[3px] rounded-md bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] opacity-0 w-0 pointer-events-none"
            menu.style.position = "relative"
            menu.appendChild(underline)
            setTimeout(setActive, 150)
            window.addEventListener("scroll", setActive, { passive: true })
            window.addEventListener("resize", setActive)
        }

        // Stagger de palavras (headline e sub)
        const splitWords = (el: Element | null) => {
            if (!el) return [] as HTMLSpanElement[]
            const text = el.textContent || ""
            const words = text.split(" ").map((w) => (w === "" ? " " : w))
            el.textContent = ""
            const spans: HTMLSpanElement[] = []
            words.forEach((w, i) => {
                const span = document.createElement("span")
                span.textContent = w
                span.style.display = "inline-block"
                span.style.transform = "translateY(14px)"
                span.style.opacity = "0"
                span.style.filter = "blur(6px)"
                span.style.transition = "transform 0.8s cubic-bezier(0.2,0.9,0.2,1), opacity 0.8s ease, filter 0.8s ease"
                spans.push(span)
                el.appendChild(span)
                if (i !== words.length - 1) el.appendChild(document.createTextNode(" "))
            })
            return spans
        }
        if (!prefersReducedMotion) {
            const headline = document.querySelector(".headline")
            const sub = document.querySelector(".sub")
            const hSpans = splitWords(headline)
            const sSpans = splitWords(sub)
            hSpans.forEach((sp, i) => {
                setTimeout(
                    () => {
                        sp.style.transform = "translateY(0)"
                        sp.style.opacity = "1"
                        sp.style.filter = "blur(0)"
                    },
                    100 + i * 30,
                )
            })
            sSpans.forEach((sp, i) => {
                setTimeout(
                    () => {
                        sp.style.transform = "translateY(0)"
                        sp.style.opacity = "1"
                        sp.style.filter = "blur(0)"
                    },
                    300 + i * 15,
                )
            })
        }

        // Spotlight no HERO
        const hero = document.getElementById("home")
        if (hero && !prefersReducedMotion && window.matchMedia("(pointer:fine)").matches) {
            const spotlight = document.createElement("div")
            spotlight.className =
                "absolute w-[520px] h-[520px] -ml-[260px] -mt-[260px] rounded-full pointer-events-none mix-blend-screen blur-[2px] opacity-60 -z-10"
            spotlight.style.background = "radial-gradient(closest-side, rgba(255,255,255,0.08), transparent 70%)"
            hero.appendChild(spotlight)

            let sx = window.innerWidth / 2
            let sy = window.innerHeight / 3
            let tx = sx
            let ty = sy
            const lerp = (a: number, b: number, t: number) => a + (b - a) * t
            const move = (e: MouseEvent) => {
                const rect = hero.getBoundingClientRect()
                tx = e.clientX - rect.left
                ty = e.clientY - rect.top
            }
            const raf = () => {
                sx = lerp(sx, tx, 0.18)
                sy = lerp(sy, ty, 0.18)
                spotlight.style.transform = `translate(${sx}px, ${sy}px)`
                requestAnimationFrame(raf)
            }
            window.addEventListener("mousemove", move)
            raf()
        }

        // Drift do cartão de perfil ao rolar
        const profileCard = document.getElementById("profile-card")
        if (profileCard && !prefersReducedMotion) {
            const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max))
            const lerp = (a: number, b: number, t: number) => a + (b - a) * t
            let current = 10
            const update = () => {
                const rect = (hero as HTMLElement).getBoundingClientRect()
                const viewportH = window.innerHeight || 1
                const progress = clamp(1 - rect.top / viewportH, 0, 1)
                const target = lerp(10, -20, progress)
                current = lerp(current, target, 0.2)
                profileCard.style.transform = `translateY(${current}px)`
            }
            window.addEventListener("scroll", update, { passive: true })
            update()
        }

        // Tilt 3D em cartões de projeto
        const tiltEls = document.querySelectorAll<HTMLElement>("[data-tilt]")
        tiltEls.forEach((el) => {
            const onMove = (ev: MouseEvent) => {
                const rect = el.getBoundingClientRect()
                const px = (ev.clientX - rect.left) / rect.width
                const py = (ev.clientY - rect.top) / rect.height
                const rx = (py - 0.5) * 10
                const ry = (px - 0.5) * -10
                el.style.transition = "transform 0.05s linear"
                el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`
            }
            const onLeave = () => {
                el.style.transition = "transform 0.6s cubic-bezier(.2,.9,.2,1)"
                el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)"
            }
            el.addEventListener("mousemove", onMove)
            el.addEventListener("mouseleave", onLeave)
        })

        // Magnético em .btn e .chip (somente ponteiros finos)
        if (!prefersReducedMotion && window.matchMedia("(pointer:fine)").matches) {
            const magnetize = (els: NodeListOf<HTMLElement>, strength = 16) => {
                els.forEach((el) => {
                    const onMove = (e: MouseEvent) => {
                        const rect = el.getBoundingClientRect()
                        const relX = e.clientX - rect.left - rect.width / 2
                        const relY = e.clientY - rect.top - rect.height / 2
                        const tx = (relX / rect.width) * strength
                        const ty = (relY / rect.height) * strength
                        el.style.transform = `translate(${tx}px, ${ty}px)`
                    }
                    const onLeave = () => {
                        el.style.transition = "transform 0.25s ease"
                        el.style.transform = "translate(0px, 0px)"
                        setTimeout(() => (el.style.transition = ""), 260)
                    }
                    el.addEventListener("mousemove", onMove)
                    el.addEventListener("mouseleave", onLeave)
                })
            }
            magnetize(document.querySelectorAll<HTMLElement>(".btn"), 14)
            magnetize(document.querySelectorAll<HTMLElement>(".chip"), 8)
        }

        // Ripple nos botões (ignora .ghost)
        document.querySelectorAll<HTMLButtonElement>(".btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                if (btn.classList.contains("ghost")) return
                const rect = btn.getBoundingClientRect()
                const d = Math.max(rect.width, rect.height)
                const circle = document.createElement("span")
                circle.className = "absolute rounded-full pointer-events-none mix-blend-screen"
                circle.style.background = "radial-gradient(circle, rgba(255,255,255,0.35), rgba(255,255,255,0) 60%)"
                circle.style.width = circle.style.height = `${d}px`
                circle.style.left = `${(e as MouseEvent).clientX - rect.left - d / 2}px`
                circle.style.top = `${(e as MouseEvent).clientY - rect.top - d / 2}px`
                circle.style.opacity = "0.6"
                circle.animate(
                    [
                        { transform: "translate3d(0,0,0) scale(0.2)", opacity: 0.6 },
                        { transform: "translate3d(0,0,0) scale(1.6)", opacity: 0 },
                    ],
                    { duration: 600, easing: "ease-out", fill: "forwards" },
                )
                btn.appendChild(circle)
                setTimeout(() => circle.remove(), 650)
            })
        })

        // Cursor personalizado (orbe)
        if (!prefersReducedMotion && window.matchMedia("(pointer:fine)").matches) {
            const cursor = document.createElement("div")
            cursor.className =
                "fixed left-0 top-0 w-[22px] h-[22px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[70] backdrop-blur-sm border border-white/20 transition-[width,height,background,opacity] duration-200"
            cursor.style.background = "radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0) 60%)"
            document.body.appendChild(cursor)

            let x = window.innerWidth / 2,
                y = window.innerHeight / 2,
                tx = x,
                ty = y
            const lerp = (a: number, b: number, t: number) => a + (b - a) * t
            const move = (e: MouseEvent) => {
                tx = e.clientX
                ty = e.clientY
            }
            const raf = () => {
                x = lerp(x, tx, 0.2)
                y = lerp(y, ty, 0.2)
                cursor.style.transform = `translate(${x}px, ${y}px)`
                requestAnimationFrame(raf)
            }
            window.addEventListener("mousemove", move)
            raf()

            const interactive = document.querySelectorAll<HTMLElement>(".btn, .chip, a")
            const enter = () => {
                cursor.style.width = "44px"
                cursor.style.height = "44px"
                cursor.style.background = "radial-gradient(circle, rgba(255,255,255,0.28), rgba(255,255,255,0) 60%)"
                cursor.style.opacity = "1"
            }
            const leave = () => {
                cursor.style.width = "22px"
                cursor.style.height = "22px"
                cursor.style.background = "radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0) 60%)"
                cursor.style.opacity = "0.9"
            }
            interactive.forEach((el) => {
                el.addEventListener("mouseenter", enter)
                el.addEventListener("mouseleave", leave)
            })
        }

        // Canvas de partículas de fundo (2D)
        if (!prefersReducedMotion) {
            const canvas = document.createElement("canvas")
            canvas.className = "fixed inset-0 z-0 pointer-events-none"
            document.body.appendChild(canvas)
            const ctx = canvas.getContext("2d", { alpha: true })!
            const DPR = Math.min(window.devicePixelRatio || 1, 2)

            let W = 0,
                H = 0
            const resize = () => {
                W = window.innerWidth
                H = window.innerHeight
                canvas.width = Math.floor(W * DPR)
                canvas.height = Math.floor(H * DPR)
                canvas.style.width = W + "px"
                canvas.style.height = H + "px"
                ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
            }
            resize()
            window.addEventListener("resize", resize)

            // Campo pseudo-3D
            const COUNT = 340
            const pts: { x: number; y: number; z: number }[] = []
            for (let i = 0; i < COUNT; i++) {
                pts.push({
                    x: (Math.random() - 0.5) * 850,
                    y: (Math.random() - 0.5) * 850,
                    z: (Math.random() - 0.5) * 420,
                })
            }

            let t = 0
            let mx = 0,
                my = 0
            const onMouse = (e: MouseEvent) => {
                mx = (e.clientX / W - 0.5) * 2
                my = (e.clientY / H - 0.5) * 2
            }
            if (window.matchMedia("(pointer:fine)").matches) window.addEventListener("mousemove", onMouse)

            const draw = () => {
                t += 0.0023
                ctx.clearRect(0, 0, W, H)

                const sinY = Math.sin(t * 0.6 + mx * 0.4) * 0.05
                const rotY = t * 0.5 + mx * 0.1

                for (let i = 0; i < COUNT; i++) {
                    const p = pts[i]
                    // Rotação Y
                    const cos = Math.cos(rotY)
                    const sin = Math.sin(rotY)
                    const rx = p.x * cos - p.z * sin
                    const rz = p.x * sin + p.z * cos
                    // Rotação X leve
                    const cosx = Math.cos(sinY)
                    const sinx = Math.sin(sinY)
                    const ry = p.y * cosx - rz * sinx
                    const rzz = p.y * sinx + rz * cosx
                    // Projeção
                    const depth = 200
                    const denom = depth - rzz

                    if (denom <= 0) {
                        // Ponto atrás ou no plano da câmera, não desenha
                        continue
                    }

                    const scale = depth / denom
                    const sx = W / 2 + rx * scale
                    const sy = H / 2 + ry * scale

                    ctx.globalAlpha = 0.06
                    ctx.fillStyle = "#ffffff"
                    ctx.beginPath()
                    ctx.arc(sx, sy, 2.2 * scale, 0, Math.PI * 2)
                    ctx.fill()
                }

                requestAnimationFrame(draw)
            }

            draw()
        }

        return () => {
            anchorLinks.forEach((a) => a.removeEventListener("click", anchorHandler(a)))
            btnWork?.removeEventListener("click", btnClick)
            // Os demais listeners/elementos inseridos são tolerados na página única;
            // se for multi-página, podemos evoluir o cleanup conforme a necessidade.
        }
    }, [])

    return null
}
