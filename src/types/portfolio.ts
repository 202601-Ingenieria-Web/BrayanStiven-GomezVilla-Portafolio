import type { ElementType } from "react";

export type SkillCategory = "language" | "programming" | "extra";

export interface ContactItem {
    label: string;
    value: string;
    href?: string;
    icon: ElementType;
}

export interface SkillItem {
    name: string;
    percentage?: number;
    category: SkillCategory;
}

export interface Profile {
    fullName: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    city: string;
    phone: string;
    email: string;
    profileImage: string;
    heroImage: string;
    contactItems: ContactItem[];
}

export interface KnowledgeItem {
    title: string;
    description: string;
    icon: ElementType;
}

export interface EducationItem {
    institution: string;
    period: string;
    title: string;
    description: string;
    role?: string;
}

export interface ProjectItem {
    title: string;
    shortDescription: string;
    detailedDescription: string;
    image: string;
    technologies: string[];
    repositoryUrl?: string;
    demoUrl?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: ElementType;
}