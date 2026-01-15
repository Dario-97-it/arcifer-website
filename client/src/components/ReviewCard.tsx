import { Star } from "lucide-react";

interface ReviewCardProps {
  author: string;
  rating: number;
  text: string;
  initials: string;
  bgColor: string;
}

/**
 * ReviewCard Component - Dripping Palette Design
 * Displays a customer review with rating and author info
 */
export default function ReviewCard({
  author,
  rating,
  text,
  initials,
  bgColor,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-[#F4A261] text-[#F4A261]" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-2">({rating}/5)</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-4 leading-relaxed italic">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${bgColor}`}
        >
          {initials}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{author}</p>
          <p className="text-xs text-gray-500">Cliente verificato</p>
        </div>
      </div>
    </div>
  );
}
