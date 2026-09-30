import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  type?: "button" | "submit";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "type">;

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "border border-border bg-surface text-ink hover:bg-slate-50",
  ghost: "text-ink hover:bg-slate-100",
};

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
