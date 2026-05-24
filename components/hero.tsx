import { Button } from "@/components/ui/button"
import { BookOpen, Mail, Play, GraduationCap, Calendar, Award, Users } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32"
    >
      {/* Background Campus Image with rich dark burgundy gradient overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cerrahpasa-campus.jpg"
          alt="Cerrahpaşa Tıp Fakültesi Kampüsü"
          fill
          priority
          className="object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Dark Burgundy Overlay for premium brand aesthetic and visual contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-background/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-background" />
      </div>

      {/* Subtle overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Promotion and Orientation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 animate-fade-in shadow-inner">
          <GraduationCap className="h-4 w-4 text-secondary-foreground" />
          <span className="text-xs uppercase font-bold tracking-widest">Tanıtım ve Oryantasyon Ekibi</span>
        </div>

        {/* Main Heading - Sharp serif style with letter-spacing */}
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight tracking-tight max-w-5xl text-balance drop-shadow-md">
          Cerrahpaşa Tıp Fakültesi&apos;ne <span className="text-secondary-foreground block sm:inline">Hoş Geldiniz</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 font-serif italic tracking-wide font-light">
          &ldquo;Bir ekol, bir duruş, bir mirastır Cerrahpaşa.&rdquo;
        </p>

        <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-10 font-sans tracking-wide">
          1827&apos;den bu yana Türkiye&apos;nin en köklü tıp eğitimi kurumu. Geleceğin hekimleri ve bilim insanları burada yetişiyor.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-sm font-bold uppercase tracking-wider shadow-xl shadow-secondary/20 hover:shadow-secondary/30 transition-all hover:scale-105 active:scale-95"
          >
            <a href="#rehber">
              <BookOpen className="mr-2 h-4 w-4" />
              Rehberi İncele
            </a>
          </Button>

          {/* Interactive Presentation Video Dialog (B-06 Secure youtube iframe inside) */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-14 text-sm font-bold uppercase tracking-wider border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all bg-white/5 backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />
                Tanıtım Filmi
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] rounded-3xl p-6 border border-white/10 bg-black/95 backdrop-blur-xl">
              <DialogHeader className="mb-4">
                <DialogTitle className="font-serif text-xl text-white">
                  Cerrahpaşa Tıp Fakültesi Tanıtım Filmi
                </DialogTitle>
              </DialogHeader>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/XBtjO73Px1Y?autoplay=1&rel=0&modestbranding=1"
                  title="Cerrahpaşa Tıp Fakültesi Tanıtım Videosu"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Premium Glassmorphism Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mt-6">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform">
              <Calendar className="h-5 w-5 text-secondary-foreground" />
            </div>
            <p className="font-serif font-black text-3xl sm:text-4xl text-white leading-none mb-1">1827</p>
            <p className="text-xs uppercase tracking-wider font-extrabold text-white/70">Kuruluş Yılı</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform">
              <GraduationCap className="h-5 w-5 text-secondary-foreground" />
            </div>
            <p className="font-serif font-black text-3xl sm:text-4xl text-white leading-none mb-1">6 Yıl</p>
            <p className="text-xs uppercase tracking-wider font-extrabold text-white/70">Tıp Eğitimi</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform">
              <Award className="h-5 w-5 text-secondary-foreground" />
            </div>
            <p className="font-serif font-black text-3xl sm:text-4xl text-white leading-none mb-1">50+</p>
            <p className="text-xs uppercase tracking-wider font-extrabold text-white/70">Uzmanlık Dalı</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform">
              <Users className="h-5 w-5 text-secondary-foreground" />
            </div>
            <p className="font-serif font-black text-3xl sm:text-4xl text-white leading-none mb-1">2313</p>
            <p className="text-xs uppercase tracking-wider font-extrabold text-white/70">Akademisyen</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-white/60 rounded-full animate-scroll-wheel" />
          </div>
        </div>
      </div>
    </section>
  )
}
