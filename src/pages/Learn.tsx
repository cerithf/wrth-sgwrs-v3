import { useState } from "react";
import { capitalise } from "../App";
import NavBar from "../components/NavBar";
import Translate from "./learn-pages/Translate";
import Dictionary from "./learn-pages/Dictionary";
import Grammar from "./learn-pages/Grammar";
import BackToTop from "../components/BackToTop";

const learnPages = {
  translate: <Translate />,
  dictionary: <Dictionary />,
  grammar: <Grammar />,
};
type LearnPage = keyof typeof learnPages;

export default function Learn({
  subpage = "translate",
}: {
  subpage?: LearnPage;
}) {
  const [activePage, setActivePage] = useState<LearnPage>(subpage);
  return (
    <div className="learn-page h-screen flex flex-col">
      <div className="md:flex">
        <NavBar currentPage="learn" />
        <NavBar currentPage={activePage} variant="learn-pages" />
      </div>
      <main className="py-3 px-6 gap-4 flex flex-col">
        <h1>{capitalise(activePage)}</h1>
        {learnPages[activePage]}
      </main>
      <BackToTop addedClasses="my-4" />
    </div>
  );
}
