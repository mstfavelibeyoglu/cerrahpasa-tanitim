"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

interface Announcement {
  id: number
  title: string
  description: string
  longDescription: string
  date: string
  isNew: boolean
  image_url?: string
}

// Bilgi İşlem Daire Başkanlığı'ndan gelecek veritabanı/CMS kararına göre 
// varsayılan olarak sunulacak yüksek kaliteli yerel duyuru verileri (Fallback / Static Data).
const defaultAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "Cerrahpaşa Aday Öğrenci Tanıtım Günleri Başlıyor!",
    description: "Cerrahpaşa Tıp Fakültesi yerleşkemizde aday öğrencilerimiz ve velilerimiz için düzenleyeceğimiz tanıtım ve rehberlik günleri 14 Temmuz'da kapılarını açıyor.",
    longDescription: "Cerrahpaşa Tıp Fakültesi'nin köklü hekimlik kültürünü yakından tanımak isteyen tüm aday öğrencilerimizi yerleşkemize bekliyoruz. Tanıtım günleri boyunca akredite laboratuvarlarımız, klinik simülasyon merkezlerimiz, kütüphanemiz ve sosyal alanlarımız rehber eşliğinde gezilecektir. Ayrıca dekan yardımcılarımız ve stajyer hekimlerimizle birebir görüşme fırsatı yakalayabilirsiniz.",
    date: "14 Temmuz 2025",
    isNew: true,
    image_url: "/images/cerrahpasa-campus.jpg",
  },
  {
    id: 2,
    title: "2025 Yılı Tercih ve Danışma Masaları Kuruluyor",
    description: "Tercih döneminde hekimlik mesleği ve eğitim süreçleri hakkında kararsız kalan aday öğrencilerimiz için yüz yüze danışmanlık hizmeti sunulacaktır.",
    longDescription: "Geleceğin tıbbına yön vermek isteyen tıp adaylarının en doğru tercihi yapabilmesi adına, fakültemiz bünyesinde 'Tercih ve Danışma Masaları' kurulacaktır. Deneyimli hocalarımız, uzman doktorlarımız ve son sınıf tıp öğrencilerimiz tercih listelerinizi hazırlarken sizlere rehberlik edecek, ders içeriklerinden staj imkanlarına kadar tüm sorularınızı yanıtlayacaktır.",
    date: "18 Temmuz 2025",
    isNew: true,
    image_url: "/images/medical-students.jpg",
  },
  {
    id: 3,
    title: "Tarihi Haydarpaşa Binası Oryantasyon Gezileri",
    description: "Tıbbın tarihi mirasını yerinde hissetmek isteyen aday öğrencilerimiz için şanlı Haydarpaşa Tıbbiye Binamıza özel rehberli turlar düzenlenecektir.",
    longDescription: "Türk tıp eğitiminin kalbinin attığı yer olan, muhteşem mimarisiyle göz kamaştıran Tarihi Haydarpaşa Tıbbiye Binası'na aday öğrencilerimiz için özel turlar planlanmıştır. Tıp tarihi müzemizi, tarihi amfileri ve koridorları hekim tarihçiler eşliğinde gezerek Cerrahpaşa mirasını yerinde solumak için bu etkinliği kaçırmayın.",
    date: "22 Temmuz 2025",
    isNew: false,
    image_url: "/images/haydarpasa-building.jpg",
  },
]

export function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(defaultAnnouncements)
  const [loading, setLoading] = useState(false)
  const [, setSelectedAnnouncement] = useState<Announcement | null>(null)

  useEffect(() => {
    // ==========================================
    // 🖥️ BİLGİ İŞLEM DAİRE BAŞKANLIĞI ENTEGRASYON ALANI
    // ==========================================
    // Kurumsal CMS veya yerel JSON entegrasyonu yapıldığında aşağıdaki örnek kodları açabilirsiniz.
    
    /* 
    // Örnek Yöntem A: Sitenin kendi yerel klasöründeki JSON dosyasından okuma (Statik Derleme Uyumlu)
    const fetchLocalAnnouncements = async () => {
      try {
        setLoading(true);
        const res = await fetch('/data/announcements.json');
        const data = await res.json();
        setAnnouncements(data);
      } catch (err) {
        console.error("Yerel duyuru verisi yüklenemedi, varsayılanlar gösteriliyor.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLocalAnnouncements();
    */

    /*
    // Örnek Yöntem B: Kurumsal API (REST) üzerinden okuma
    const fetchApiAnnouncements = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://tip.iuc.edu.tr/api/announcements');
        const data = await res.json();
        setAnnouncements(data);
      } catch (err) {
        console.error("API duyuruları yüklenemedi, varsayılanlar gösteriliyor.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApiAnnouncements();
    */
  }, [])

  if (loading) {
    return (
      <section id="duyurular" className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground animate-pulse">Duyurular yükleniyor...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="duyurular" className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-xs font-semibold uppercase tracking-wider">
            Son Gelişmeler
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Duyuru ve Etkinlikler
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tercih dönemleri, bilgilendirme toplantıları ve aday öğrencilere özel oryantasyon etkinliklerimizden haberdar olun.
          </p>
        </div>

        {announcements.length === 0 ? (
          <div className="text-center text-muted-foreground py-10 bg-card rounded-2xl border border-dashed border-border max-w-xl mx-auto">
            <p>Henüz güncel duyuru yayınlanmamış.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <Dialog key={announcement.id}>
                <DialogTrigger asChild>
                  <Card
                    onClick={() => setSelectedAnnouncement(announcement)}
                    className="group bg-card/70 backdrop-blur-md border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{announcement.date}</span>
                        </div>
                        {announcement.isNew && (
                          <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-2 py-0.5 text-[10px] uppercase rounded-full">
                            Yeni
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {announcement.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                        {announcement.description}
                      </p>
                      <div className="flex items-center text-xs font-bold text-primary uppercase tracking-wider">
                        Detayları Gör <Info className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] rounded-3xl p-8 max-h-[90vh] overflow-y-auto border border-border bg-card/95 backdrop-blur-xl">
                  <DialogHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="text-muted-foreground font-semibold px-3 py-1 rounded-full border-border/80 text-xs">
                        <Calendar className="mr-1.5 h-3.5 w-3.5 text-primary" />
                        {announcement.date}
                      </Badge>
                      {announcement.isNew && (
                        <Badge className="bg-secondary text-secondary-foreground font-bold px-3 py-1 rounded-full text-xs uppercase">
                          Yeni Duyuru
                        </Badge>
                      )}
                    </div>
                    <DialogTitle className="font-serif font-black text-2xl md:text-3xl text-foreground leading-tight">
                      {announcement.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  {/* RESİM ALANI */}
                  {announcement.image_url && (
                    <div className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden my-6 border border-border/60 shadow-md">
                      <Image
                        src={announcement.image_url}
                        alt={announcement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="mt-6 space-y-4">
                    <p className="text-foreground/80 leading-relaxed text-base font-sans">
                      {announcement.longDescription}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border/80 flex justify-end">
                    <p className="text-xs text-muted-foreground italic font-medium">
                      Tanıtım ve Oryantasyon Komisyonu tarafından yayınlanmıştır.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
