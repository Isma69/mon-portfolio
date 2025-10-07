import Container from "./Container.jsx";

export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
            {subtitle ? <p className="mt-2 text-sm text-[--color-muted]">{subtitle}</p> : null}
          </div>
        </div>
        <div className="mt-6">
          {children}
        </div>
      </Container>
    </section>
  );
}


