export const Card = ({
  children,
  className = "",
  hover = true,
  ...props
}) => {
  return (
    <div
      className={`rounded-2xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm ${hover ? "hover:border-violet-500/30 transition-all duration-300" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
