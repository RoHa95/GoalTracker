import { createContext, useEffect, useState } from "react";

export const GoalContext = createContext();

export function GoalProvider({ children }) {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");

    return saved ? JSON.parse(saved) : [];
  });
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem("xp");

    return saved ? JSON.parse(saved) : 0;
  });

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");

    return saved || "en";
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");

    return saved || "light";
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("streak");

    return saved ? JSON.parse(saved) : 0;
  });
  const [lastProgressDate, setLastProgressDate] = useState(() => {
    const saved = localStorage.getItem("lastProgressDate");

    return saved || null;
  });
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("xp", JSON.stringify(xp));
  }, [xp]);
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("streak", JSON.stringify(streak));
  }, [streak]);
  useEffect(() => {
    localStorage.setItem("lastProgressDate", lastProgressDate || "");
  }, [lastProgressDate]);
  return (
    <GoalContext.Provider
      value={{
        goals,
        setGoals,

        streak,
        setStreak,

        lastProgressDate,
        setLastProgressDate,

        xp,
        setXp,

        language,
        setLanguage,

        theme,
        setTheme,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
}
