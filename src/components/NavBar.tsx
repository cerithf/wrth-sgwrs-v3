import { capitalise } from "../App";

const learnPages = ["translate", "dictionary", "grammar"] as const;
type LearnPage = (typeof learnPages)[number];

export default function NavBar({
  currentPage,
  setTab,
}: {
  currentPage?: string;
  setTab?: React.Dispatch<React.SetStateAction<LearnPage>>;
}) {
  const activeTab =
    "bg-theme-dark-green text-theme-cream font-bold p-4 rounded-full shadow-2xl shadow-theme-dark-green";
  const inactiveTab = "p-4 rounded-full";
  return (
    <nav className="w-full h-fit flex justify-center p-4 sticky top-0">
      <ul className="flex gap-4 bg-theme-green rounded-full overflow-hidden">
        {!setTab
          ? ["profile", "learn", "practice"].map((page) => (
              <li className={currentPage == page ? activeTab : inactiveTab}>
                <a href={"/" + page} className="p-2">
                  {capitalise(page)}
                </a>
              </li>
            ))
          : learnPages.map((page) => (
              <li className={currentPage == page ? activeTab : inactiveTab}>
                <button className="cursor-pointer" onClick={() => setTab(page)}>
                  {capitalise(page)}
                </button>
              </li>
            ))}
      </ul>
    </nav>
  );
}
