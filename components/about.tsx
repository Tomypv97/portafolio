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
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Soy estudiante de la Tecnicatura en Programación, apasionado por el
              desarrollo web y las tecnologías que transforman ideas en productos
              digitales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fuera del código, soy fanático del básquet: me ayuda a mantener el
              equilibrio entre la pantalla y el mundo real. Creo que el trabajo en
              equipo y la disciplina del deporte se traducen directamente en mejores
              prácticas de desarrollo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Actualmente busco aplicar lo aprendido en proyectos reales donde pueda
              crecer como desarrollador y aportar valor con soluciones funcionales y
              bien diseñadas.
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