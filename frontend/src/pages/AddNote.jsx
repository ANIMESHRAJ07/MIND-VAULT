export default function AddNote() {
  return (
    <section className="max-w-4xl">
      <h2 className="text-3xl font-bold">Add New Knowledge</h2>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" placeholder="Title" />
        <input className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" placeholder="Category" />
        <input className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" placeholder="Tags: fuel, economy, backend" />
        <textarea className="min-h-44 w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" placeholder="Core idea / explanation" />
        <textarea className="min-h-28 w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" placeholder="Why it matters" />
        <select className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3">
          <option>private</option>
          <option>public</option>
        </select>
        <button className="block rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950">Save to MindVault</button>
      </form>
    </section>
  );
}
