import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, Heart } from "lucide-react";

/**
 * Chi Siamo Page - Dripping Palette Design
 * Company story, mission, values, and team information
 */
export default function ChiSiamo() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-[#E63946]" />,
      title: "Qualità",
      description:
        "Selezioniamo solo prodotti certificati e affidabili da marchi riconosciuti nel settore.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#F4A261]" />,
      title: "Professionalità",
      description:
        "Il nostro staff è formato da esperti del settore sempre disponibili a consigliarti.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#E91E63]" />,
      title: "Affidabilità",
      description:
        "Garantiamo prezzi competitivi e servizi affidabili da oltre 20 anni a Catania.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#4ECDC4]" />,
      title: "Assistenza",
      description:
        "Offriamo consulenza gratuita e assistenza post-vendita per garantire la tua soddisfazione.",
    },
  ];

  const achievements = [
    { number: "20+", label: "Anni di Esperienza" },
    { number: "1000+", label: "Clienti Soddisfatti" },
    { number: "5000+", label: "Prodotti in Stock" },
    { number: "4.7★", label: "Valutazione Google" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Chi Siamo</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              La storia di Ferramenta e Colori Arcifer: tradizione, qualità e innovazione al servizio della comunità di Catania.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
              La Nostra Storia
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ferramenta e Colori "Arcifer" nasce dalla passione e dalla dedizione di professionisti che credono nella qualità e nel servizio al cliente. Situata nel cuore di Catania, in Via Vincenzo Giuffrida, la nostra attività rappresenta un punto di riferimento per chiunque cerchi soluzioni affidabili nel settore della ferramenta, dell'idraulica, dell'elettrica e del colorificio.
              </p>

              <p>
                Con oltre 20 anni di esperienza nel settore, abbiamo costruito la nostra reputazione su tre pilastri fondamentali: la qualità dei prodotti, la competenza del nostro staff e l'attenzione al cliente. Ogni giorno lavoriamo per offrire non solo prodotti, ma soluzioni complete alle esigenze dei nostri clienti.
              </p>

              <p>
                La nostra ampia gamma di servizi include duplicazione chiavi, consulenza idraulica ed elettrica, una vasta selezione di vernici e coloranti, e una ferramenta generale completa. Non siamo solo un negozio: siamo i vostri partner di fiducia per ogni progetto, grande o piccolo.
              </p>

              <p>
                La facciata colorata del nostro negozio, con le sue bande vivaci di rosso, giallo, verde, blu e magenta, rappresenta il nostro impegno verso la vivacità, l'energia e l'innovazione. Ogni colore simboleggia uno dei nostri servizi principali e riflette il nostro approccio dinamico al business.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
              I Nostri Numeri
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#E63946] mb-3">
                    {item.number}
                  </div>
                  <p className="text-gray-600 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
              I Nostri Valori
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 border-l-4 hover:shadow-lg transition-shadow"
                  style={{
                    borderLeftColor:
                      index === 0
                        ? "#E63946"
                        : index === 1
                          ? "#F4A261"
                          : index === 2
                            ? "#E91E63"
                            : "#4ECDC4",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{value.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-[#E63946] to-[#E91E63] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">La Nostra Missione</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-95">
              Essere il punto di riferimento principale per la ferramenta, l'idraulica, l'elettrica e il colorificio a Catania. Vogliamo offrire ai nostri clienti non solo prodotti di qualità, ma anche consulenza professionale e un servizio che superi le aspettative.
            </p>
            <p className="text-xl leading-relaxed opacity-90">
              Crediamo che il successo del nostro negozio dipenda dal successo dei nostri clienti. Per questo motivo, investiamo continuamente nella formazione del nostro staff e nell'ampliamento della nostra gamma di prodotti.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
              Il Nostro Team
            </h2>

            <div className="bg-gray-50 rounded-xl p-8 md:p-12 border-l-4 border-[#F4A261]">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Il nostro team è composto da professionisti esperti e appassionati del settore. Ogni membro del nostro staff è formato per offrirti la migliore consulenza e assistenza possibile.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dalla gestione dell'inventario alla consulenza tecnica, dalla duplicazione chiavi al supporto post-vendita, il nostro team è sempre disponibile per garantire la tua soddisfazione.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Siamo orgogliosi della nostra reputazione di professionisti cortesi, competenti e affidabili. I vostri complimenti e la vostra fiducia sono il nostro maggior premio.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visita il Nostro Negozio
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Vieni a trovarci in Via Vincenzo Giuffrida, 64 a Catania. Il nostro team ti aspetta per offrirti la migliore consulenza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+39095741480"
                className="btn-arcifer text-lg"
              >
                📞 Chiama Ora
              </a>
              <a
                href="https://www.google.com/maps/place/Ferramenta+e+Colori+%22Arcifer%22"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4ECDC4] text-slate-900 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 transition-all duration-300 text-lg"
              >
                📍 Visualizza su Mappa
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
