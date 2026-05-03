import type { CSSProperties } from "react";
import { socialLinks } from "@/data/socialLinks";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type SidebarMode = "desktop" | "mobile";

interface RightSidebarProps {
    mode?: SidebarMode;
    style?: CSSProperties;
}

const sidebarClasses: Record<SidebarMode, string> = {
    desktop: "hidden h-dvh w-20 shrink-0 bg-white shadow-sm transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/40 xl:flex xl:flex-col xl:items-center xl:justify-center",
    mobile: "fixed right-0 top-0 z-[9000] flex h-dvh w-24 max-w-[26vw] flex-col items-center justify-center bg-white shadow-2xl transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/60 xl:hidden",
};

export function RightSidebar({ mode = "desktop", style }: RightSidebarProps) {
    return (
        <aside style={style} className={sidebarClasses[mode]}>
            <nav aria-label="Accesos rápidos del portafolio" className="flex flex-col items-center gap-4">
                <ThemeToggle />

                <div className="my-2 h-px w-8 bg-slate-200 dark:bg-slate-800" />

                {socialLinks.map((socialLink) => (
                    <SocialIconLink key={socialLink.name} socialLink={socialLink} />
                ))}
            </nav>
        </aside>
    );
}