import type { KnowledgeItem } from "@/types/portfolio";

interface KnowledgeCardProps {
    knowledgeItem: KnowledgeItem;
}

export function KnowledgeCard({ knowledgeItem }: KnowledgeCardProps) {
    const Icon = knowledgeItem.icon;

    return (
        <article className="group flex min-h-56 flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 dark:shadow-slate-950/40 sm:p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-white">
                <Icon size={36} strokeWidth={1.8} />
            </div>

            <h3 className="mb-3 text-lg font-semibold text-slate-900 transition-colors duration-300 dark:text-slate-100">
                {knowledgeItem.title}
            </h3>

            <p className="text-sm leading-6 text-slate-500 transition-colors duration-300 dark:text-slate-400">
                {knowledgeItem.description}
            </p>
        </article>
    );
}