import DictionaryData from "../../data/eurfa_dictionary/abridged_dictionary.json";
import { useState } from "react";
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
            className="bg-theme-cream rounded-lg w-full p-1 text-black"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn bg-theme-cream text-theme-dark-green px-5 m-0">
            Search
          </button>
        </form>
      </div>
      {searchQuery}
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
            <a
              href="#"
              className="text-theme-dark-green font-bold ml-auto flex align-middle gap-1"
            >
              <span>Back to top</span>
              <Icon variant="chevron-up" strokeWidth={2.5} />
            </a>
          </span>
          <DictionaryBrowseSection data={getWordsWithLetter(letter)} />
          <hr className="mt-4" />
        </>
      ))}
    </div>
  );
}
