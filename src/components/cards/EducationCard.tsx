import type { EducationItem } from "@/types/portfolio";

interface EducationCardProps {
    educationItem: EducationItem;
}

export function EducationCard({ educationItem }: EducationCardProps) {
    return (
        <article className="bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        {educationItem.institution}
                    </h3>

                    <p className="mt-1 text-sm text-emerald-600">
                        {educationItem.period}
                    </p>
                </div>

                {educationItem.role && (
                    <span className="w-fit rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-600">
                        {educationItem.role}
                    </span>
                )}
            </div>

            <h4 className="mb-3 text-base font-semibold text-slate-800">
                {educationItem.title}
            </h4>

            <p className="text-sm leading-6 text-slate-500">
                {educationItem.description}
            </p>
        </article>
    );
}