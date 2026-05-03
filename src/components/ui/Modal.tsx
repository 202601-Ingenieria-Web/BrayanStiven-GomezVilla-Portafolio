"use client";

import { X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    title: string;
    children: ReactNode;
    eyebrow?: string;
    onClose: () => void;
}

export function Modal({ isOpen, title, children, eyebrow = "Información destacada", onClose }: ModalProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const pageScrollContainer = document.getElementById("portfolio-main-content");
        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        const previousPageOverflow = pageScrollContainer?.style.overflowY ?? "";

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        // The page uses an internal scroll container, so the body and main content must be locked.
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        if (pageScrollContainer) {
            pageScrollContainer.style.overflowY = "hidden";
        }

        window.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;

            if (pageScrollContainer) {
                pageScrollContainer.style.overflowY = previousPageOverflow;
            }

            window.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen, onClose]);

    if (!isMounted || !isOpen) {
        return null;
    }

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/65 px-4 backdrop-blur-sm">
            <div className="absolute inset-0 cursor-pointer" role="button" tabIndex={0} aria-label="Cerrar diálogo" onClick={onClose} onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    onClose();
                }
            }} />

            <section role="dialog" aria-modal="true" aria-labelledby="modal-title" className="relative z-10 max-h-[88dvh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                <header className="flex items-start justify-between gap-4 border-b border-slate-200 bg-white px-5 py-5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:px-6 md:px-8">
                    <div>
                        <span className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            {eyebrow}
                        </span>

                        <h2 id="modal-title" className="text-xl font-bold leading-snug text-slate-900 dark:text-slate-100 sm:text-2xl md:text-3xl">
                            {title}
                        </h2>
                    </div>

                    <button type="button" className="cursor-pointer rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" aria-label="Cerrar diálogo" onClick={onClose}>
                        <X size={22} />
                    </button>
                </header>

                <div className="max-h-[65dvh] overflow-y-auto bg-slate-50 p-5 text-sm leading-7 text-slate-600 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-300 sm:p-6 md:p-8">
                    {children}
                </div>
            </section>
        </div>
    );

    // The portal keeps the modal outside transformed containers, so it can cover the full screen.
    return createPortal(modalContent, document.body);
}