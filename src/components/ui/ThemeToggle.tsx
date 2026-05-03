"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = savedTheme ?? (prefersDarkMode ? "dark" : "light");

        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setIsMounted(true);
    }, []);

    const handleToggleTheme = () => {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark";

        setTheme(nextTheme);
        localStorage.setItem(STORAGE_KEY, nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
    };

    if (!isMounted) {
        return (
            <button type="button" aria-label="Cambiar tema" className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500 shadow-sm transition-all duration-200 dark:bg-slate-800 dark:text-slate-300">
                <Sun size={20} />
            </button>
        );
    }

    return (
        <button type="button" aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"} title={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"} onClick={handleToggleTheme} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-emerald-500 dark:hover:text-white dark:focus:ring-offset-slate-900">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}