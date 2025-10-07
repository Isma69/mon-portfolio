import Container from "../components/Container.jsx";

export default function Hero() {
  return (
    <section id="home" className="pt-16 pb-12">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-[--color-muted]">Bonjour, je suis</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold">Votre Nom</h1>
            <p className="mt-4 text-[--color-muted]">
              Développeur passionné par le DevOps, l’automatisation et les bonnes pratiques.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-[--radius-md] bg-[--color-accent] text-white px-4 py-2 font-medium shadow-[--shadow-soft]">Voir mes projets</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-[--radius-md] border border-white/10 px-4 py-2 font-medium hover:bg-white/5">Me contacter</a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="card w-full md:w-80">
              <div className="h-40 rounded-[--radius-md] bg-gradient-to-br from-[--color-brand-600] to-[--color-brand-800]"></div>
              <p className="mt-4 text-sm text-[--color-muted]">Aperçu de votre travail et de votre style.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


