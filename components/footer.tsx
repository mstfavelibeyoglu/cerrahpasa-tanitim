import { Instagram, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-background/20 bg-background">
              <Image
                src="/images/ctf-logo.jpg"
                alt="Cerrahpaşa Tıp Fakültesi"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="font-serif text-lg mb-1">
                İstanbul Üniversitesi-Cerrahpaşa
              </p>
              <p className="text-background/70 text-sm">
                Cerrahpaşa Tıp Fakültesi – Tanıtım ve Oryantasyon Ekibi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/cerrahpasaliolmak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              aria-label="Instagram @cerrahpasaliolmak"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/iuc.cerrahpasatip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              aria-label="Instagram @iuc.cerrahpasatip"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:ctfaday@iuc.edu.tr"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              aria-label="E-posta"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2025 Cerrahpaşa Tıp Fakültesi – Tanıtım ve Oryantasyon Ekibi. Tüm hakları saklıdır.
          </p>
          <p className="text-background/40 text-xs">
            cerrahpasa.iuc.edu.tr
          </p>
        </div>
      </div>
    </footer>
  )
}
