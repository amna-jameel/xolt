import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  wordmark?: boolean;
};

export function Logo({ className, wordmark = true }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="28" height="28" rx="7" fill="#2563EB" />
        <path
          d="M7 18.5 11.2 9h2.1L17.5 18.5h-2.2l-.8-1.9h-4.2l-.8 1.9H7Zm3.6-3.6h3.2L12.2 11h-.1l-1.5 3.9Z"
          fill="white"
        />
        <path d="M18.2 18.5V9h2v9.5h-2Z" fill="white" />
      </svg>
      {wordmark ? (
        <span className="text-lg font-semibold tracking-tight text-ink">
          XOLT
        </span>
      ) : null}
    </span>
  );
}
