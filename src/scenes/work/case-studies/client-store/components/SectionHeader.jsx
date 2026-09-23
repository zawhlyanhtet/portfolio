import { twMerge } from "tailwind-merge";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
}) {
  return (
    <>
      <p className="eyebrow text-accentsoft">{eyebrow}</p>
      <h2 className={twMerge("section-heading mt-4 mb-6", titleClassName)}>
        {title}
      </h2>
      {description && (
        <p className={twMerge("section-lead", descriptionClassName)}>
          {description}
        </p>
      )}
    </>
  );
}
