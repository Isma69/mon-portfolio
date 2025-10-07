import Container from "../components/Container.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-[--color-muted]">Travaillons ensemble</p>
          </div>
          <div className="md:col-span-2">
            <form className="card grid gap-3">
              <input className="bg-transparent border border-white/10 rounded-[--radius-md] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-accent]" placeholder="Votre email" />
              <textarea className="bg-transparent border border-white/10 rounded-[--radius-md] px-3 py-2 min-h-28 focus:outline-none focus:ring-2 focus:ring-[--color-accent]" placeholder="Votre message" />
              <button type="submit" className="justify-self-start rounded-[--radius-md] bg-[--color-accent] text-white px-4 py-2 font-medium">Envoyer</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}


