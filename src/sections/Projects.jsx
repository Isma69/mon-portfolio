import Container from "../components/Container.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-sep section-alt">
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
              <a href={p.url ?? "#"} target="_blank" rel="noreferrer" className="block group">
                <div className="h-40 rounded-[--radius-md] overflow-hidden mb-4 bg-[--color-elev-1] flex items-center justify-center text-[--color-muted]">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
                  ) : (
                    <span>{p.preview ?? "Aperçu"}</span>
                  )}
                </div>
              </a>
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


