"use client"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Download } from "lucide-react"
import Image from "next/image"

const chapters = [
  {
    id: "dekan",
    title: "Dekanımızın Mesajı",
    content: `Sevgili Öğrencilerimiz,

Cerrahpaşa Tıp Fakültesi köklü geçmişi, güçlü akademik kadrosu ve topluma hizmet misyonu ile sağlık alanında önemli bir yere sahiptir. 1827 yılında temelleri atılan bu büyük çınarın bir parçası olarak, her birinizin bu tarihi mirasa katkı sağlayacağına olan inancım sonsuzdur.

Fakültemiz bilimsel mükemmeliyeti, etik değerlere bağlılığı ve topluma hizmeti ön planda tutarak, her öğrencisini sadece birer hekim olarak değil, aynı zamanda sorumluluk sahibi, duyarlı ve insan haklarına saygılı bireyler olarak yetiştirmeyi hedeflemektedir.

Fakültemize adım attığınız ilk günden itibaren hissettiğiniz Cerrahpaşa Tıp Fakültesi mensubu olmanın ayrıcalığını mezun olduktan sonra da kariyeriniz boyunca hissedeceksiniz.

Prof. Dr. Emin Köse
Dekan`,
  },
  {
    id: "universite",
    title: "Üniversitemiz",
    content: `Üniversitemizin temelleri; İstanbul'un Fethi sonrasında kurulan Fatih Medreselerine dayanır. 1863 yılında İstanbul Darülfünunu, 1933 yılında (üniversite reformu ile) İstanbul Üniversitesi adını alan üniversitemiz 2018 yılında İstanbul Üniversitesi-Cerrahpaşa ismi ile ayrılarak yeniden kurulur.

Günümüzde İstanbul Üniversitesi-Cerrahpaşa; 2313 akademik, 4481 idari, toplam 6794 personel ile 32.912 öğrenciye hizmet vermektedir. Üniversite; Avcılar, Bahçeköy, Bakırköy, Büyükçekmece, Sultangazi, Şişli, Samatya, Cerrahpaşa ve Yeşilköy olmak üzere 9 ayrı yerleşkede faaliyetlerini sürdürmektedir.

Bugün İstanbul Üniversitesi-Cerrahpaşa bünyesinde 12 fakülte, 6 enstitü, 1 yüksekokul, 5 meslek yüksekokulu ve 17 uygulama ve araştırma merkezi bulunmaktadır.`,
  },
  {
    id: "tarihce",
    title: "Fakültemizin Tarihçesi",
    content: `"Cerrahpaşa Tıp Fakültesinin" bir eğitim kurumu olarak kökleri Osmanlı Sultanı II. Mahmud Döneminde Hekimbaşı Mustafa Behçet Efendi nezaretinde 14 Mart 1827 tarihinde Fatih/Vezneciler'de açılan "Tıphane-i Amire"ye dayanmaktadır.

Cerrahpaşa Hastanesi; 1893'te İstanbul'da baş gösteren kolera salgını sırasında Belediye tarafından seçilen Takıyüddin Paşa Konağı'nın geçici olarak hastaneye dönüştürülmesi ile kurulmuştur. 23 Temmuz 1910 tarihinde Cerrahpaşa Zükûr (erkek) Hastanesi adı ile hizmete açılır.

Cumhuriyetimizin Kurucusu Gazi Mustafa Kemal Atatürk Cerrahpaşa Hastanesi'ni ilk kez 1930 yılında ziyaret eder. Hastane defterine şöyle yazar: "Gördüklerimden memnun oldum. Temizlik, intizam, ciddi mesai takdire şayandır."

1967'ye gelindiğinde İstanbul Üniversitesi Tıp Fakültesi "İstanbul ve Cerrahpaşa Tıp Fakültesi" olarak ikiye ayrılır.`,
  },
  {
    id: "misyon",
    title: "Misyon ve Vizyonumuz",
    content: `MİSYONUMUZ
Öğrencileri mesleki yetkinliğin gerektirdiği en üst düzeyde bilgi, beceri ve sorumluluk bilincine sahip, evrensel etik değerlere bağlı, insan onuruna saygılı, yaşam boyu gelişime açık, sosyal ve entelektüel alanda topluma örnek olabilecek araştırıcı ve üretici hekimler olarak yetiştirmek.

VİZYONUMUZ
Tıp eğitimi, sağlık hizmetleri ve bilimsel araştırma alanlarında ulusal ve uluslararası düzeyde öncülük yapan saygın ve sosyal güvenilir bir tıp fakültesi olmak.

KURUMSAL AMAÇ
Cerrahpaşa Tıp Fakültesinin temel amacı, tıp eğitimi, sağlık hizmeti ve bilimsel araştırma alanlarında ülkemizin ve dünyanın öncü, lider ve tercih edilen tıp fakülteleri arasında yer almaktır.`,
  },
  {
    id: "egitim",
    title: "Eğitim Sistemimiz",
    content: `Cerrahpaşa Tıp Fakültesi, 2008-2009 öğretim döneminden itibaren klasik eğitim sisteminden "Tam Entegre Eğitim Sistemi"ne geçiş yaparak bu konuda ülkemizin öncü fakültelerinden biri olmuştur.

Fakültemizde uygulanan tıp eğitimi üçe ayrılır:
• Klinik Öncesi Dönem (1-2-3. Sınıflar)
• Klinik Staj Dönemi (4 ve 5. Sınıflar)
• İntörnlük Dönemi (6. Sınıf)

YATAY ENTEGRE EĞİTİM SİSTEMİ
Organ, doku ve sistem odaklı ders kurullarında bir sistemin tüm yönleriyle —hem sağlıklı yapısı hem de hastalık süreçleriyle birlikte— aynı dönemde, aynı kurul içerisinde bütüncül bir şekilde ele alınması sağlanmaktadır.

DİKEY ENTEGRE EĞİTİM SİSTEMİ
Klinik öncesi dönem ders programının içerisinde klinik eğitimin de bulunmasıdır. Öğrenciler birinci sınıftan itibaren klinik ve hasta odaklı yaklaşımı öğrenmektedir.`,
  },
  {
    id: "akademik",
    title: "Akademik Kadro ve Danışmanlık",
    content: `Fakültemizde öğrencilerimize akademik ve kişisel gelişimlerinde rehberlik etmek üzere "Danışman Hoca" sistemi uygulanmaktadır. Her öğrenciye kayıt yaptığı andan itibaren bir danışman hoca atanır.

Danışman hocalar:
• Öğrencilerin akademik performansını takip eder
• Ders seçimi ve kariyer planlaması konusunda yönlendirme yapar
• Kişisel sorunlarda destek sağlar
• Öğrenciyi yıl boyunca belirli aralıklarla görüşmeye davet eder

Ayrıca fakültemizde Öğrenci Psikolojik Danışmanlık ve Rehberlik Merkezi de hizmet vermektedir.`,
  },
  {
    id: "programlar",
    title: "Tıp Eğitimi Programlarımız",
    content: `Fakültemizde iki ayrı tıp programı bulunmaktadır:

TÜRKÇE TIP PROGRAMI
6 yıllık tıp eğitimi, Türkçe olarak verilmektedir. Her yıl yaklaşık 400 öğrenci kabul edilmektedir.

İNGİLİZCE TIP PROGRAMI
Uluslararası öğrencilere ve İngilizce eğitim almak isteyen Türk öğrencilere yönelik 6 yıllık program. Aynı müfredat ve kalite standartları uygulanmaktadır.

Her iki programda da:
• Temel tıp bilimleri eğitimi
• Klinik stajlar
• Simülasyon merkezinde uygulamalı eğitim
• Araştırma projeleri imkanı sunulmaktadır.`,
  },
  {
    id: "akreditasyon",
    title: "Akreditasyon",
    content: `Cerrahpaşa Tıp Fakültesi, TEPDAD (Tıp Eğitimi Programları Değerlendirme ve Akreditasyon Derneği) tarafından akredite edilmiştir.

AKREDİTASYONUN ÖNEMİ
• Eğitim kalitesinin ulusal ve uluslararası standartlarda olduğunun tescili
• Mezunların yurt dışında da tanınırlığı
• Sürekli iyileştirme ve kalite güvencesi
• Öğrenci ve mezun haklarının korunması

Fakültemiz, akreditasyon sürecinde belirlenen tüm standartları karşılamakta ve eğitim kalitesini sürekli olarak geliştirmektedir.`,
  },
  {
    id: "uzmanlik",
    title: "Tıpta Uzmanlık ve Fakültemiz",
    content: `Fakültemiz mezunları TUS (Tıpta Uzmanlık Sınavı) sınavlarında başarılı sonuçlar elde etmektedir.

Fakültemizde 50'den fazla anabilim dalında tıpta uzmanlık eğitimi verilmektedir:
• Dahili Tıp Bilimleri
• Cerrahi Tıp Bilimleri
• Temel Tıp Bilimleri

Mezunlarımız:
• Türkiye'nin en prestijli hastanelerinde
• Üniversite hastanelerinde
• Özel sağlık kuruluşlarında
• Yurt dışında görev yapmaktadır.`,
  },
  {
    id: "yurtdisi",
    title: "Yurt Dışı Olanakları",
    content: `Fakültemiz, uluslararası deneyim kazanmak isteyen öğrencilerine geniş fırsatlar sunmaktadır.

ERASMUS+ PROGRAMI
Avrupa Birliği ülkelerindeki partner üniversitelerde 1-2 dönem eğitim imkanı.

İKİLİ ANLAŞMALAR
Avrupa dışındaki üniversitelerle yapılan anlaşmalar kapsamında değişim programları.

YAZ STAJLARI
• IFMSA (Uluslararası Tıp Öğrencileri Birliği) aracılığıyla yurt dışı staj imkanı
• Araştırma stajları
• Klinik gözlem programları

Her yıl çok sayıda öğrencimiz bu fırsatlardan yararlanmaktadır.`,
  },
  {
    id: "kultur",
    title: "Cerrahpaşa'da Bilim, Kültür, Sanat ve Spor",
    content: `Fakültemizde akademik başarının yanı sıra sosyal ve kültürel gelişim de desteklenmektedir.

ÖĞRENCİ KULÜPLERİ
• Tıbbi araştırma toplulukları
• Tiyatro ve drama kulübü
• Müzik ve koro grupları
• Spor kulüpleri (futbol, basketbol, voleybol, tenis vb.)
• Sosyal sorumluluk kulüpleri
• Fotoğrafçılık ve sinema kulübü

ETKİNLİKLER
• Bilimsel kongreler ve sempozyumlar
• Kültürel festivaller
• Spor turnuvaları
• Mezuniyet geceleri
• Kariyer günleri`,
  },
  {
    id: "ogrenci",
    title: "Cerrahpaşa'da Öğrenci Olmak",
    content: `Cerrahpaşa'da öğrenci olmak, güçlü bir aile bağı kurmak demektir.

SUNULAN HİZMETLER
• Öğrenci Danışmanlık Merkezi
• Psikolojik Destek Hizmetleri
• Kariyer Merkezi
• Sağlık Merkezi
• Kütüphane ve Çalışma Alanları
• Yemekhane ve Kafeteryalar

SOSYAL İMKANLAR
• Spor tesisleri
• Öğrenci kulüpleri
• Sosyal etkinlik alanları

Öğrencilerimize her adımda destek sağlıyoruz.`,
  },
  {
    id: "barinma",
    title: "Barınma ve Ulaşım",
    content: `BARINMA
• KYK Yurtları: Kampüse yakın KYK yurtlarında kontenjan bulunmaktadır
• Özel Yurtlar: Çevrede birçok özel yurt seçeneği mevcuttur
• Kiralık Daire: Fatih ve çevre ilçelerde uygun fiyatlı konut seçenekleri

ULAŞIM
Cerrahpaşa Kampüsü İstanbul'un Fatih ilçesinde merkezi bir konumdadır.
• Metro: Aksaray istasyonu (yürüme mesafesinde)
• Tramvay: Haseki durağı
• Otobüs: Çok sayıda hat
• Metrobüs: Bağlantı hatlarıyla erişim

Kampüs, şehrin her noktasından kolayca ulaşılabilir konumdadır.`,
  },
  {
    id: "yenilenme",
    title: "Yerinde Yenilenme Projesi",
    content: `Kampüsümüzde kapsamlı bir modernizasyon projesi yürütülmektedir.

PROJE KAPSAMI
• Yeni eğitim binaları
• Modern laboratuvarlar
• Simülasyon merkezi genişletmesi
• Teknolojik altyapı yenileme
• Yeşil alan düzenlemeleri

HEDEFLER
• Çağdaş eğitim ortamı oluşturmak
• Araştırma kapasitesini artırmak
• Öğrenci konforunu iyileştirmek
• Sürdürülebilir kampüs anlayışı

Proje tamamlandığında Cerrahpaşa, Türkiye'nin en modern tıp fakültesi kampüslerinden birine sahip olacaktır.`,
  },
  {
    id: "dinleyin",
    title: "Bizden Dinleyin",
    content: `Mevcut öğrencilerimiz ve mezunlarımız Cerrahpaşa deneyimlerini sizlerle paylaşıyor.

"Cerrahpaşa'da aldığım eğitim, sadece tıbbi bilgi değil, bir hekim olarak nasıl davranmam gerektiğini de öğretti." - 6. Sınıf Öğrencisi

"Hocalarımızın desteği ve rehberliği ile zorlu tıp eğitimini başarıyla tamamladım." - Mezun

"Erasmus programıyla Almanya'da staj yapma fırsatı buldum. Bu deneyim kariyerime büyük katkı sağladı." - 5. Sınıf Öğrencisi

Sosyal medya hesaplarımızı takip ederek güncel öğrenci deneyimlerini görebilirsiniz.`,
  },
  {
    id: "ozetle",
    title: "Özetle / Cerrahpaşalı Olmak",
    content: `CERRAHPAŞALI OLMAK
• Köklü bir geleneğin parçası olmak
• Kaliteli ve akredite eğitim almak
• Güçlü bir akademik kadrodan öğrenmek
• Uluslararası fırsatlardan yararlanmak
• Güçlü bir mezun ağına katılmak
• Topluma hizmet eden bir hekim olmak

"Bir ekol, bir duruş, bir mirastır Cerrahpaşa"

Sizleri de aramızda görmek için sabırsızlanıyoruz!

Detaylı bilgi için: cerrahpasa.iuc.edu.tr`,
  },
]

