const PricingTab = ({ tab, isActive, onClick }) => {
  const Icon = tab.icon;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`w-full sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-3 sm:py-2.5 min-h-[44px] sm:min-h-0 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25"
          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
      }`}
    >
      <Icon size={14} className="flex-shrink-0" />
      <span className="truncate">{tab.label}</span>
    </button>
  );
};

export default PricingTab;
