export default function NoteDetail() {
  return (
    <article className="max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <p className="text-sm text-cyan-400">Energy · Automobile · Private</p>
      <h2 className="mt-2 text-3xl font-bold">Ethanol Blending in Petrol</h2>
      <section className="mt-6 space-y-6 text-slate-300">
        <div>
          <h3 className="text-xl font-semibold text-white">Core Idea</h3>
          <p className="mt-2">Ethanol can be mixed with petrol because it burns as fuel and contains oxygen.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Why it Matters</h3>
          <p className="mt-2">It can reduce petrol imports but may affect mileage.</p>
        </div>
      </section>
    </article>
  );
}
