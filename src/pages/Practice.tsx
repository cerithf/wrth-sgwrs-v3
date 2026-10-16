import NavBar from "../components/NavBar";

export default function Practice() {
  return (
    <div className="practice-page">
      <NavBar currentPage="practice" />
      <main className="py-3 px-6 gap-4 flex flex-col">
        <h1>Practice</h1>
      </main>
    </div>
  );
}
