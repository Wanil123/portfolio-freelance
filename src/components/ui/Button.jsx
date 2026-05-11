import { useLanguage } from "../../hooks/useLanguage";

const variants = {
  primary: "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white",
  secondary: "border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white",
  ghost: "text-violet-400 hover:text-violet-300 hover:bg-violet-500/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
