import { Icon } from "@iconify/react";
import { useContext, useEffect } from "react";
import Button from "./Button";
import { ThemeContext } from "../context/ThemeProvider";

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  document.body.classList.add("dark:bg-slate-900");

  return (
    <nav className="container mx-auto w-6/12 flex justify-between items-center pt-5">
      <h1 className="text-2xl font-semibold text-black dark:text-white">
        Button Collections
      </h1>

      <Button
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Icon
          icon={theme === "light" ? `ix:light-dark` : `circum:dark`}
          fontSize={22}
        />
      </Button>
    </nav>
  );
}
