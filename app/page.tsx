import CTAButton from "@/components/CTAButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-4">
          Inversiones tokenizadas con retorno objetivo
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
          Copamos el cupo de cada oportunidad con participaciones digitales, desde 100€. Transparencia, control y liquidez programada.
        </p>
        <CTAButton text="Empieza ahora" link="/explore" />
      </section>
      <Footer />
    </main>
  );
}