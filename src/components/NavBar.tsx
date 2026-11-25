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
      <li className="active bg-theme-dark-green text-theme-cream font-bold p-2 max-sm:m-1 rounded-full shadow-2xl shadow-theme-dark-green cursor-default">
        <span className="p-2">{capitalise(page)}</span>
      </li>
    );
  }

  function InactiveTab({ page }: { page: string }) {
    return (
      <li className="p-2 px-3 rounded-full inactive bg-theme-green max-sm:m-1">
        <a href={"/" + page} className="p-2">
          {capitalise(page)}
        </a>
      </li>
    );
  }
  return (
    <nav className="w-full h-fit flex justify-center sm:mt-2! m-0!">
      <ul
        className={
          "flex gap-0 bg-theme-green rounded-full overflow-hidden max-sm:rounded-none max-sm:w-full justify-between max-sm:px-[10%] min-w-78.5 " +
          (roundBottomCorners && "max-sm:round-bottom-corners")
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
