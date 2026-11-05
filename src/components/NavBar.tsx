import { capitalise } from "../App";

const learnPages = ["translate", "dictionary", "grammar"] as const;

export default function NavBar({
  currentPage,
  variant = "main-pages",
  roundBottomCorners = true,
}: {
  currentPage?: string;
  variant?: "main-pages" | "learn-pages";
  roundBottomCorners?: boolean;
}) {
  const pages =
    variant == "main-pages" ? ["profile", "learn", "practice"] : learnPages;

  function ActiveTab({ page }: { page: string }) {
    return (
      <li className="active bg-theme-dark-green text-theme-cream font-bold p-2 rounded-full shadow-2xl shadow-theme-dark-green cursor-default">
        <span className="p-2">{capitalise(page)}</span>
      </li>
    );
  }

  function InactiveTab({ page }: { page: string }) {
    return (
      <li className="p-2 px-3 rounded-full inactive bg-theme-green">
        <a href={"/" + page} className="p-2">
          {capitalise(page)}
        </a>
      </li>
    );
  }
  return (
    <nav className="w-full h-fit flex justify-center m-2">
      <ul
        className={
          "flex gap-0 bg-theme-green rounded-full overflow-hidden" +
          (roundBottomCorners && " round-bottom-corners")
        }
      >
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
