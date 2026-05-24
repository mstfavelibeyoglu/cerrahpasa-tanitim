import { Mail, Instagram, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="iletisim" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            İletişim
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">E-posta</h3>
                <a
                  href="mailto:ctfaday@iuc.edu.tr"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ctfaday@iuc.edu.tr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Instagram</h3>
                <div className="space-y-1">
                  <a
                    href="https://instagram.com/cerrahpasaliolmak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    @cerrahpasaliolmak
                  </a>
                  <a
                    href="https://instagram.com/iuc.cerrahpasatip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    @iuc.cerrahpasatip
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Adres</h3>
                <p className="text-muted-foreground">
                  İstanbul Üniversitesi-Cerrahpaşa<br />
                  Cerrahpaşa Tıp Fakültesi<br />
                  Cerrahpaşa Mahallesi, Kocamustafapaşa Cad.<br />
                  34098 Fatih, İstanbul
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-border bg-accent/50 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0668744849584!2d28.94273851542457!3d41.00381037930011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba8f62f0b9a5%3A0x4f6f1f5f5f5f5f5f!2sCerrahpa%C5%9Fa%20T%C4%B1p%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Cerrahpaşa Tıp Fakültesi Harita"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
