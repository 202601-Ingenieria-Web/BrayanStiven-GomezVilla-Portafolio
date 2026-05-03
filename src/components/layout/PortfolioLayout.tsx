import type { ReactNode } from "react";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { MobileSidebarController } from "@/components/layout/MobileSidebarController";
import { RightSidebar } from "@/components/layout/RightSidebar";

interface PortfolioLayoutProps {
    children: ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
    return (
        <div className="min-h-dvh overflow-hidden bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <MobileSidebarController />

            <div className="mx-auto flex min-h-dvh max-w-[1600px]">
                <LeftSidebar />

                {/* The main container owns the vertical scroll to keep the desktop sidebars fixed. */}
                <main id="portfolio-main-content" className="h-dvh flex-1 overflow-y-auto px-4 py-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    {children}
                </main>

                <RightSidebar />
            </div>
        </div>
    );
}