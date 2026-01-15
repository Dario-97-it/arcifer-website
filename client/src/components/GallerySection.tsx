/**
 * GallerySection Component
 * Displays store photos in a responsive grid layout
 * Design: Dripping Palette - professional photography showcase
 */

export default function GallerySection() {
  const images = [
    {
      src: "/images/negozio-esterno.jpg",
      alt: "Facciata del negozio Arcifer a Catania",
      title: "La Nostra Facciata",
      description: "Negozio moderno e accogliente nel centro di Catania",
    },
    {
      src: "/images/negozio-interno-vernici.jpg",
      alt: "Sezione vernici e colorificio",
      title: "Sezione Colorificio",
      description: "Ampia selezione di vernici e prodotti per la colorazione",
    },
    {
      src: "/images/negozio-interno-ferramenta.jpg",
      alt: "Sezione ferramenta e materiali",
      title: "Sezione Ferramenta",
      description: "Completo assortimento di attrezzi e materiali professionali",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Visita il Nostro Negozio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri il nostro spazio moderno e ben organizzato, dove troverai tutto ciò che cerchi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-100 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Siamo aperti dal lunedì al sabato. Vieni a trovarci in Via Vincenzo Giuffrida, 64 a Catania!
          </p>
          <a
            href="https://www.google.com/maps/place/Ferramenta+e+Colori+%22Arcifer%22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-arcifer"
          >
            📍 Visualizza su Mappa
          </a>
        </div>
      </div>
    </section>
  );
}
