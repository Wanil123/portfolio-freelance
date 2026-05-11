export const SectionHeading = ({
  subtitle,
  title,
  description,
  className = ""
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {subtitle && (
        <span className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
