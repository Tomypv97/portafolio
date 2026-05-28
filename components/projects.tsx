"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"
interface Project {
  title: string
  description: string
  stack: string[]
  demoUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "Sistema de Turnos Online",
    description:
      "App web para gestionar turnos de un consultorio de psicología. Los pacientes pueden reservar, consultar y cancelar turnos. Incluye un panel de administración completo para la profesional.",
    stack: ["Next.js", "NestJS", "Supabase", "Tailwind"],
    demoUrl: "https://turnos-front-hazel.vercel.app",
    githubUrl: "https://github.com/Tomypv97/turnos-front",
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-24 px-6 duration-700"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-primary mb-8 tracking-wide uppercase">
          Proyectos
        </h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    Código
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {/* Placeholder for future projects */}
          <div className="border border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="text-muted-foreground text-sm">
              Más proyectos próximamente...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
