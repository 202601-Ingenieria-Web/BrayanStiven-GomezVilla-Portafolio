import { EducationSection } from "@/components/sections/EducationSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";

export default function Home() {
    return (
        <PortfolioLayout>
            <HeroSection />
            <KnowledgeSection />
            <EducationSection />
            <PortfolioSection />
            <Footer />
        </PortfolioLayout>
    );
}