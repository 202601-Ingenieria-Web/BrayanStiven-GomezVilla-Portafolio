import { EducationCard } from "@/components/cards/EducationCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { educationItems } from "@/data/education";

export function EducationSection() {
    return (
        <section id="educacion" className="py-14 md:py-16">
            <SectionHeader title="Educación" description="Formación académica y técnica que ha fortalecido mi perfil como desarrollador de software, científico de datos e ingeniero de sistemas en formación." />

            <div className="space-y-5 md:space-y-6">
                {educationItems.map((educationItem) => (
                    <EducationCard key={`${educationItem.institution}-${educationItem.title}`} educationItem={educationItem} />
                ))}
            </div>
        </section>
    );
}