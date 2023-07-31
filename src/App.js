import { useEffect, useState } from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className="h-screen bg-blue-400 dark:bg-black flex justify-center items-center">
      <button
        className="bg-blue-600 p-4 rounded-3xl"
        onClick={handleThemeSwitch}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default App;
