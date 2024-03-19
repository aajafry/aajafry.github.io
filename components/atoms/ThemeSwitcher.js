"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "light" ? (
        <button
          className="theme-switch text-[2rem] text-rose-500 outline-none border-0 transition duration-200 ease-linear fixed right-4 top-4 z-50 hover:text-rose-500"
          onClick={() => setTheme("dark")}
        >
          <FiMoon />
        </button>
      ) : (
        <button
          className="theme-switch text-[2rem] text-rose-500 outline-none border-0 transition duration-200 ease-linear fixed right-4 top-4 z-50 hover:text-rose-500"
          onClick={() => setTheme("light")}
        >
          <FiSun />
        </button>
      )}{" "}
    </>
  );
}
