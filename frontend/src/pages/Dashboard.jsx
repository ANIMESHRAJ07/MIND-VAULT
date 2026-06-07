import NoteCard from "../components/NoteCard";

export default function Dashboard() {
  return (
    <section>
      <h2 className="text-3xl font-bold">Good evening, Animesh</h2>
      <p className="mt-2 text-slate-400">Your brain learned 12 new things this week.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {["Total Notes", "Public Notes", "Private Notes", "Review Due"].map((label) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>
        ))}
      </div>

      <h3 className="mt-8 text-xl font-semibold">Recently Added</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <NoteCard title="Ethanol Blending in Petrol" category="Energy" summary="E20 means 20% ethanol and 80% petrol." />
        <NoteCard title="CORS and Proxy" category="Backend" summary="Browser security explained simply." />
      </div>
    </section>
  );
}
