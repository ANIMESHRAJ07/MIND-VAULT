export default function Navbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/80 px-6 flex items-center justify-between">
      <input
        className="w-full max-w-xl rounded-xl bg-slate-900 border border-slate-800 px-4 py-2 outline-none"
        placeholder="Search your knowledge..."
      />
      <div className="ml-4 text-sm text-slate-400">Private Vault</div>
    </header>
  );
}
