export const classNameGenerator = {
  button: ({ variant = 'primary', size = 'md', disabled = false }) => {
    const baseClasses = 'font-semibold transition-all rounded-lg focus:outline-none';
    const variantClasses = {
      primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
      secondary: 'bg-slate-700 hover:bg-slate-600 text-white',
    };
    const sizeClasses = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`.trim();
  },
};
