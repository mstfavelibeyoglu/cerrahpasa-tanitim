import { Users } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const aboutImages = [
  {
    src: "/images/about-1.png",
    alt: "Atatürk'ün Cerrahpaşa Ziyareti",
    caption: "Atatürk'ün 1930'daki Cerrahpaşa ziyareti.",
  },
  {
    src: "/images/about-2.png",
    alt: "Simülasyon Eğitimi",
    caption: "Modern simülasyon merkezimizde pratik eğitim.",
  },
  {
    src: "/images/about-3.png",
    alt: "Geleceğin Tıbbı",
    caption: "Karma gerçeklik ile anatomi ve cerrahi eğitimi.",
  },
]

const teamMembers = [
  { name: "İsim Soyisim", role: "Görev / Rol" },
  { name: "İsim Soyisim", role: "Görev / Rol" },
  { name: "İsim Soyisim", role: "Görev / Rol" },
  { name: "İsim Soyisim", role: "Görev / Rol" },
  { name: "İsim Soyisim", role: "Görev / Rol" },
  { name: "İsim Soyisim", role: "Görev / Rol" },
]

export function AboutSection() {
  return (
    <section id="hakkimizda" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative px-12 md:px-0">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {aboutImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                      <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium text-center">
                        {image.caption}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 h-10 w-10 md:-left-6 bg-background/80 backdrop-blur-sm" />
              <CarouselNext className="-right-12 h-10 w-10 md:-right-6 bg-background/80 backdrop-blur-sm" />
            </Carousel>
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Hakkımızda
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Bu rehber, Cerrahpaşa Tıp Fakültesi Tanıtım ve Oryantasyon Ekibi tarafından hazırlanmıştır.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gönüllü öğrencilerden oluşan ekibimiz, Cerrahpaşa Tıp Fakültesi&apos;ni tanıtmak ve yeni öğrencilerimizin
              uyum sürecini kolaylaştırmak için çalışmaktadır. Aday öğrencilere rehberlik ediyor ve Cerrahpaşa 
              ailesine katılım sürecini destekliyoruz.
            </p>
            <p className="text-muted-foreground text-sm italic">
              Haziran, 2025
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card rounded-2xl border border-border p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">Tanıtım</h3>
            <p className="text-muted-foreground text-sm">
              Fakültemizi ve kampüs yaşamını aday öğrencilere tanıtıyoruz.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">Oryantasyon</h3>
            <p className="text-muted-foreground text-sm">
              Yeni öğrencilerimizin uyum sürecini destekliyoruz.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">İletişim</h3>
            <p className="text-muted-foreground text-sm">
              Sorularınızı yanıtlıyor, rehberlik ediyoruz.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl text-foreground mb-8">Ekibimiz</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-serif text-foreground/60">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <p className="font-medium text-foreground text-sm">{member.name}</p>
                <p className="text-muted-foreground text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
