export default function ShowVPSize() {
  // shows current viewport size as text
  return (
    <div>
      <p className="sm:hidden">XS</p>
      <p className="hidden sm:max-md:block">Small</p>
      <p className="hidden md:max-lg:block">Medium</p>
      <p className="hidden lg:max-xl:block">Large</p>
      <p className="hidden xl:block">XL</p>
    </div>
  );
}
