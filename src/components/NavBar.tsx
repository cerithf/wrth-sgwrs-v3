export default function NavBar() {
  return (
    <nav className="w-full h-fit flex justify-center p-4 sticky top-0">
      <ul className="flex gap-4 bg-theme-green rounded-full">
        <li className="bg-theme-dark-green text-theme-cream font-bold p-4 rounded-full">
          Profile
        </li>
        <li className="p-4 rounded-full">Learn</li>
        <li className="p-4 rounded-full">Practice</li>
      </ul>
    </nav>
  );
}
