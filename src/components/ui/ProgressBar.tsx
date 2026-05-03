interface ProgressBarProps {
    label: string;
    percentage: number;
}

export function ProgressBar({ label, percentage }: ProgressBarProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600">{label}</span>
                <span className="text-slate-500">{percentage}%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-emerald-500 transition-all duration-500" style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}