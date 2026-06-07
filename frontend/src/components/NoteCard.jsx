export default function NoteCard({ title = "Untitled Note", category = "General", summary = "No summary yet." }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:bg-slate-900">
      <p className="text-xs uppercase tracking-wide text-cyan-400">{category}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{summary}</p>
    </article>
  );
}
