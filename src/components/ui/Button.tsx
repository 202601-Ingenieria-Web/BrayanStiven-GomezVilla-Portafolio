import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "small" | "medium";

interface ButtonStyleProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

type ButtonProps = ButtonStyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = ButtonStyleProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        external?: boolean;
    };

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600",
    secondary: "border border-emerald-500 text-emerald-600 hover:bg-emerald-50",
    ghost: "text-slate-600 hover:bg-slate-100",
};

const sizeClasses: Record<ButtonSize, string> = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
};

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className: string) {
    return [
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className,
    ].join(" ");
}

export function Button({ children, variant = "primary", size = "medium", className = "", type = "button", ...props }: ButtonProps) {
    const buttonClasses = getButtonClasses(variant, size, className);

    return (
        <button type={type} className={buttonClasses} {...props}>
            {children}
        </button>
    );
}

export function LinkButton({ children, variant = "primary", size = "medium", className = "", external = false, href, ...props }: LinkButtonProps) {
    const buttonClasses = getButtonClasses(variant, size, className);

    return (
        <a href={href} className={buttonClasses} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...props}>
            {children}
        </a>
    );
}