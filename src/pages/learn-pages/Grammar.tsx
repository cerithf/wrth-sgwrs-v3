import BackToTop from "../../components/BackToTop";
import { marked } from "marked";
import { useState } from "react";

const markdownModules = import.meta.glob("../../data/grammar/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const markdownFiles = Object.entries(markdownModules).map(
  ([path, content]) => ({
    file: content as string,
    name: path.split("/").pop() ?? path, // extracts e.g. "01 - Alphabet.md"
  }),
);

export default function Grammar() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="grammar-page">
      <ul className="grid xxs-grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 bg-theme2 rounded-xl p-2">
        {markdownFiles.map((file) => (
          <li
            className="btn-primary center-all"
            onClick={() => setCurrentPage(markdownFiles.indexOf(file))}
          >
            {file.name.substring(5, file.name.length - 3).replace(", ", ", ")}
          </li>
        ))}
      </ul>
      <hr className="my-6 text-theme-dark-green" />
      {
        <div
          className="lg:mx-12"
          dangerouslySetInnerHTML={{
            __html: marked.parse(markdownFiles[currentPage].file),
          }}
        />
      }
    </div>
  );
}
