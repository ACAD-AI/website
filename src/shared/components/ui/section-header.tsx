import { cn } from "@/shared/lib/utils";

type SectionHeaderAlignment = "left" | "center" | "right";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  titleAccent?: string;
  align?: SectionHeaderAlignment;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const alignmentClasses: Record<
  SectionHeaderAlignment,
  {
    container: string;
    text: string;
    content: string;
    eyebrow: string;
  }
> = {
  left: {
    container: "items-start",
    text: "text-left",
    content: "mx-0",
    eyebrow: "justify-start",
  },
  center: {
    container: "items-center",
    text: "text-center",
    content: "mx-auto",
    eyebrow: "justify-center",
  },
  right: {
    container: "items-end",
    text: "text-right",
    content: "mx-0",
    eyebrow: "justify-end",
  },
};

function renderTitle(title: string, titleAccent?: string) {
  if (!titleAccent || !title.includes(titleAccent)) {
    return title;
  }

  const [before, ...rest] = title.split(titleAccent);
  const after = rest.join(titleAccent);

  return (
    <>
      {before}
      <span className="text-white">{titleAccent}</span>
      {after}
    </>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleAccent,
  align = "center",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const alignment = alignmentClasses[align];

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-5 sm:gap-6",
        alignment.container,
        alignment.text,
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("flex w-full items-center", alignment.eyebrow)}>
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.42em] text-[#86c7ed] uppercase sm:text-sm",
              eyebrowClassName,
            )}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2
        className={cn(
          "max-w-5xl text-5xl md:text-6xl leading-[0.98] font-medium tracking-tight text-white ",
          alignment.content,
          titleClassName,
        )}
      >
        {renderTitle(title, titleAccent)}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-3xl text-base leading-8 text-white/65 sm:text-lg",
            alignment.content,
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export type { SectionHeaderAlignment, SectionHeaderProps };
