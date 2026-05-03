interface SectionHeaderProps {
    title: string;
    description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
        <header className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
            <h2 className="text-2xl font-bold text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:text-3xl md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-sm leading-6 text-slate-500 transition-colors duration-300 dark:text-slate-400 md:text-base">
                    {description}
                </p>
            )}
        </header>
    );
}