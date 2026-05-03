import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { SocialLink } from "@/types/portfolio";

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/brayan6264",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/brayan-gomez-backend",
        icon: FaLinkedinIn,
    },
];