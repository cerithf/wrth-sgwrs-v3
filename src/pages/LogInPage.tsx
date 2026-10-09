import Icon from "../components/Icon";
import { useState } from "react";

export default function LogInPage() {
  const [newUser, setNewUser] = useState(false);

  function LogInForm() {
    return (
      <form className="bg-theme-dark-green shadow-md flex flex-col gap-4 rounded-xl px-8 pt-6 pb-8 mb-4">
        <input
          className="shadow appearance-none bg-theme-cream border-theme-dark-green rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
        <input
          className="shadow appearance-none bg-theme-cream border-theme-dark-green rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
        <div className="flex items-end justify-between mt-5">
          <button
            className="bg-theme-green hover:bg-theme-cream text-white hover:text-theme-dark-green hover:cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3"
            type="button"
          >
            Log&nbsp;In
          </button>
          <span className="text-theme-cream text-sm text-right">
            Don't have an account?{" "}
            <button
              className="font-bold hover:cursor-pointer"
              onClick={() => setNewUser(true)}
            >
              Sign&nbsp;up!
            </button>
          </span>
        </div>
      </form>
    );
  }

  function SignUpForm() {
    return (
      <form className="bg-theme-dark-green shadow-md flex flex-col gap-4 rounded-xl px-8 pt-6 pb-8 mb-4">
        <div className="form-heading">
          <button
            className="text-theme-cream font-bold flex items-center gap-1 text-sm w-fit hover:cursor-pointer"
            onClick={() => setNewUser(false)}
          >
            <Icon variant="chevron-left" size="size-4" strokeWidth={3} />
            Back
          </button>
          <h3 className="text-theme-cream text-right">Create an account</h3>
        </div>

        <input
          className="shadow appearance-none bg-theme-cream border-theme-dark-green rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Create a username"
        />
        <input
          className="shadow appearance-none bg-theme-cream border-theme-dark-green rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Create a password"
        />
        <input
          className="shadow appearance-none bg-theme-cream border-theme-dark-green rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="display_name"
          type="text"
          placeholder="What's your name? (optional)"
        />
        <div className="flex items-end justify-between mt-5">
          <button
            className="bg-theme-green hover:bg-theme-cream text-white hover:text-theme-dark-green hover:cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3"
            type="button"
          >
            Sign&nbsp;up
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="log-in-page h-screen flex flex-column">
      <div className="lg:flex mt-auto mb-auto w-full xl:px-20">
        <div className="flex-1 px-10">
          <img
            src="../src/assets/ws_glass_logo.png"
            alt=""
            className="w-30 justify-self-center ml-auto mr-auto"
          />
          <p className="text-theme-red text-center! header-font! text-2xl">
            Welcome to
          </p>
          <h1 className="text-theme-red text-center text-7xl! mb-3">
            WrthSgwrs
          </h1>
          <p className="text-center! py-6 mx-12">
            <strong className="text-theme-red">WrthSgwrs</strong> is a web app
            to help you practise speaking Welsh in a simple, accessible way. You
            can use it to have short conversations with an AI in Welsh, giving
            you a chance to try out everyday language and build your confidence
            speaking Welsh.
          </p>
        </div>
        <div className="flex-1 mt-5 lg:mt-0 flex justify-center items-center">
          <div className="log-in-form w-3/4 max-w-100">
            {!newUser ? <LogInForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
