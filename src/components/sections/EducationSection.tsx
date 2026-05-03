import { educationItems } from "@/data/education";
import { EducationCard } from "@/components/cards/EducationCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EducationSection() {
    return (
        <section id="educacion" className="py-16">
            <SectionHeader title="Educación" description="Formación académica y técnica que ha fortalecido mi perfil como desarrollador de software e ingeniero de sistemas en formación." />

            <div className="space-y-6">
                {educationItems.map((educationItem) => (
                    <EducationCard key={`${educationItem.institution}-${educationItem.title}`} educationItem={educationItem} />
                ))}
            </div>
        </section>
    );
}