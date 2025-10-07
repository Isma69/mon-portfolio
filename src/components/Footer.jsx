export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm text-center text-[--color-muted]">
        © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
      </div>
    </footer>
  );
}


