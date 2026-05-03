import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Brayan Gómez | Portafolio",
    description: "Portafolio profesional de Brayan Stiven Gómez Villa, desarrollador de software e ingeniero de sistemas en formación.",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="es" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
            <body className="min-h-full bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
                {children}
            </body>
        </html>
    );
}