import type { SkillItem } from "@/types/portfolio";

export const languageSkills: SkillItem[] = [
    {
        name: "Español",
        percentage: 100,
        category: "language",
    },
    {
        name: "Inglés",
        percentage: 65,
        category: "language",
    },
];

export const programmingSkills: SkillItem[] = [
    {
        name: "Python",
        percentage: 80,
        category: "programming",
    },
    {
        name: "Java",
        percentage: 75,
        category: "programming",
    },
    {
        name: "TypeScript",
        percentage: 70,
        category: "programming",
    },
    {
        name: "JavaScript",
        percentage: 70,
        category: "programming",
    },
    {
        name: "C#",
        percentage: 70,
        category: "programming",
    },
    {
        name: "SQL",
        percentage: 75,
        category: "programming",
    },
    {
        name: "Kotlin",
        percentage: 60,
        category: "programming",
    },
];

export const extraSkills: SkillItem[] = [
    {
        name: "Desarrollo backend",
        category: "extra",
    },
    {
        name: "APIs REST",
        category: "extra",
    },
    {
        name: "Bases de datos",
        category: "extra",
    },
    {
        name: "Inteligencia artificial aplicada",
        category: "extra",
    },
    {
        name: "Análisis de datos",
        category: "extra",
    },
    {
        name: "Trabajo en equipo",
        category: "extra",
    },
];

export const skills: SkillItem[] = [
    ...languageSkills,
    ...programmingSkills,
    ...extraSkills,
];