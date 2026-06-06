import { useContext } from "react";
import { translations } from "../data/translation";
import { GoalContext } from "../context/GoalContext";
import React from "react";

function Setting() {
  const { language, setLanguage } = useContext(GoalContext);
  const { theme, setTheme } = useContext(GoalContext);
  const t = translations[language];
  return (
    <div
      className="
 max-w-xl
 mx-auto
 p-6
"
    >
      <h1
        className="
 text-3xl
 font-bold
 mb-6
 "
      >
        {t.settings}
      </h1>
      <h2
        className="
 text-xl
 mb-4
 "
      >
        Language
      </h2>
      <button
        onClick={() => setLanguage("en")}
        className={`border
 px-4
 py-2
 rounded
 cursor-pointer
 mr-2
 ${language === "en" ? "bg-green-500 text-white" : ""}`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("fa")}
        className={`border
 px-4
 py-2
 rounded
 cursor-pointer
 ${language === "fa" ? "bg-green-500 text-white" : ""}`}
      >
        فارسی
      </button>

      <h2
        className="
 text-xl
 mt-8
 mb-4
 "
      >
        Theme
      </h2>
      <button
        onClick={() => setTheme("light")}
        className={`
    px-4
    py-2
    rounded
    border
cursor-pointer
    ${theme === "light" ? "bg-blue-500 text-white" : ""}
  `}
      >
        {t.light}
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`
    px-4
    py-2
    rounded
    border
cursor-pointer
    ${theme === "dark" ? "bg-blue-500 text-white" : ""}
  `}
      >
        {t.dark}
      </button>
    </div>
  );
}

export default Setting;
