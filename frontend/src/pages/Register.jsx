export default function Register() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
        <h1 className="text-3xl font-bold">Create your MindVault</h1>
        <p className="mt-2 text-slate-400">Start building your knowledge system.</p>
        {/* TODO: Add name/email/password form and call POST /auth/register */}
      </div>
    </div>
  );
}
