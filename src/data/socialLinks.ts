import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
    {
        name: "Instagram",
        url: "https://www.instagram.com/brayang6264",
        icon: FaInstagram,
    },
];