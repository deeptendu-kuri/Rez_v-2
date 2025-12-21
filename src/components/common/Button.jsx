const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-emerald-500 text-white active:bg-emerald-600 disabled:bg-emerald-500/50',
    secondary: 'bg-white/10 text-white active:bg-white/20 disabled:bg-white/5',
    outline: 'border border-white/20 text-white active:bg-white/10 disabled:border-white/10',
    ghost: 'text-white active:bg-white/10',
    danger: 'bg-red-500 text-white active:bg-red-600',
    amber: 'bg-amber-500 text-black active:bg-amber-600',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-xl',
    md: 'px-4 py-3 text-base rounded-2xl',
    lg: 'px-6 py-4 text-lg rounded-2xl',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        font-medium transition-all
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
