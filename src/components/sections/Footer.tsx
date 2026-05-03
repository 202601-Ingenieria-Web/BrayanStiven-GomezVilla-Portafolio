import { Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
    return (
        <footer className="mt-10 border-t border-slate-200 py-8 transition-colors duration-300 dark:border-slate-800">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {profile.fullName}
                    </p>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Portafolio profesional desarrollado con Next.js, TypeScript y TailwindCSS.
                    </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 transition-colors duration-300 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <Code2 size={16} />
                    <span>Diseñado y desarrollado en 2026</span>
                </div>
            </div>
        </footer>
    );
}