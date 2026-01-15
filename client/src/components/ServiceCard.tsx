import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "red" | "yellow" | "green" | "blue" | "magenta";
}

/**
 * ServiceCard Component - Dripping Palette Design
 * Displays a service with icon, title, and description
 * Color-coded border based on service type
 */
export default function ServiceCard({
  icon,
  title,
  description,
  color,
}: ServiceCardProps) {
  const colorClasses = {
    red: "border-t-[#E63946] hover:shadow-red-200",
    yellow: "border-t-[#F4A261] hover:shadow-yellow-200",
    green: "border-t-[#90EE90] hover:shadow-green-200",
    blue: "border-t-[#4ECDC4] hover:shadow-blue-200",
    magenta: "border-t-[#E91E63] hover:shadow-magenta-200",
  };

  return (
    <div
      className={`card-service ${colorClasses[color]} group`}
    >
      <div className="mb-4 text-4xl transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
