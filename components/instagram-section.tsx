import { Button } from "@/components/ui/button"
import { Instagram, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"

interface Post {
  id: number
  src: string
  alt: string
  caption: string
  likes: string
  comments: string
}

const instagramPosts: Post[] = [
  {
    id: 1,
    src: "/images/cerrahpasa-campus.jpg",
    alt: "Cerrahpaşa Kampüsü",
    caption: "Tarihi ve modern mimarinin buluştuğu Cerrahpaşa Yerleşkemizde bahar ayları. 🌸✨ #cerrahpasaliolmak #iuc",
    likes: "1.2k",
    comments: "42",
  },
  {
    id: 2,
    src: "/images/white-coat-ceremony.jpg",
    alt: "Beyaz Önlük Töreni",
    caption: "Geleceğin hekimleri ilk adımı attı! Geleneksel Beyaz Önlük Giyme Törenimizden gurur dolu kareler. 🥼❤️ #tıbbiye #cerrahpaşa",
    likes: "2.4k",
    comments: "89",
  },
  {
    id: 3,
    src: "/images/medical-students.jpg",
    alt: "Laboratuvarda Pratik Eğitim",
    caption: "Gelişmiş laboratuvar altyapımız ile teorik bilgiyi pratikle birleştiriyoruz. 🔬🧬 #tıp #laboratuvar",
    likes: "980",
    comments: "31",
  },
  {
    id: 4,
    src: "/images/haydarpasa-building.jpg",
    alt: "Tarihi Haydarpaşa Binası",
    caption: "Tıp tarihimizin mihenk taşı: Tarihi Haydarpaşa Tıbbiye Binası. 🏛️📖 #tıp #tarih #tıbbiye",
    likes: "1.8k",
    comments: "56",
  },
  {
    id: 5,
    src: "/images/about-1.png",
    alt: "Atatürk Ziyareti",
    caption: "Cumhuriyetimizin Kurucusu Gazi Mustafa Kemal Atatürk'ün 1930 yılındaki Cerrahpaşa ziyareti. 🇹🇷✨ #ataturk #vefa",
    likes: "3.5k",
    comments: "142",
  },
  {
    id: 6,
    src: "/images/about-2.png",
    alt: "Medikal Simülasyon Merkezi",
    caption: "Simülasyon Merkezimizde gerçeğe en yakın koşullarda hasta bakım ve tanı pratikleri. 🏥💻 #medikal #simulasyon",
    likes: "1.1k",
    comments: "25",
  },
  {
    id: 7,
    src: "/images/about-3.png",
    alt: "Karma Gerçeklik Anatomi",
    caption: "Holografik anatomi ve karma gerçeklik teknolojileriyle tıp eğitiminde sınırları aşıyoruz. 🕶️🧠 #anatomi #vr #teknoloji",
    likes: "1.5k",
    comments: "47",
  },
  {
    id: 8,
    src: "/images/medical-students.jpg",
    alt: "Öğrenci Hayatı",
    caption: "Tıp eğitiminde dayanışma ve arkadaşlık en büyük gücümüz! Kütüphane ve sosyal alanlardan renkli anlar. 🎓☕ #ogrenci #dayanisma",
    likes: "1.3k",
    comments: "38",
  },
  {
    id: 9,
    src: "/images/cerrahpasa-campus.jpg",
    alt: "Kampüste Akşam Üstü",
    caption: "Cerrahpaşa Yerleşkemizde gün batımı. İki asırlık bir çınarın gölgesinde hekimlik hayalleri... 🌅🩺 #cerrahpaşa #gunbatimi",
    likes: "1.9k",
    comments: "61",
  },
]

export function InstagramSection() {
  return (
    <section id="instagram" className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-xs font-semibold uppercase tracking-wider">
            <Instagram className="h-4 w-4" /> Sosyal Medya
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Bizi Instagram&apos;da Takip Edin
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Cerrahpaşa&apos;daki günlük yaşamı, eğitim faaliyetlerini ve son gelişmeleri sosyal medya hesaplarımızdan anlık takip edebilirsiniz.
          </p>

          {/* Social Handles */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground max-w-md mx-auto">
            <a
              href="https://instagram.com/cerrahpasaliolmak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors font-bold text-sm tracking-wide bg-card border border-border px-4 py-2.5 rounded-full hover:shadow-md hover:-translate-y-0.5 duration-300"
            >
              <Instagram className="h-4 w-4 text-primary" />
              <span>@cerrahpasaliolmak</span>
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="https://instagram.com/iuc.cerrahpasatip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors font-bold text-sm tracking-wide bg-card border border-border px-4 py-2.5 rounded-full hover:shadow-md hover:-translate-y-0.5 duration-300"
            >
              <Instagram className="h-4 w-4 text-primary" />
              <span>@iuc.cerrahpasatip</span>
            </a>
          </div>
        </div>

        {/* Premium Instagram Grid with Real Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/cerrahpasaliolmak"
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-500 border border-border bg-muted cursor-pointer"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-115 transition-transform duration-700"
              />
              
              {/* Dark Overlay on Hover containing likes and comments */}
              <div className="absolute inset-0 bg-primary/85 backdrop-blur-xs flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center select-none z-10">
                <div className="flex items-center gap-4 text-white font-bold text-lg mb-3">
                  <span className="flex items-center gap-1.5 hover:scale-110 duration-200">
                    <Heart className="h-5 w-5 fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 hover:scale-110 duration-200">
                    <MessageCircle className="h-5 w-5 fill-current" /> {post.comments}
                  </span>
                </div>
                <p className="text-white/90 text-xs line-clamp-3 leading-relaxed font-sans">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-14 font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            <a
              href="https://instagram.com/cerrahpasaliolmak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram&apos;da Takip Et
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
