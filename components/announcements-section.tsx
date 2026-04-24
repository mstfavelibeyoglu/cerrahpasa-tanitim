"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Info, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const announcements = [
  {
    id: 0,
    title: "2026 Yaz Sezonu Tanıtım Günleri Tarihleri İlan Edildi",
    description:
      "2026 yaz sezonu aday öğrenci tanıtım günleri 20 Temmuz 2026 - 8 Ağustos 2026 tarihleri arasında gerçekleştirilecektir.",
    longDescription:
      "Cerrahpaşa Tıp Fakültesi 2026 Yaz Sezonu Aday Öğrenci Tanıtım Günleri tarihleri netleşti! 20 Temmuz - 8 Ağustos 2026 tarihleri arasında gerçekleştireceğimiz etkinliklerde; kampüs turları, bölüm tanıtımları, akademisyenlerimizle söyleşiler ve öğrenci kulüplerimizin stantları yer alacak. Tüm adaylarımızı ve ailelerini Türkiye'nin en köklü tıp eğitimi kurumlarından birini yakından tanımaya davet ediyoruz.",
    date: "24 Nisan 2026",
    isNew: true,
  },
  {
    id: 1,
    title: "2025-2026 Oryantasyon Programı Tarihleri Açıklandı",
    description:
      "Yeni dönem oryantasyon programımız 9-13 Eylül tarihleri arasında gerçekleştirilecektir. Tüm yeni öğrencilerimizi bekliyoruz!",
    longDescription:
      "Yeni kazanan öğrencilerimiz için hazırladığımız kapsamlı oryantasyon programı 9-13 Eylül tarihleri arasında yapılacaktır. Program kapsamında; fakülte işleyişi, hastane turları, kütüphane kullanımı, öğrenci işleri bilgilendirmesi ve üst dönem öğrencilerle tanışma etkinlikleri yer alacaktır. Katılım zorunlu olmamakla birlikte, uyum süreci için şiddetle tavsiye edilir.",
    date: "15 Ağustos 2025",
    isNew: false,
  },
  {
    id: 2,
    title: "Kayıt Belgeleri Güncellendi",
    description:
      "2025-2026 akademik yılı için gerekli kayıt belgeleri listesi güncellenmiştir. Lütfen kontrol ediniz.",
    longDescription:
      "Kesin kayıt işlemleri için gerekli olan belgeler listesi, YÖK ve üniversitemiz senatosu kararları doğrultusunda güncellenmiştir. Eksik belge ile kayıt yapılması mümkün değildir. Lütfen web sitemizdeki duyurular bölümünden güncel belge listesini indirerek hazırlıklarınızı tamamlayınız.",
    date: "10 Ağustos 2025",
    isNew: false,
  },
  {
    id: 3,
    title: "Tanıtım Günleri Etkinliği",
    description:
      "Ağustos ayı boyunca her Cumartesi kampüs tanıtım turları düzenlenmektedir. Katılım ücretsizdir.",
    longDescription:
      "Fakültemizi merak eden tüm adaylar için Ağustos ayı boyunca her Cumartesi günü saat 11:00 ve 14:00'te rehberli turlar düzenliyoruz. Turlarımızda hem tarihi binalarımızı hem de yeni eğitim alanlarımızı görebilirsiniz.",
    date: "1 Ağustos 2025",
    isNew: false,
  },
  {
    id: 4,
    title: "Yeni Tanıtım Videosu Yayında",
    description:
      "Fakültemizi ve kampüs yaşamını tanıtan yeni videomuz YouTube kanalımızda yayınlandı.",
    longDescription:
      "Cerrahpaşa'da bir gün nasıl geçer? Eğitim olanaklarımız, laboratuvarlarımız ve sosyal hayatımız hakkında her şeyi bulabileceğiniz yeni tanıtım filmimiz yayında. Videoyu profilimizdeki linkten veya resmi YouTube kanalımızdan izleyebilirsiniz.",
    date: "25 Temmuz 2025",
    isNew: false,
  },
  {
    id: 5,
    title: "Soru-Cevap Canlı Yayını",
    description:
      "Aday öğrencilerimiz için Instagram üzerinden canlı soru-cevap etkinliği düzenlenecektir.",
    longDescription:
      "Aday öğrencilerimizin merak ettiği soruları yanıtlamak üzere Fakülte Temsilcilerimiz ve Tanıtım Ekibimizle Instagram üzerinden canlı yayın gerçekleştireceğiz. Sorularınızı şimdiden DM yoluyla iletebilirsiniz.",
    date: "20 Temmuz 2025",
    isNew: false,
  },
]

export function AnnouncementsSection() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<typeof announcements[0] | null>(null)

  return (
    <section id="duyurular" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Duyurular
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Önemli tarihler, etkinlikler ve güncellemelerden haberdar olun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Dialog key={announcement.id}>
              <DialogTrigger asChild>
                <Card
                  onClick={() => setSelectedAnnouncement(announcement)}
                  className="group bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{announcement.date}</span>
                      </div>
                      {announcement.isNew && (
                        <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                          Yeni
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {announcement.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {announcement.description}
                    </p>
                    <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Detayları Gör <Info className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] rounded-3xl">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {announcement.date}
                    </Badge>
                    {announcement.isNew && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        Yeni Duyuru
                      </Badge>
                    )}
                  </div>
                  <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                    {announcement.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-6 space-y-4">
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {announcement.longDescription}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex justify-end">
                  <p className="text-xs text-muted-foreground italic">
                    Tanıtım ve Oryantasyon Ekibi tarafından yayınlanmıştır.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
