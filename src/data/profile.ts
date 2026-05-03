import { Briefcase, Mail, MapPin, Phone } from "lucide-react";
import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
    fullName: "Brayan Stiven Gómez Villa",
    title: "Desarrollador de software",
    shortDescription:
        "Ingeniero de sistemas en formación con experiencia en desarrollo de software, ciencia de datos, inteligencia artificial y construcción de soluciones web.",
    detailedDescription:
        "Soy desarrollador de software e ingeniero de sistemas en formación de la Universidad de Antioquia. Tengo experiencia en desarrollo backend, análisis de datos, construcción de APIs, bases de datos, soluciones con inteligencia artificial y sistemas web. He trabajado como auxiliar de programación en la OAI de la Universidad de Antioquia y actualmente me desempeño como desarrollador en Innovati Software. Me interesa crear soluciones funcionales, claras y bien estructuradas, combinando buenas prácticas de desarrollo con pensamiento analítico y enfoque en el usuario.",
    city: "Medellín, Antioquia",
    phone: "+57 322 674 7533",
    email: "brayan6264@gmail.com",
    profileImage: "/images/profile/brayan-profile.jpg",
    heroImage: "/images/profile/brayan-profile.jpg",
    contactItems: [
        {
            label: "Ciudad",
            value: "Medellín, Antioquia",
            icon: MapPin,
        },
        {
            label: "Teléfono",
            value: "+57 322 674 7533",
            href: "tel:+573226747533",
            icon: Phone,
        },
        {
            label: "Correo",
            value: "brayan6264@gmail.com",
            href: "mailto:brayan6264@gmail.com",
            icon: Mail,
        },
        {
            label: "Rol actual",
            value: "Desarrollador en Innovati Software",
            icon: Briefcase,
        },
    ],
};