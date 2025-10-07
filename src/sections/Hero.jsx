import Container from "../components/Container.jsx";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-[--color-muted]">Bonjour, je suis</p>
            <h1 className="mt-2 text-4xl sm:text-6xl font-bold">Votre Nom</h1>
            <p className="mt-4 text-lg text-[--color-muted]">
              Développeur passionné par le DevOps, l’automatisation et les bonnes pratiques.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="btn-primary">Voir mes projets</a>
              <a href="#contact" className="btn-ghost">Me contacter</a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="card w-full md:w-96">
              <div className="h-48 rounded-[--radius-md] bg-gradient-to-br from-[--color-brand-600] via-[--color-accent-2] to-[--color-brand-800]"></div>
              <p className="mt-4 text-sm text-[--color-muted]">Aperçu de votre travail et de votre style.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


