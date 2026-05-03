import Image from "next/image";
import { Check } from "lucide-react";
import { profile } from "@/data/profile";
import { extraSkills, languageSkills, programmingSkills } from "@/data/skills";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function LeftSidebar() {
    return (
        <aside className="hidden h-screen w-80 shrink-0 overflow-y-auto bg-white shadow-sm xl:block">
            <div className="flex flex-col items-center border-b border-slate-100 px-8 py-8 text-center">
                <div className="relative mb-5 h-32 w-32 overflow-hidden rounded-full bg-slate-100 ring-4 ring-emerald-100">
                    <Image src={profile.profileImage} alt={`Foto de perfil de ${profile.fullName}`} fill sizes="128px" className="object-cover" />
                </div>

                <h1 className="text-xl font-bold text-slate-900">
                    {profile.fullName}
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {profile.title}
                </p>
            </div>

            <div className="space-y-8 px-8 py-8">
                <section>
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                        Contacto
                    </h2>

                    <div className="space-y-4">
                        {profile.contactItems.map((contactItem) => {
                            const Icon = contactItem.icon;

                            return (
                                <div key={contactItem.label} className="flex items-start gap-3 text-sm">
                                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                                        <Icon size={16} />
                                    </span>

                                    <div>
                                        <p className="font-medium text-slate-900">
                                            {contactItem.label}
                                        </p>

                                        {contactItem.href ? (
                                            <a href={contactItem.href} className="break-all text-slate-500 transition-colors hover:text-emerald-600">
                                                {contactItem.value}
                                            </a>
                                        ) : (
                                            <p className="text-slate-500">
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
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                        Idiomas
                    </h2>

                    <div className="space-y-4">
                        {languageSkills.map((skill) => (
                            <ProgressBar key={skill.name} label={skill.name} percentage={skill.percentage ?? 0} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                        Lenguajes
                    </h2>

                    <div className="space-y-4">
                        {programmingSkills.map((skill) => (
                            <ProgressBar key={skill.name} label={skill.name} percentage={skill.percentage ?? 0} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                        Habilidades extra
                    </h2>

                    <ul className="space-y-3">
                        {extraSkills.map((skill) => (
                            <li key={skill.name} className="flex items-center gap-3 text-sm text-slate-500">
                                <Check size={16} className="shrink-0 text-emerald-500" />
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </aside>
    );
}