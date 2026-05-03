"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { projectItems } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const AUTO_SLIDE_INTERVAL = 5000;
const TRANSITION_DURATION = 220;

export function PortfolioSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const transitionTimeout = useRef<number | null>(null);

    const changeProject = useCallback((nextIndex: number) => {
        if (nextIndex === currentIndex || isProjectModalOpen) {
            return;
        }

        setIsVisible(false);

        if (transitionTimeout.current) {
            window.clearTimeout(transitionTimeout.current);
        }

        transitionTimeout.current = window.setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsVisible(true);
        }, TRANSITION_DURATION);
    }, [currentIndex, isProjectModalOpen]);

    const handlePreviousProject = () => {
        const previousIndex = currentIndex === 0 ? projectItems.length - 1 : currentIndex - 1;
        changeProject(previousIndex);
    };

    const handleNextProject = useCallback(() => {
        const nextIndex = (currentIndex + 1) % projectItems.length;
        changeProject(nextIndex);
    }, [changeProject, currentIndex]);

    const handleSelectProject = (projectIndex: number) => {
        changeProject(projectIndex);
    };

    useEffect(() => {
        if (isProjectModalOpen) {
            return;
        }

        const interval = window.setInterval(handleNextProject, AUTO_SLIDE_INTERVAL);

        return () => {
            window.clearInterval(interval);

            if (transitionTimeout.current) {
                window.clearTimeout(transitionTimeout.current);
            }
        };
    }, [handleNextProject, isProjectModalOpen]);

    const currentProject = projectItems[currentIndex];

    return (
        <section id="portafolio" className="py-16">
            <SectionHeader title="Portafolio" description="Selección de proyectos desarrollados en áreas como inteligencia artificial, ciencia de datos, backend, aplicaciones web y sistemas empresariales." />

            <div className="relative mx-auto max-w-5xl">
                <button type="button" aria-label="Ver proyecto anterior" onClick={handlePreviousProject} className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 md:-translate-x-6">
                    <ChevronLeft size={24} />
                </button>

                <div className={`px-8 transition-all duration-300 ease-out md:px-10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                    <ProjectCard projectItem={currentProject} onModalStateChange={setIsProjectModalOpen} />
                </div>

                <button type="button" aria-label="Ver proyecto siguiente" onClick={handleNextProject} className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 md:translate-x-6">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="mt-8 flex justify-center gap-3">
                {projectItems.map((projectItem, projectIndex) => (
                    <button type="button" key={projectItem.title} aria-label={`Ver proyecto ${projectIndex + 1}`} onClick={() => handleSelectProject(projectIndex)} className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${currentIndex === projectIndex ? "w-8 bg-emerald-500" : "w-3 bg-slate-300 hover:bg-emerald-300"}`} />
                ))}
            </div>
        </section>
    );
}