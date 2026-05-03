import type { SocialLink } from "@/types/portfolio";

interface SocialIconLinkProps {
    socialLink: SocialLink;
}

export function SocialIconLink({ socialLink }: SocialIconLinkProps) {
    const Icon = socialLink.icon;

    return (
        <a href={socialLink.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir perfil de ${socialLink.name}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
            <Icon size={20} />
        </a>
    );
}