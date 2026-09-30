import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "start",
}: Props) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl flex flex-col",
        isCenter ? "mx-auto text-center items-center" : "items-start",
        className,
      )}
    >
      {/* Decorative Brand Accent Line */}
      <span
        className={cn(
          "mb-3.5 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-secondary-blue",
          isCenter && "mx-auto",
        )}
      />

      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.18]">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8 font-normal">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
