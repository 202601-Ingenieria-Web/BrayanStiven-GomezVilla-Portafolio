interface SectionHeaderProps {
    title: string;
    description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
        <header className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-sm leading-6 text-slate-500 md:text-base">
                    {description}
                </p>
            )}
        </header>
    );
}