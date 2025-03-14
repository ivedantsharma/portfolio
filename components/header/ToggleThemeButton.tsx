import { useEffect, useState } from "react";
import SwitchButton from "./SwitchButton";

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState("light");

  // Sync theme state with localStorage and HTML class
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "dark");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return <SwitchButton toggleTheme={toggleTheme} isDark={theme === "dark"} />;
};

export default ToggleThemeButton;
