export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Paz Tomás. Todos los derechos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Hecho con{" "}
          <span className="text-primary">Next.js</span> y{" "}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
