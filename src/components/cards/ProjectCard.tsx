"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectItem } from "@/types/portfolio";
import { Button, LinkButton } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

interface ProjectCardProps {
    projectItem: ProjectItem;
}

export function ProjectCard({ projectItem }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <article className="group w-80 shrink-0 overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image src={projectItem.image} alt={`Imagen del proyecto ${projectItem.title}`} width={420} height={260} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>

                <div className="flex min-h-64 flex-col p-6">
                    <h3 className="mb-3 text-lg font-semibold text-slate-900">
                        {projectItem.title}
                    </h3>

                    <p className="mb-5 flex-1 text-sm leading-6 text-slate-500">
                        {projectItem.shortDescription}
                    </p>

                    <Button size="small" onClick={handleOpenModal}>
                        Saber más
                    </Button>
                </div>
            </article>

            <Modal isOpen={isModalOpen} title={projectItem.title} onClose={handleCloseModal}>
                <div className="space-y-6">
                    <p>
                        {projectItem.detailedDescription}
                    </p>

                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-slate-900">
                            Tecnologías utilizadas
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {projectItem.technologies.map((technology) => (
                                <span key={technology} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {(projectItem.repositoryUrl || projectItem.demoUrl) && (
                        <div className="flex flex-wrap gap-3 pt-2">
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
                    )}
                </div>
            </Modal>
        </>
    );
}