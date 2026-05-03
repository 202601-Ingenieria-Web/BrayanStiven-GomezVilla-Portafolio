import { socialLinks } from "@/data/socialLinks";
import { SocialIconLink } from "@/components/ui/SocialIconLink";

export function RightSidebar() {
    return (
        <aside className="hidden h-screen w-28 shrink-0 bg-white shadow-sm xl:flex xl:flex-col xl:items-center xl:justify-center">
            <nav aria-label="Redes sociales" className="flex flex-col items-center gap-5">
                {socialLinks.map((socialLink) => (
                    <SocialIconLink key={socialLink.name} socialLink={socialLink} />
                ))}
            </nav>
        </aside>
    );
}