"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center px-6 pt-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-primary text-sm font-medium mb-4 tracking-wide uppercase">
          Hola, soy
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Paz Tomás
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Técnico en Programación{" "}
          <span className="text-primary">(en curso)</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
          Desarrollador apasionado por construir soluciones reales. Transformando ideas
          en experiencias digitales con código limpio y diseño funcional.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#proyectos"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
