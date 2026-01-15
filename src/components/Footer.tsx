import { MapPin, Phone, Mail, Facebook, MessageCircle } from "lucide-react";

/**
 * Footer Component - Dripping Palette Design
 * Contains company info, contact details, and social links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F4A261]">Arcifer</h3>
            <p className="text-gray-300 mb-4">
              Ferramenta e Colorificio a Catania. Servizi professionali di qualità con prezzi competitivi.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E63946] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Via Vincenzo Giuffrida, 64</p>
                  <p className="text-gray-300">95128 Catania CT, Italy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E63946] flex-shrink-0" />
                <a href="tel:+39095741480" className="hover:text-[#F4A261] transition-colors">
                  +39 095 741 4805
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Seguici</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/arcifer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E63946] p-3 rounded-lg hover:bg-red-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/39095741480"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#90EE90] p-3 rounded-lg hover:bg-green-400 transition-colors text-slate-900"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <a
              href="tel:+39095741480"
              className="inline-block btn-arcifer text-sm w-full text-center"
            >
              Contattaci
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Map Placeholder */}
          <div className="mb-8 rounded-lg overflow-hidden h-64 bg-gray-800">
            <iframe
              title="Ferramenta Arcifer Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.4567!2d15.0916446!3d37.5189138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fcc534012f19%3A0xfeab7aaee03a9f4!2sFerrament%20e%20Colori%20Arcifer!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              &copy; {currentYear} Ferramenta e Colori "Arcifer". Tutti i diritti riservati.
            </p>
            <p className="mt-2">
              Realizzato con ❤️ per la comunità di Catania
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
