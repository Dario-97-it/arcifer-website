import { Clock } from "lucide-react";

/**
 * OpeningHours Component
 * Displays business opening hours in a clean, organized format
 * Design: Dripping Palette - uses accent colors with left border
 */

interface DayHours {
  day: string;
  hours: string[];
  isClosed?: boolean;
}

const OPENING_HOURS: DayHours[] = [
  { day: "Lunedì", hours: ["09:00 - 13:00", "16:00 - 19:30"] },
  { day: "Martedì", hours: ["09:00 - 13:00", "16:00 - 19:30"] },
  { day: "Mercoledì", hours: ["09:00 - 13:00", "16:00 - 19:30"] },
  { day: "Giovedì", hours: ["09:00 - 13:00", "16:00 - 19:30"] },
  { day: "Venerdì", hours: ["09:00 - 13:00", "16:00 - 19:30"] },
  { day: "Sabato", hours: ["09:00 - 13:00"] },
  { day: "Domenica", hours: [], isClosed: true },
];

export default function OpeningHours() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-8 h-8 text-arcifer-red" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Orari di Apertura
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OPENING_HOURS.map((day, index) => {
            const colors = [
              "border-arcifer-red",
              "border-arcifer-yellow",
              "border-arcifer-green",
              "border-arcifer-cyan",
              "border-arcifer-magenta",
              "border-arcifer-orange",
              "border-arcifer-red",
            ];

            return (
              <div
                key={day.day}
                className={`border-l-4 ${colors[index % colors.length]} pl-4 py-3 bg-gray-50 rounded-r-lg transition-transform hover:scale-105`}
              >
                <h3 className="font-bold text-gray-900 mb-2">{day.day}</h3>
                {day.isClosed ? (
                  <p className="text-gray-500 italic">Chiuso</p>
                ) : (
                  <div className="space-y-1">
                    {day.hours.map((hour, idx) => (
                      <p key={idx} className="text-gray-700 text-sm">
                        {hour}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-arcifer-cyan rounded-r-lg">
          <p className="text-gray-700">
            <span className="font-semibold">Nota:</span> Durante le festività
            potremmo avere orari modificati. Contattaci per verificare.
          </p>
        </div>
      </div>
    </div>
  );
}
