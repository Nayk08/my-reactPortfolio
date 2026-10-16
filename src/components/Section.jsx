export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-sky-400">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-zinc-400">{description}</p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
