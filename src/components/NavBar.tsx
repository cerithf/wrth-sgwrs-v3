export default function NavBar({
  currentPage,
  variant = "main-pages",
}: {
  currentPage?: string;
  variant?: "main-pages" | "learn-pages";
}) {
  const activeTab =
    "bg-theme-dark-green text-theme-cream font-bold p-4 rounded-full shadow-2xl shadow-theme-dark-green";
  const inactiveTab = "p-4 rounded-full";
  const pageNames =
    variant == "main-pages"
      ? ["profile", "learn", "practice"]
      : ["translate", "dictionary", "grammar"];
  return (
    <nav className="w-full h-fit flex justify-center p-4 sticky top-0">
      <ul className="flex gap-4 bg-theme-green rounded-full overflow-hidden">
        {pageNames.map((page) => (
          <li className={currentPage == page ? activeTab : inactiveTab}>
            <a href={"/" + page} className="p-2">
              {page[0].toUpperCase() + page.substring(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
