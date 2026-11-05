import DictionaryData from "../../data/eurfa_dictionary/abridged_dictionary.json";
import { useEffect, useState } from "react";
import BackToTop from "../../components/BackToTop";
import Icon from "../../components/Icon";

interface dictionaryEntryInterface {
  index: number;
  surface: string;
  lemma: string;
  enlemma: string;
  pos: string;
  gender: string;
  sort: string;
  clar: string;
  number: string;
  notes: string;
  extra: string;
}

export default function Dictionary() {
  const [searchQuery, setSearchQuery] = useState<string | undefined>("");
  const [exactMatchesOnly, setExactMatchesOnly] = useState(false);

  // prettier-ignore
  const welshAlphabet = [
    "a", "b", "c", "ch", "d", "dd", "e", "f", "ff", "g", "ng", "h", "i", "j", "l",
    "ll", "m", "n", "o", "p", "ph", "r", "rh", "s", "t", "th", "u", "w", "y",
  ];

  const wordGender = {
    m: "masculine noun",
    f: "feminine noun",
    mf: "masculine or feminine noun",
  } as const;

  type GenderAbbreviation = keyof typeof wordGender;

  const isGenderAbbreviation = (value: unknown): value is GenderAbbreviation =>
    typeof value === "string" && value in wordGender;

  function WordType({ entry }: { entry: dictionaryEntryInterface }) {
    if (entry.pos === "noun") {
      return isGenderAbbreviation(entry.gender)
        ? wordGender[entry.gender]
        : "noun";
    }
    return entry.pos;
  }

  function getWordsWithLetter(letter: string) {
    if (letter.length == 2) {
      return DictionaryData.filter(
        (entry) => entry.lemma.substring(0, 2) == letter,
      );
    } else {
      const doubleLetters = welshAlphabet.filter((char) => char.length == 2);
      return DictionaryData.filter(
        (entry) => entry.lemma.substring(0, 1) == letter,
      ).filter((entry) => !doubleLetters.includes(entry.lemma.substring(0, 2)));
    }
  }

  function DictionaryBrowseSection({
    data,
  }: {
    data: dictionaryEntryInterface[];
  }) {
    return (
      <div className="grid xxs-grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((entry) => (
          <div
            className="card bg-theme-dark-green shadow-md shadow-theme-dark-green text-white"
            key={"dictionary-entry-" + entry.index}
          >
            <h3>{entry.lemma}</h3>
            <p className="font-light italic p-0! m-0!">
              <WordType entry={entry} />
            </p>
            <p className="">{entry.enlemma}</p>
          </div>
        ))}
      </div>
    );
  }

  function handleChange(e: any): void {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get("query")?.toString();
    setSearchQuery(query);
  }

  return (
    <div className="dictionary-page">
      <div className="bg-theme-dark-green text-white rounded-xl p-4">
        <form method="get" className="flex gap-2" onChange={handleChange}>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Search"
            value={searchQuery}
            className="bg-theme-cream rounded-lg w-full p-1 pl-2 text-black"
          />
          {searchQuery != "" && (
            <button
              type="reset"
              className="text-theme-cream cursor-pointer"
              onClick={() => {
                setSearchQuery("");
              }}
            >
              <Icon variant="x-mark" />
            </button>
          )}
        </form>
      </div>
      {searchQuery == "" || searchQuery == undefined ? (
        <>
          <div className="alphabet font-bold flex flex-wrap gap-x-7 m-6 justify-center">
            {welshAlphabet.map((letter) => (
              <a href={"#" + letter} className="">
                {letter}
              </a>
            ))}
          </div>
          {welshAlphabet.map((letter: string) => (
            <>
              <span className="flex gap-4 items-end mb-1">
                <h2 id={letter} className="pt-8!">
                  {letter}
                </h2>
                <BackToTop />
              </span>
              <DictionaryBrowseSection data={getWordsWithLetter(letter)} />
              <hr className="mt-4" />
            </>
          ))}
        </>
      ) : (
        <>
          {!exactMatchesOnly ? (
            <>
              <div className="flex flex-col items-center mt-4 mb-2">
                <p className="text-xl m-0">
                  Showing results containing <b>"{searchQuery}".</b>
                </p>
                <button
                  className="m-0 text-theme-dark-green font-bold underline cursor-pointer"
                  onClick={() => setExactMatchesOnly(true)}
                >
                  Show exact matches only.
                </button>
              </div>
              <DictionaryBrowseSection
                data={DictionaryData.filter(
                  (entry) =>
                    entry.lemma.includes(searchQuery) ||
                    entry.enlemma.includes(searchQuery),
                )}
              />
            </>
          ) : (
            <>
              <div className="flex flex-col items-center mt-4 mb-2">
                <p className="text-xl m-0">
                  Showing results matching <b>"{searchQuery}"</b> exactly.
                </p>
                <button
                  className="m-0 text-theme-dark-green font-bold underline cursor-pointer"
                  onClick={() => setExactMatchesOnly(false)}
                >
                  Show more results.
                </button>
              </div>
              <DictionaryBrowseSection
                data={DictionaryData.filter(
                  (entry) =>
                    entry.lemma == searchQuery || entry.enlemma == searchQuery,
                )}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
