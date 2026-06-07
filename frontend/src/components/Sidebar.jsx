import { NavLink } from "react-router-dom";

const links = [
  ["/dashboard", "Dashboard"],
  ["/notes", "My Notes"],
  ["/notes/new", "Add Note"],
  ["/review", "Flashcards"],
  ["/map", "Knowledge Map"],
  ["/settings", "Settings"],
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-800 bg-slate-950 p-5">
      <h1 className="text-2xl font-bold mb-8">MindVault</h1>
      <nav className="space-y-2">
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
