import type { CSSProperties } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { profile } from "@/data/profile";
import { extraSkills, languageSkills, programmingSkills } from "@/data/skills";
import { ProgressBar } from "@/components/ui/ProgressBar";

type SidebarMode = "desktop" | "mobile";

interface LeftSidebarProps {
    mode?: SidebarMode;
    style?: CSSProperties;
}

const sidebarClasses: Record<SidebarMode, string> = {
    desktop: "hidden h-dvh w-80 shrink-0 overflow-y-auto bg-white shadow-sm transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/40 xl:block",
    mobile: "fixed left-0 top-0 z-[9000] block h-dvh w-80 max-w-[84vw] overflow-y-auto bg-white shadow-2xl transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/60 xl:hidden",
};

export function LeftSidebar({ mode = "desktop", style }: LeftSidebarProps) {
    return (
        <aside style={style} className={sidebarClasses[mode]}>
            <div className="flex flex-col items-center border-b border-slate-100 px-6 py-7 text-center dark:border-slate-800 md:px-8 md:py-8">
                <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-4 ring-emerald-100 dark:bg-slate-800 dark:ring-emerald-500/20 md:h-32 md:w-32">
                    <Image src={profile.profileImage} alt={`Foto de perfil de ${profile.fullName}`} fill sizes="128px" className="object-cover" />
                </div>

                <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 md:text-xl">
                    {profile.fullName}
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {profile.title}
                </p>
            </div>

            {/* This content is reused by the desktop sidebar and the mobile sliding panel. */}
            <div className="space-y-7 px-6 py-7 md:space-y-8 md:px-8 md:py-8">
                <section>
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                        Contacto
                    </h2>

                    <div className="space-y-4">
                        {profile.contactItems.map((contactItem) => {
                            const Icon = contactItem.icon;

                            return (
                                <div key={contactItem.label} className="flex items-start gap-3 text-sm">
                                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        <Icon size={16} />
                                    </span>

                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">
                                            {contactItem.label}
                                        </p>

                                        {contactItem.href ? (
                                            <a href={contactItem.href} className="break-all text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400">
                                                {contactItem.value}
                                            </a>
                                        ) : (
                                            <p className="text-slate-500 dark:text-slate-400">
                                                {contactItem.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                        Idiomas
                    </h2>

                    <div className="space-y-4">
                        {languageSkills.map((skill) => (
                            <ProgressBar key={skill.name} label={skill.name} percentage={skill.percentage ?? 0} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                        Lenguajes
                    </h2>

                    <div className="space-y-4">
                        {programmingSkills.map((skill) => (
                            <ProgressBar key={skill.name} label={skill.name} percentage={skill.percentage ?? 0} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                        Habilidades extra
                    </h2>

                    <ul className="space-y-3">
                        {extraSkills.map((skill) => (
                            <li key={skill.name} className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                <Check size={16} className="shrink-0 text-emerald-500 dark:text-emerald-400" />
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </aside>
    );
}