export function GuideSection() {
  return (
    <section id="rehber" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with image */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Aday Öğrenci Rehberi 2025
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Cerrahpaşa Tıp Fakültesi hakkında bilmeniz gereken her şey, bölüm bölüm açıklanmıştır.
            </p>
            <p className="text-sm text-muted-foreground mb-6 italic">
              Bu rehber, Cerrahpaşa Tıp Fakültesi Tanıtım ve Oryantasyon Ekibi tarafından hazırlanmıştır. Haziran, 2025
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <a href="/aday-ogrenci-rehberi-2025.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                PDF olarak indir
              </a>
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/haydarpasa-building.jpg"
              alt="Haydarpaşa Tıbbiye Binası"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
              Tarihi Haydarpaşa Tıbbiye Binası
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-card rounded-2xl p-8 mb-12 border border-border text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-4">
            &ldquo;Bir ekol, bir duruş, bir mirastır Cerrahpaşa&rdquo;
          </blockquote>
          <p className="text-muted-foreground">Aday Öğrenci Rehberi 2025-2026</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {chapters.map((chapter) => (
            <AccordionItem
              key={chapter.id}
              value={chapter.id}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-primary transition-colors py-5">
                {chapter.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 whitespace-pre-line">
                {chapter.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20"
          >
            <a href="/aday-ogrenci-rehberi-2025.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Rehberi PDF Olarak İndir
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
