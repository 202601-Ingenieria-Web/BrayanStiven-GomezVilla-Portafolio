import { KnowledgeCard } from "@/components/cards/KnowledgeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { knowledgeItems } from "@/data/knowledge";

export function KnowledgeSection() {
    return (
        <section id="conocimientos" className="py-14 md:py-16">
            <SectionHeader title="Conocimientos" description="Áreas técnicas que he fortalecido mediante proyectos académicos, experiencia laboral y formación práctica." />

            <div className="grid gap-5 sm:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
                {knowledgeItems.map((knowledgeItem) => (
                    <KnowledgeCard key={knowledgeItem.title} knowledgeItem={knowledgeItem} />
                ))}
            </div>
        </section>
    );
}