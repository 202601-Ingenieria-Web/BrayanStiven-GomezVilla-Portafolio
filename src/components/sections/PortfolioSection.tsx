import { projectItems } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PortfolioSection() {
    return (
        <section id="portafolio" className="py-16">
            <SectionHeader title="Portafolio" description="Selección de proyectos desarrollados en áreas como inteligencia artificial, ciencia de datos, backend, aplicaciones web y sistemas empresariales." />

            <div className="-mx-5 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] md:-mx-8 md:px-8 lg:-mx-10 lg:px-10 xl:-mx-12 xl:px-12" aria-label="Listado horizontal de proyectos">
                <div className="flex gap-6">
                    {projectItems.map((projectItem) => (
                        <ProjectCard key={projectItem.title} projectItem={projectItem} />
                    ))}
                </div>
            </div>
        </section>
    );
}