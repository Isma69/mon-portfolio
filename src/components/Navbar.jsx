export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[--color-surface]/70 bg-[--color-surface]/90 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="#home" className="font-display text-lg font-semibold">Mon Portfolio</a>
        <nav className="hidden md:flex gap-6 text-sm text-[--color-muted]">
          <a href="#about" className="hover:text-[--color-text]">À propos</a>
          <a href="#projects" className="hover:text-[--color-text]">Projets</a>
          <a href="#contact" className="hover:text-[--color-text]">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">Travaillons ensemble</a>
        </div>
      </div>
    </header>
  );
}


