"use client";

import { Switch } from "@nextui-org/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      isSelected={theme === "dark"} // Set selected based on the current theme
      size="md"
      color="primary" 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Moon className={className} size={14} />
        ) : (
          <Sun className={className} size={14} />
        )
      }
    />
  );
};
