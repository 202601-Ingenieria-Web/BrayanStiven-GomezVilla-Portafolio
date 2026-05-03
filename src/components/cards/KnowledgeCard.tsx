import type { KnowledgeItem } from "@/types/portfolio";

interface KnowledgeCardProps {
    knowledgeItem: KnowledgeItem;
}

export function KnowledgeCard({ knowledgeItem }: KnowledgeCardProps) {
    const Icon = knowledgeItem.icon;

    return (
        <article className="group flex min-h-56 flex-col items-center justify-center bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                <Icon size={36} strokeWidth={1.8} />
            </div>

            <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {knowledgeItem.title}
            </h3>

            <p className="text-sm leading-6 text-slate-500">
                {knowledgeItem.description}
            </p>
        </article>
    );
}