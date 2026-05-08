interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[#1A1A2E] rounded-lg p-8 ${className}`}>
      {children}
    </div>
  );
}
