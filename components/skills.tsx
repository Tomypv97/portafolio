"use client"

import { useEffect, useRef } from "react"

const skills = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "N" },
  { name: "NestJS", icon: "🐈" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Supabase", icon: "⚡" },
  { name: "Git", icon: "⎇" },
  { name: "Tailwind CSS", icon: "🎨" },
]

export function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 duration-700"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-primary mb-8 tracking-wide uppercase">
          Tecnologías
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
