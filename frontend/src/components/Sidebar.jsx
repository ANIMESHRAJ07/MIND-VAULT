import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "⌂" },
    { name: "My Notes", path: "/notes", icon: "◈" },
    { name: "Add Note", path: "/notes/new", icon: "+" },
    { name: "Flashcards", path: "/review", icon: "▣" },
    { name: "Knowledge Map", path: "/map", icon: "◎" },
    { name: "Settings", path: "/settings", icon: "⚙" },
  ];

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950 px-5 py-6 text-slate-100 lg:flex lg:flex-col">
      {/* Logo */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-bold text-white">
            M
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              MindVault
            </h1>
            <p className="text-xs text-slate-500">Your second brain</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`
            }
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-sm">
              {item.icon}
            </span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          Streak
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">7 days</h2>
        <p className="mt-2 text-sm leading-5 text-slate-500">
          Keep adding what you learn. Small notes become a big vault.
        </p>
      </div>
    </aside>
  );
}