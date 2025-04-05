"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useTheme } from "next-themes";

const motionVariants: Variants = {
  initial: { y: 10, opacity: 0, filter: "blur(2px)" },
  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
  exit: { y: -10, opacity: 0, filter: "blur(2px)" },
};

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const themes = ["blue", "green", "red"];

  const toggleTheme = () => {
    const currentThemeIndex = themes.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[nextThemeIndex]);
  };

  return (
    <div className="bg-accent text-light-green px-1 rounded-sm py-1 leading-none">
      <button type="button" onClick={toggleTheme}>
        a
      </button>
    </div>
  );
};

// ... existing code ...

export default ThemeChanger;
