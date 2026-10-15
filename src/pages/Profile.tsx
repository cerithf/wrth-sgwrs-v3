import NavBar from "../components/NavBar";

export default function LogInPage() {
  return (
    <div className="profile-page h-screen flex flex-col">
      <NavBar />
      <main>
        <div className="heading flex tb">
          <h1>Hey, user! 👋</h1>
          <button className="btn border border-theme-dark-green text-theme-dark-green ml-auto">
            Give us some feedback!
          </button>
        </div>
        <div className="progress border border-theme-dark-green p-4 m-4 rounded-lg">
          <p className="text-lg">
            <span className="header-font text-3xl">X</span> out of 11 topics
            learnt
          </p>
        </div>
        <div className="min-h-250 tb"></div>
      </main>
    </div>
  );
}
