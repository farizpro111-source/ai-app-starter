export function PageHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        {eyebrow ? <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#9a7e50]">{eyebrow}</div> : null}
        <h1 className="text-[30px] font-semibold tracking-[-.045em] md:text-[36px]">{title}</h1>
        {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-black/48">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
