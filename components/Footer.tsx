export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] text-gray-400 text-sm text-center py-6 px-4 mt-auto">
      <p>© {new Date().getFullYear()} Canterbury Advisors. Todos los derechos reservados.</p>
      <p className="mt-2">Rentabilidad objetivo ≠ rentabilidad garantizada. Lea los riesgos.</p>
    </footer>
  );
}