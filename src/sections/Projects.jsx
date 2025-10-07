import Container from "../components/Container.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Projets</h2>
            <p className="mt-2 text-sm text-[--color-muted]">Une sélection récente</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.slug} className="card">
              <div className="h-40 rounded-[--radius-md] bg-gradient-to-tr from-[--color-elev-1] to-[--color-brand-800]/40 mb-4 flex items-center justify-center text-[--color-muted]">
                {p.preview ?? "Aperçu"}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-[--color-muted]">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


