import SearchBar from "../components/SearchBar";
import NoteCard from "../components/NoteCard";

export default function MyNotes() {
  return (
    <section>
      <h2 className="text-3xl font-bold">My Knowledge</h2>
      <div className="mt-4">
        <SearchBar />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <NoteCard />
        <NoteCard title="IBS and Digestion" category="Health" />
        <NoteCard title="Football Pressing" category="Sports" />
      </div>
    </section>
  );
}
