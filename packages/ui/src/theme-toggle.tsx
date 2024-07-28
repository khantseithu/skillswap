"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-app-theme/use-theme";
import { Switch } from "./switch";
import { Label } from "./label";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "dark" ? <Sun /> : <Moon />;

  return (
    // <button type="button" onClick={toggleTheme}>
    // 	{icon}
    // </button>
    <div className="flex items-center space-x-2">
      <Switch id="theme-switch" onClick={toggleTheme} />
      <Label htmlFor="theme-switch">Dark Mode</Label>
    </div>
  );
}
