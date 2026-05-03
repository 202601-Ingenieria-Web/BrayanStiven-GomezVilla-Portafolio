interface ProgressBarProps {
    label: string;
    percentage: number;
}

export function ProgressBar({ label, percentage }: ProgressBarProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600 dark:text-slate-300">
                    {label}
                </span>

                <span className="text-slate-500 dark:text-slate-400">
                    {percentage}%
                </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full rounded-full bg-emerald-500 transition-all duration-500 dark:bg-emerald-400" style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}