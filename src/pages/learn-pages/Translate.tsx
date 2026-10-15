import { useState } from "react";

export default function Translate() {
  const translationDirections = ["English > Welsh", "Welsh > English"] as const;
  type TranslationDirection = (typeof translationDirections)[number];
  const [translationDirection, setTranslationDirection] =
    useState<TranslationDirection>(translationDirections[0]);
  return (
    <div className="translate-page">
      <div className="bg-theme-dark-green text-white rounded-xl p-4">
        <div className="md:flex flex-row-reverse gap-4 items-center">
          <ul className="flex gap-1 bg-theme-red rounded-full overflow-hidden text-center max-h-10 w-80 ml-auto">
            {translationDirections.map((option) => (
              <li
                className={
                  option == translationDirection
                    ? "bg-theme-cream text-theme-red font-bold p-4 rounded-full shadow-2xl flex-1 center-all"
                    : "p-4 rounded-full flex-1 center-all"
                }
              >
                <button
                  className="cursor-pointer"
                  onClick={() => setTranslationDirection(option)}
                >
                  {option.replaceAll(" ", " ")}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 md:mt-0 px-2 text-left! md:w-[50%] lg:w-auto">
            Write something in the box below to translate it.
            Type ⌘↵ to enter text.
          </p>
        </div>
        <textarea
          name="translate-field"
          id="translate-field"
          className="bg-theme-cream rounded-xl text-black p-4 w-full mt-6 min-h-30"
        />
        <button className="btn bg-theme-cream text-theme-dark-green px-5">
          Enter
        </button>
      </div>
    </div>
  );
}
