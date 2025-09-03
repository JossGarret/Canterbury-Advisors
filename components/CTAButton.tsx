import Link from "next/link";

export default function CTAButton({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
    >
      {text}
    </Link>
  );
}