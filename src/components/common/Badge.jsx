const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const variants = {
    default: 'bg-white/10 text-white',
    primary: 'bg-emerald-500/20 text-emerald-400',
    secondary: 'bg-amber-500/20 text-amber-400',
    danger: 'bg-red-500/20 text-red-400',
    success: 'bg-green-500/20 text-green-400',
    halal: 'bg-emerald-500/20 text-emerald-400',
    vegan: 'bg-green-500/20 text-green-400',
    prive: 'bg-purple-500/20 text-purple-400',
    fast: 'bg-orange-500/20 text-orange-400',
  };

  const sizes = {
    xs: 'px-1.5 py-0.5 text-[10px]',
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
