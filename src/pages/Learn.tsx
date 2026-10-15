import { useState } from "react";
import NavBar from "../components/NavBar";
import Translate from "./learn-pages/Translate";
import Dictionary from "./learn-pages/Dictionary";
import Grammar from "./learn-pages/Grammar";

export default function Learn() {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className="learn-page h-screen flex flex-col">
      <div className="flex">
        <NavBar currentPage="learn" />
        <NavBar variant="learn-pages" />
      </div>
      <main className="py-3 px-6 gap-4 flex flex-col">
        <h1>Learn</h1>
      </main>
    </div>
  );
}
