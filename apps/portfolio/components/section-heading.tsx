/** Mono "01 / Projects" eyebrow above a large section title. */
export function SectionHeading({
  eyebrow,
  title,
  as: Tag = "h2",
  className = "",
}: {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="font-mono text-sm text-muted">{eyebrow}</span>
      <Tag className="m-0 font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.05] tracking-[-0.03em]">
        {title}
      </Tag>
    </div>
  );
}
