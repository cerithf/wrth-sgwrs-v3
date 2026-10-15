export default function NavBar() {
  return (
    <nav className="w-full h-fit flex justify-center p-4 sticky top-0">
      <ul className="flex gap-4 bg-theme-green rounded-full">
        <li className="bg-theme-dark-green text-theme-cream font-bold p-4 rounded-full">
          <a href="/profile" className="p-2">
            Profile
          </a>
        </li>
        <li className="p-4 rounded-full">
          <a href="/learn" className="p-2">
            Learn
          </a>
        </li>
        <li className="p-4 rounded-full">
          <a href="/practice" className="p-2">
            Practice
          </a>
        </li>
      </ul>
    </nav>
  );
}
