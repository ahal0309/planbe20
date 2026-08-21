import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-ink">404</h2>
      <p className="text-ashen mb-8 text-base md:text-lg">Page Not Found</p>
      <Link
        href="/"
        className="text-[12px] uppercase tracking-[0.2em] font-bold border-b-2 border-ink pb-1 hover:text-ochre hover:border-ochre transition-colors"
      >
        Return Home →
      </Link>
    </div>
  );
}
