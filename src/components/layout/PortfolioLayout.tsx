import type { ReactNode } from "react";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";

interface PortfolioLayoutProps {
    children: ReactNode;
}

// The central content scrolls independently to preserve the fixed sidebars required by the portfolio layout.
export function PortfolioLayout({ children }: PortfolioLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="mx-auto flex min-h-screen max-w-[1600px]">
                <LeftSidebar />

                <main id="portfolio-main-content" className="h-screen flex-1 overflow-y-auto px-5 py-6 md:px-8 lg:px-10 xl:px-12">
                    {children}
                </main>

                <RightSidebar />
            </div>
        </div>
    );
}