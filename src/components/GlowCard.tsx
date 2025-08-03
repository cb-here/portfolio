import React, { useState } from "react";

interface GlowCardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({
  id,
  children,
  className = "",
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      id={id}
      onMouseMove={handleMouseMove}
      className={`group relative backdrop-blur-md rounded-2xl p-6 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 ${className}`}>
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
          maskImage: `radial-gradient(350px at ${pos.x}px ${pos.y}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(350px at ${pos.x}px ${pos.y}px, white, transparent)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;
