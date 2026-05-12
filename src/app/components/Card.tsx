interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export function Card({ children, className = '', glass = false }: CardProps) {
  return (
    <div
      className={`rounded-xl p-8 transition-all duration-300 hover:-translate-y-0.5 ${
        glass
          ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_-5px_#1ED760]/20'
          : 'bg-[#1A1A2E] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.3)]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
