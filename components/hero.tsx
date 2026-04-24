import { Button } from "@/components/ui/button"
import { BookOpen, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C1A0E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Faculty Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-card">
            <Image
              src="/images/ctf-logo.png"
              alt="Cerrahpaşa Tıp Fakültesi Logosu"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <span className="text-sm font-medium">Tanıtım ve Oryantasyon Ekibi</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
          Cerrahpaşa Tıp Fakültesi&apos;ne Hoş Geldiniz
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty">
          Bir ekol, bir duruş, bir mirastır Cerrahpaşa.
        </p>

        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-10">
          Aday öğrenciler için hazırlanmış kapsamlı rehberiniz. 1827&apos;den bu yana Türkiye&apos;nin en köklü tıp eğitimi kurumlarından biri.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="#rehber">
              <BookOpen className="mr-2 h-5 w-5" />
              Rehberi İncele
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base border-2 border-foreground/20 hover:border-primary hover:text-primary transition-all bg-background/50 backdrop-blur-sm"
          >
            <a href="#iletisim">
              <Mail className="mr-2 h-5 w-5" />
              Bize Ulaşın
            </a>
          </Button>
        </div>

        {/* YouTube Video Embed */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-foreground/5 border border-border">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/XBtjO73Px1Y?rel=0&modestbranding=1"
                title="Cerrahpaşa Tıp Fakültesi Tanıtım Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Fakültemizin tanıtım videosunu izleyin</p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-primary">1827</p>
            <p className="text-sm text-muted-foreground mt-1">Kuruluş</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-primary">6</p>
            <p className="text-sm text-muted-foreground mt-1">Yıl Eğitim</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-primary">50+</p>
            <p className="text-sm text-muted-foreground mt-1">Uzmanlık Dalı</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-primary">2313</p>
            <p className="text-sm text-muted-foreground mt-1">Akademisyen</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
