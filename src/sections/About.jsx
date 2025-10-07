import Container from "../components/Container.jsx";

export default function About() {
  return (
    <section id="about" className="py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">À propos</h2>
            <p className="mt-2 text-sm text-[--color-muted]">Qui je suis et comment je travaille</p>
          </div>
          <div className="md:col-span-2">
            <div className="card grid gap-3">
              <p>
                J’aide les équipes à livrer plus vite et plus sereinement en mettant en place
                des pipelines CI/CD, des tests automatisés et une observabilité claire.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="chip">CI/CD</span>
                <span className="chip">Infrastructure as Code</span>
                <span className="chip">Observabilité</span>
                <span className="chip">Qualité & Tests</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


