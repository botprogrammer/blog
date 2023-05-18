import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") {
      setTheme("dark");
    }
  }, [setTheme, theme]);

  return (
    <div className="inline-flex items-center cursor-pointer">
      <SunIcon className="w-4 h-4 mr-2" />
      <select
        className="cursor-pointer"
        name="themeSwitch"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
