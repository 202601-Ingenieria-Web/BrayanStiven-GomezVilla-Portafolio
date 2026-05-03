"use client";

import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
}

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
            <div
                className="absolute inset-0"
                role="button"
                tabIndex={0}
                aria-label="Cerrar diálogo"
                onClick={onClose}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        onClose();
                    }
                }}
                />

            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
                <header className="mb-5 flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                    <h2 id="modal-title" className="text-2xl font-bold text-slate-900">
                        {title}
                    </h2>

                    <button
                        type="button"
                        className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        aria-label="Cerrar diálogo"
                        onClick={onClose}>
                        <X size={20} />
                    </button>
                </header>

                <div className="text-sm leading-7 text-slate-600">
                    {children}
                </div>
            </section>
        </div>
    );
}