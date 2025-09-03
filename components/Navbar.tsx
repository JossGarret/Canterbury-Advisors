import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-[var(--color-surface)] shadow">
      <Link href="/">
        <Image src="/logo.png" alt="Canterbury Advisors" width={160} height={40} />
      </Link>
      <div className="flex gap-6">
        <Link href="/explore" className="text-[var(--color-text)] hover:text-[var(--color-accent)]">Explorar</Link>
        <Link href="/reserve" className="text-[var(--color-text)] hover:text-[var(--color-accent)]">Reservar</Link>
      </div>
    </nav>
  );
}