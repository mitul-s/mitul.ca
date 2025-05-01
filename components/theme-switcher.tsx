"use client";

import { PaintRoller } from "@phosphor-icons/react";
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
    const currentThemeIndex = themes.indexOf(theme ?? themes[0]);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[nextThemeIndex]);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleTheme}
        className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1.5 pr-1.5 rounded-[2px] cursor-pointer h-full"
        aria-label="Change theme"
      >
        <PaintRoller
          className="shrink-0"
          size={12}
          aria-hidden={true}
          weight="fill"
        />
      </button>
    </div>
  );
};

// ... existing code ...

export default ThemeChanger;
