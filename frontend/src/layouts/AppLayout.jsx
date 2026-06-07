import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      <Sidebar />
      <main className="flex-1">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
