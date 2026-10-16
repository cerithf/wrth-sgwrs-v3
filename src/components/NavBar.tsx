import { capitalise } from "../App";

const learnPages = ["translate", "dictionary", "grammar"] as const;
type LearnPage = (typeof learnPages)[number];

export default function NavBar({
  currentPage,
  variant = "main-pages",
}: {
  currentPage?: string;
  variant?: "main-pages" | "learn-pages";
}) {
  const pages =
    variant == "main-pages" ? ["profile", "learn", "practice"] : learnPages;

  function ActiveTab({ page }: { page: string }) {
    return (
      <li className="bg-theme-dark-green text-theme-cream font-bold p-4 rounded-full shadow-2xl shadow-theme-dark-green cursor-default">
        <span className="p-2">{capitalise(page)}</span>
      </li>
    );
  }

  function InactiveTab({ page }: { page: string }) {
    return (
      <li className="p-4 rounded-full">
        <a href={"/" + page} className="p-2">
          {capitalise(page)}
        </a>
      </li>
    );
  }
  return (
    <nav className="w-full h-fit flex justify-center p-4 sticky top-0">
      <ul className="flex gap-4 bg-theme-green rounded-full overflow-hidden">
        {pages.map((page) =>
          currentPage == page ? (
            <ActiveTab page={page} />
          ) : (
            <InactiveTab page={page} />
          ),
        )}
      </ul>
    </nav>
  );
}
