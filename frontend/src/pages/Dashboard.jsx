import { Link } from "react-router-dom";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Notes",
      value: "24",
      subtitle: "Knowledge items saved",
    },
    {
      title: "Public Notes",
      value: "6",
      subtitle: "Visible on your public vault",
    },
    {
      title: "Private Notes",
      value: "18",
      subtitle: "Only visible to you",
    },
    {
      title: "Due Flashcards",
      value: "5",
      subtitle: "Ready for revision today",
    },
  ];

  const recentNotes = [
    {
      id: 1,
      title: "FastAPI JWT Authentication",
      category: "Backend",
      date: "Today",
      visibility: "Private",
    },
    {
      id: 2,
      title: "Ethanol Blending in Petrol",
      category: "Science",
      date: "Yesterday",
      visibility: "Public",
    },
    {
      id: 3,
      title: "Football Tactical Analysis",
      category: "Sports",
      date: "2 days ago",
      visibility: "Private",
    },
  ];

  const focusAreas = ["Backend", "AI/ML", "Science", "Football", "Health", "Finance"];

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 md:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            MindVault
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Your knowledge dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Store what you learn, find it later, revise it better, and slowly build
            your own second brain.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/notes/new"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            + Add Note
          </Link>

          <Link
            to="/notes"
            className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            View Notes
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-2">
        <input
          type="text"
          placeholder="Search notes, tags, ideas..."
          className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-indigo-500/60"
          >
            <p className="text-sm text-slate-400">{stat.title}</p>
            <h2 className="mt-3 text-4xl font-bold text-white">{stat.value}</h2>
            <p className="mt-3 text-sm text-slate-500">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Recent Notes */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 xl:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Recent Notes</h2>
              <p className="mt-1 text-sm text-slate-500">
                Continue from where you left off.
              </p>
            </div>

            <Link
              to="/notes"
              className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              See all
            </Link>
          </div>

          <div className="space-y-3">
            {recentNotes.map((note) => (
              <Link
                key={note.id}
                to={`/notes/${note.id}`}
                className="block rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-indigo-500 hover:bg-slate-900"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-100">{note.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {note.category} • {note.date}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      note.visibility === "Public"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {note.visibility}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Right Panel */}
        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-xl font-bold text-white">Today’s Review</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              5 flashcards are waiting. Revise them before they pile up.
            </p>

            <Link
              to="/review"
              className="mt-5 block rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Start Revision
            </Link>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-xl font-bold text-white">Focus Areas</h2>
            <p className="mt-2 text-sm text-slate-500">
              Your current learning categories.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-5">
            <p className="text-sm font-semibold text-indigo-100">Coming Soon</p>
            <h2 className="mt-2 text-xl font-bold text-white">
              Ask Your Notes
            </h2>
            <p className="mt-2 text-sm leading-6 text-indigo-100">
              Later, MindVault will answer questions from your own saved notes using AI.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}