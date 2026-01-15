import { useState, useEffect } from "react";
import { X } from "lucide-react";

/**
 * CookieBanner Component
 * Displays a cookie consent banner with localStorage persistence
 * Design: Dripping Palette - uses brand colors with smooth animations
 * GDPR compliant cookie notice
 */

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("arcifer-cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("arcifer-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("arcifer-cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-4 border-arcifer-red shadow-2xl animate-slide-up">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col gap-4">
          {/* Content */}
          <div className="text-center md:text-left">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
              I cookie ci aiutano a capire come usi il sito e a personalizzare i contenuti.{" "}
              <a
                href="#"
                className="text-arcifer-red font-semibold hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  // Puoi aggiungere un link a una pagina di privacy policy
                }}
              >
                Scopri di più
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-full flex-col sm:flex-row justify-center md:justify-start">
            <button
              onClick={handleReject}
              className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 text-sm md:text-base order-2 sm:order-1"
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-arcifer-red to-arcifer-magenta text-white font-semibold hover:shadow-lg hover:shadow-red-300 transition-all duration-300 text-sm md:text-base order-1 sm:order-2"
            >
              Accetta Tutto
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
