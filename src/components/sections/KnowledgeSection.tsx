import { knowledgeItems } from "@/data/knowledge";
import { KnowledgeCard } from "@/components/cards/KnowledgeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function KnowledgeSection() {
    return (
        <section id="conocimientos" className="py-16">
            <SectionHeader
                title="Conocimientos"
                description="Áreas técnicas en las que he desarrollado habilidades a través de proyectos académicos, experiencia laboral y formación práctica." />

            <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
                {knowledgeItems.map((knowledgeItem) => (
                    <KnowledgeCard key={knowledgeItem.title} knowledgeItem={knowledgeItem} />
                ))}
            </div>
        </section>
    );
}