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
        <section id="perfil" className="relative overflow-hidden bg-white px-6 py-10 shadow-sm md:px-10 lg:px-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
                        <Sparkles size={16} />
                        Portafolio profesional
                    </span>

                    <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                        Hola, soy {profile.fullName}
                    </h1>

                    <p className="mt-4 text-xl font-semibold text-emerald-600">
                        {profile.title}
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                        {profile.shortDescription}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button onClick={handleOpenModal}>
                            Ver perfil completo
                            <ArrowRight size={18} />
                        </Button>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <article className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                            <Code2 className="mb-3 text-emerald-500" size={28} />
                            <h2 className="text-sm font-semibold text-slate-900">
                                Enfoque técnico
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Desarrollo web, backend, datos e inteligencia artificial aplicada.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                            <Briefcase className="mb-3 text-emerald-500" size={28} />
                            <h2 className="text-sm font-semibold text-slate-900">
                                Experiencia actual
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Desarrollador en Innovati Software desde febrero de 2026.
                            </p>
                        </article>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="relative h-80 w-72 rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-slate-100 md:h-96 md:w-80">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                            <Image src={profile.heroImage} alt={`Foto profesional de ${profile.fullName}`} fill sizes="(max-width: 768px) 288px, 320px" className="object-cover" priority />
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} title="Perfil profesional" onClose={handleCloseModal}>
                <div className="space-y-5">
                    <p>
                        {profile.detailedDescription}
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-emerald-50 p-4">
                            <h3 className="text-sm font-semibold text-slate-900">
                                Experiencia reciente
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Auxiliar de programación en la OAI de la Universidad de Antioquia entre junio de 2025 y enero de 2026.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-emerald-50 p-4">
                            <h3 className="text-sm font-semibold text-slate-900">
                                Rol actual
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Desarrollador en Innovati Software desde febrero de 2026 hasta la actualidad.
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    );
}