import NavBar from "../components/NavBar";
import Topics from "../data/conversation_topics.json";
import { useState } from "react";
import { TopicIcon } from "../components/Icon";
import BackToTop from "../components/BackToTop";

export default function Profile() {
  const [checkedIds, setCheckedIds] = useState(new Set());
  const learntTopics = Topics.filter((topic) => checkedIds.has(topic.id));

  const handleToggle = (id: number) => {
    setCheckedIds((current) => {
      const next = new Set(current); // copy, never mutate state directly
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  return (
    <div className="profile-page h-screen flex flex-col">
      <NavBar currentPage="profile" />
      <main className="py-3 px-6 gap-4 flex flex-col">
        <div className="heading md:flex gap-2">
          <h1 className="text-center leading-15">Hey, user! 👋</h1>
          <button className="btn-secondary ml-auto mt-5 md:mt-0">
            Give us some feedback!
          </button>
        </div>
        <div className="progress border p-4 card">
          <p className="text-lg">
            <span className="text-6xl font-mono font-bold">
              {checkedIds.size}
            </span>{" "}
            out of{" "}
            <span className="text-2xl font-mono font-bold">
              {Topics.length}
            </span>{" "}
            topics learnt
          </p>
          <div className="progress-bar flex-1 w-full bg-theme-green overflow-hidden rounded-xl mt-4">
            <div
              className="bg-theme-dark-green flex"
              style={{
                width: (checkedIds.size / Topics.length) * 100 + "%",
                transition: "width 1s ease",
              }}
            >
              {learntTopics.length < 1 ? (
                <div style={{ height: "48px" }} />
              ) : (
                learntTopics.map((topic) => (
                  <TopicIcon
                    svgPath={topic.svg_path}
                    colour="var(--color-theme-green)"
                    style={{ width: "100%", height: "48px" }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Topics.map((topic, index) => {
            return (
              <li
                key={"topic-" + index}
                className="topicCard card flex-1 flex overflow-hidden"
              >
                <input
                  type="checkbox"
                  name="learnt-checkbox"
                  className="accent-theme-green self-start scale-150 z-1 block"
                  checked={checkedIds.has(topic.id)}
                  onChange={() => handleToggle(topic.id)}
                />
                <TopicIcon
                  svgPath={topic.svg_path}
                  className="flex-1 relative right-3"
                />
                <div className="flex-3 flex flex-col">
                  <div className="py-4">
                    <h3 className="lh-1 m-0 p-0!">{topic.cy}</h3>
                    <p className="italic text-gray-500 lh-base! mt-1 p-0! text-left!">
                      {topic.en}
                    </p>
                  </div>
                  <button className="btn-secondary">🗣️ Practice</button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <BackToTop />
    </div>
  );
}
