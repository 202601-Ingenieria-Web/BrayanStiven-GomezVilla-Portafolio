"use client";

import Image from "next/image";
import { ArrowRight, Briefcase, Code2, Sparkles } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="perfil" className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-8 shadow-sm transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/40 sm:px-6 md:px-10 md:py-10 lg:px-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <Sparkles size={16} />
                        Portafolio profesional
                    </span>

                    <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
                        Hola, soy {profile.fullName}
                    </h1>

                    <p className="mt-4 text-lg font-semibold text-emerald-600 dark:text-emerald-400 md:text-xl">
                        {profile.title}
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                        {profile.shortDescription}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button onClick={handleOpenModal}>
                            Ver perfil completo
                            <ArrowRight size={18} />
                        </Button>
                    </div>

                    {/* These summary cards make the profile section more informative without overloading the main description. */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <article className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
                            <Code2 className="mb-3 text-emerald-500 dark:text-emerald-400" size={28} />

                            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                Enfoque técnico
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Desarrollo web, backend, datos e inteligencia artificial aplicada.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
                            <Briefcase className="mb-3 text-emerald-500 dark:text-emerald-400" size={28} />

                            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                Experiencia actual
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Desarrollador en Innovati Software desde febrero de 2026.
                            </p>
                        </article>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="relative h-72 w-64 rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-slate-100 transition-colors duration-300 dark:bg-slate-950 dark:ring-slate-800 sm:h-80 sm:w-72 md:h-96 md:w-80">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-800">
                            <Image src={profile.heroImage} alt={`Foto profesional de ${profile.fullName}`} fill sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px" className="object-cover" priority />
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} title="Perfil profesional" eyebrow="Sobre mí" onClose={handleCloseModal}>
                <div className="space-y-5">
                    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="mb-3 text-base font-bold text-slate-900 dark:text-slate-100">
                            Resumen profesional
                        </h3>

                        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                            {profile.detailedDescription}
                        </p>
                    </section>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 transition-colors duration-300 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                Experiencia reciente
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Auxiliar de programación en la OAI de la Universidad de Antioquia entre junio de 2025 y enero de 2026.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 transition-colors duration-300 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                Rol actual
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Desarrollador en Innovati Software desde febrero de 2026 hasta la actualidad.
                            </p>
                        </section>
                    </div>
                </div>
            </Modal>
        </section>
    );
}