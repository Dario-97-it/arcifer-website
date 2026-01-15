import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import {
  Wrench,
  Droplet,
  Zap,
  Key,
  Palette,
  Award,
} from "lucide-react";

/**
 * Home Page - Dripping Palette Design
 * Hero section, services, social proof (reviews), and CTA
 * Mobile-first responsive layout
 */
export default function Home() {
  const services = [
    {
      icon: <Key className="w-12 h-12 text-[#E63946]" />,
      title: "Duplicazione Chiavi",
      description:
        "Servizio rapido e professionale di copia chiavi di tutti i tipi. Realizziamo chiavi per porte, serrature e lucchetti.",
      color: "red" as const,
    },
    {
      icon: <Droplet className="w-12 h-12 text-[#4ECDC4]" />,
      title: "Idraulica",
      description:
        "Materiali idraulici di qualità e servizi professionali. Tubi, raccordi, valvole e tutto ciò che serve.",
      color: "blue" as const,
    },
    {
      icon: <Zap className="w-12 h-12 text-[#F4A261]" />,
      title: "Materiale Elettrico",
      description:
        "Componenti elettrici certificati e affidabili. Cavi, interruttori, prese e accessori professionali.",
      color: "yellow" as const,
    },
    {
      icon: <Palette className="w-12 h-12 text-[#E91E63]" />,
      title: "Colorificio",
      description:
        "Vernici, smalti e prodotti per la colorazione di qualità. Consulenza gratuita per la scelta dei colori.",
      color: "magenta" as const,
    },
    {
      icon: <Wrench className="w-12 h-12 text-[#90EE90]" />,
      title: "Ferramenta Generale",
      description:
        "Attrezzi, viti, bulloni e materiali di ferramenta. Ampia scelta a prezzi competitivi.",
      color: "green" as const,
    },
    {
      icon: <Award className="w-12 h-12 text-[#E63946]" />,
      title: "Consulenza Professionale",
      description:
        "Il nostro staff esperto è sempre disponibile per consigliarti la soluzione migliore per le tue esigenze.",
      color: "red" as const,
    },
  ];

  const reviews = [
    {
      author: "Beatrice Maria Lo Greco",
      rating: 5,
      text: "Ferramenta numero uno a Catania, trovo sempre tutto quello che cerco. Prodotti di alta qualità ad ottimi prezzi. Il personale è sempre gentile e cortese.",
      initials: "BL",
      bgColor: "bg-blue-500",
    },
    {
      author: "Chiara Coco",
      rating: 5,
      text: "Di ferramenta ne ho girate tante a Catania negli anni ma mai ne avevo trovata una dove c'è sempre tutto quello di cui ho bisogno! Complimenti ad Angelo e alla sua professionalità.",
      initials: "CC",
      bgColor: "bg-orange-500",
    },
    {
      author: "Aloisi Carla",
      rating: 5,
      text: "Hanno qualsiasi cosa tu cerchi, e se non l'hanno te la ordinano e ritiramo appostai! Finalmente ho trovato la ferramenta che cercavo ai prezzi più bassi della zona!",
      initials: "AC",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E63946] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#F4A261] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Ferramenta e Colori{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] via-[#F4A261] to-[#E91E63]">
                  Arcifer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                La ferramenta numero uno a Catania. Servizi professionali, prodotti di qualità e prezzi competitivi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+39095741480"
                  className="btn-arcifer text-center text-lg"
                >
                  📞 Chiama Ora
                </a>
                <a
                  href="https://wa.me/39095741480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#90EE90] text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-300 transform hover:scale-105 text-center text-lg"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                I Nostri Servizi
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scopri tutti i servizi professionali che offriamo per le tue esigenze di ferramenta e colorificio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
                Perché Scegliere Arcifer
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Qualità Garantita",
                    description:
                      "Prodotti certificati e di qualità da marchi affidabili. Nessun compromesso sulla qualità.",
                    icon: "✓",
                    color: "bg-[#E63946]",
                  },
                  {
                    title: "Prezzi Competitivi",
                    description:
                      "I prezzi più bassi della zona senza compromessi sulla qualità. Confronta e vedrai!",
                    icon: "💰",
                    color: "bg-[#F4A261]",
                  },
                  {
                    title: "Staff Esperto",
                    description:
                      "Personale competente e cortese sempre disponibile per consigliarti la soluzione migliore.",
                    icon: "👥",
                    color: "bg-[#4ECDC4]",
                  },
                  {
                    title: "Consegna Rapida",
                    description:
                      "Servizio di consegna disponibile. Se non abbiamo il prodotto, te lo ordiniamo subito!",
                    icon: "🚚",
                    color: "bg-[#90EE90]",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-8 border-l-4"
                    style={{
                      borderLeftColor:
                        item.color === "bg-[#E63946]"
                          ? "#E63946"
                          : item.color === "bg-[#F4A261]"
                            ? "#F4A261"
                            : item.color === "bg-[#4ECDC4]"
                              ? "#4ECDC4"
                              : "#90EE90",
                    }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Cosa Dicono i Nostri Clienti
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F4A261] text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl text-gray-600">
                Valutazione media: <span className="font-bold">4.7/5</span> (48 recensioni)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.google.com/maps/place/Ferramenta+e+Colori+%22Arcifer%22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-arcifer"
              >
                Leggi Tutte le Recensioni su Google
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-[#E63946] to-[#E91E63] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hai Bisogno di Aiuto?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contattaci oggi stesso per ricevere consulenza gratuita e scoprire come possiamo aiutarti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+39095741480"
                className="bg-white text-[#E63946] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg"
              >
                📞 Chiama: +39 095 741 4805
              </a>
              <a
                href="https://wa.me/39095741480"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#90EE90] text-slate-900 font-bold py-4 px-8 rounded-lg hover:bg-green-400 transition-all duration-300 text-lg"
              >
                💬 Scrivi su WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
