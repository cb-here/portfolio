import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div
      className={`
        [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]
        rounded-2xl
        bg-[#1a1a1a]
        [box-shadow:var(--shadow)]
        border border-white-icon-tr
        ${hover ? 'transition-all duration-300 hover:scale-105 hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  color?: string;
}

export const StatCard = ({ icon, label, value, color = 'text-blue-400' }: StatCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-start">
        <div className={`mb-4 ${color}`}>
          {icon}
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-white-icon">{label}</div>
      </div>
    </Card>
  );
};

interface HighlightCardProps {
  title: string;
  description: string;
  accentColor?: string;
}

export const HighlightCard = ({
  title,
  description,
  accentColor = 'from-purple-500 to-pink-500'
}: HighlightCardProps) => {
  return (
    <Card className="p-6">
      <div className={`w-12 h-1 bg-gradient-to-r ${accentColor} mb-4 rounded-full`}></div>
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-white-icon text-sm leading-relaxed">{description}</p>
    </Card>
  );
};

export default Card;
