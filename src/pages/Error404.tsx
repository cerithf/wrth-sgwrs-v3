import NavBar from "../components/NavBar";

export default function Error404() {
  return (
    <div className="error-404-page h-screen flex flex-col">
      <NavBar />
      <main className="py-3 px-6 gap-4 flex flex-col center-all">
        <h1>Error 404</h1>
        <p>
          Looks like there's been an issue, try going back to the{" "}
          <a href="/" className="font-bold underline text-theme-dark-green">
            homepage
          </a>
          .
        </p>
      </main>
    </div>
  );
}
