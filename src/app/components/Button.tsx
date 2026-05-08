interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg transition-all duration-200 font-medium';

  const variants = {
    primary: 'bg-[#1ED760] text-[#0A0A0A] hover:bg-[#1ed760dd]',
    secondary: 'bg-[#1A1A2E] text-white hover:bg-[#252540]',
    outline: 'border-2 border-white/20 text-white hover:border-[#1ED760] hover:text-[#1ED760]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
