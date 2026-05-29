"use client"

import Image from "next/image"

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-primary mb-8 tracking-wide uppercase">
          Sobre mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Soy estudiante de la Licenciatura en Ciencias de la Computación en 4° año y próximo a finalizar la Tecnicatura en Programación. Me interesa el desarrollo de software, especialmente el backend y la creación de aplicaciones que resuelvan problemas reales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Además de la programación, juego al básquet, una actividad que me enseñó la importancia de la disciplina, la constancia y el trabajo en equipo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Actualmente busco seguir creciendo como desarrollador participando en proyectos donde pueda aplicar mis conocimientos y aportar soluciones funcionales.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary/30">
              <Image
                src="/foto.jpg"
                alt="Paz Tomás"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}