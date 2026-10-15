import { useState } from "react";
import { capitalise } from "../App";
import NavBar from "../components/NavBar";
import Translate from "./learn-pages/Translate";
import Dictionary from "./learn-pages/Dictionary";
import Grammar from "./learn-pages/Grammar";

export default function Learn() {
  const learnPages = {
    translate: <Translate />,
    dictionary: <Dictionary />,
    grammar: <Grammar />,
  };
  type LearnPage = keyof typeof learnPages;
  const [activePage, setActivePage] = useState<LearnPage>("translate");
  return (
    <div className="learn-page h-screen flex flex-col">
      <div className="md:flex">
        <NavBar currentPage="learn" />
        <NavBar currentPage={activePage} setTab={setActivePage} />
      </div>
      <main className="py-3 px-6 gap-4 flex flex-col">
        <h1>{capitalise(activePage)}</h1>
        {learnPages[activePage]}
      </main>
    </div>
  );
}
