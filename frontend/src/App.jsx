import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyNotes from "./pages/MyNotes";
import AddNote from "./pages/AddNote";
import NoteDetail from "./pages/NoteDetail";
import Flashcards from "./pages/Flashcards";
import KnowledgeMap from "./pages/KnowledgeMap";
import PublicVault from "./pages/PublicVault";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<MyNotes />} />
        <Route path="/notes/new" element={<AddNote />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/review" element={<Flashcards />} />
        <Route path="/map" element={<KnowledgeMap />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/public/:username" element={<PublicVault />} />
    </Routes>
  );
}
