export default function Section({ children, grid = 2 }) {
  // Map numbers to Tailwind classes
  const colClasses = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };

  return (
    <section className="relative bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 to-slate-900" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div
          className={`grid grid-cols-1 ${
            colClasses[grid] || "md:grid-cols-2"
          } gap-16 items-center`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
