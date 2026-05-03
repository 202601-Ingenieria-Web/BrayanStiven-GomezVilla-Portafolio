"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectItem } from "@/types/portfolio";
import { Button, LinkButton } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

interface ProjectCardProps {
    projectItem: ProjectItem;
    onModalStateChange?: (isOpen: boolean) => void;
}

export function ProjectCard({ projectItem, onModalStateChange }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        onModalStateChange?.(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        onModalStateChange?.(false);
    };

    return (
        <>
            <article className="group grid w-full overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[1.15fr_0.85fr]">
                <div className="flex items-center justify-center bg-slate-100 p-6 md:min-h-[420px] md:p-8">
                    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm md:min-h-[340px]">
                        <Image src={projectItem.image} alt={`Imagen del proyecto ${projectItem.title}`} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]" />
                    </div>
                </div>

                <div className="flex min-h-[420px] flex-col justify-center p-8 md:p-10">
                    <h3 className="mb-4 text-2xl font-bold leading-snug text-slate-900">
                        {projectItem.title}
                    </h3>

                    <p className="mb-6 text-base leading-8 text-slate-500">
                        {projectItem.shortDescription}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                        {projectItem.technologies.slice(0, 4).map((technology) => (
                            <span key={technology} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                                {technology}
                            </span>
                        ))}
                    </div>

                    <Button size="medium" className="w-full max-w-xs" onClick={handleOpenModal}>
                        Saber más
                    </Button>
                </div>
            </article>

            <Modal isOpen={isModalOpen} title={projectItem.title} onClose={handleCloseModal}>
                <div className="space-y-5">
                    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="mb-3 text-base font-bold text-slate-900">
                            Resumen del proyecto
                        </h3>

                        <p className="text-sm leading-7 text-slate-600">
                            {projectItem.detailedDescription}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-base font-bold text-slate-900">
                                Tecnologías utilizadas
                            </h3>

                            <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                {projectItem.technologies.length} tecnologías
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {projectItem.technologies.map((technology) => (
                                <span key={technology} className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </section>

                    {(projectItem.repositoryUrl || projectItem.demoUrl) && (
                        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <h3 className="mb-4 text-base font-bold text-slate-900">
                                Enlaces del proyecto
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {projectItem.repositoryUrl && (
                                    <LinkButton href={projectItem.repositoryUrl} external size="small" variant="secondary">
                                        Ver código
                                    </LinkButton>
                                )}

                                {projectItem.demoUrl && (
                                    <LinkButton href={projectItem.demoUrl} external size="small">
                                        Ver demo
                                    </LinkButton>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </Modal>
        </>
    );
}