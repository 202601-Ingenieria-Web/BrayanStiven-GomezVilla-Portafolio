import { BarChart3, BrainCircuit, Code2, Database, GitBranch, Server } from "lucide-react";
import type { KnowledgeItem } from "@/types/portfolio";

export const knowledgeItems: KnowledgeItem[] = [
    {
        title: "Desarrollo web",
        description:
            "Construcción de interfaces y aplicaciones web usando tecnologías modernas como React, Next.js, TypeScript y TailwindCSS.",
        icon: Code2,
    },
    {
        title: "Desarrollo backend",
        description:
            "Diseño e implementación de servicios, lógica de negocio y APIs para conectar aplicaciones con bases de datos y otros sistemas.",
        icon: Server,
    },
    {
        title: "Bases de datos",
        description:
            "Manejo de bases de datos relacionales y consultas SQL para almacenar, consultar y organizar información de forma eficiente.",
        icon: Database,
    },
    {
        title: "Inteligencia artificial",
        description:
            "Aplicación de modelos de lenguaje, sistemas RAG y herramientas como Langflow, DataStax Astra y OpenAI en soluciones funcionales.",
        icon: BrainCircuit,
    },
    {
        title: "Ciencia de datos",
        description:
            "Análisis, limpieza y procesamiento de datos usando Python, Pandas, Scikit-learn y herramientas orientadas a modelos predictivos.",
        icon: BarChart3,
    },
    {
        title: "Control de versiones",
        description:
            "Uso de Git y GitHub para gestionar cambios, colaborar en equipo y mantener un flujo de trabajo organizado durante el desarrollo.",
        icon: GitBranch,
    },
];