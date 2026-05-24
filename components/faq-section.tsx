"use client"

import { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

interface FAQ {
  id: number
  question: string
  answer: string
}

// Bilgi İşlem Daire Başkanlığı'ndan gelecek veritabanı/CMS kararına göre 
// varsayılan olarak sunulacak yüksek kaliteli yerel veriler (Fallback / Static Data).
const defaultFaqs: FAQ[] = [
  {
    id: 1,
    question: "Cerrahpaşa Tıp Fakültesi'nde eğitim dili nedir?",
    answer: "Fakültemizde hem Türkçe Tıp Programı hem de %100 İngilizce Tıp Programı bulunmaktadır. Her iki program da tıp eğitimi standartlarında en üst düzeyde ulusal ve uluslararası akreditasyona sahiptir.",
  },
  {
    id: 2,
    question: "Eğitim süresi ne kadardır ve hazırlık sınıfı var mıdır?",
    answer: "Eğitim süresi 6 yıldır. İngilizce Tıp Programı'nı kazanan öğrencilerimiz için yabancı dil muafiyet sınavını geçemedikleri takdirde 1 yıl zorunlu İngilizce hazırlık eğitimi verilmektedir. Türkçe Tıp Programı için hazırlık zorunlu değildir.",
  },
  {
    id: 3,
    question: "TUS (Tıpta Uzmanlık Sınavı) başarı oranınız nedir?",
    answer: "Cerrahpaşa Tıp Fakültesi, her yıl TUS şampiyonları çıkarmakta ve Türkiye genelinde ilk 100 ile ilk 1000'de en çok öğrencisi bulunan lider tıp fakültesi unvanını korumaktadır. Mezunlarımızın uzmanlık yerleşme oranı zirvededir.",
  },
  {
    id: 4,
    question: "Uluslararası değişim programları (Erasmus, staj vb.) imkanları nelerdir?",
    answer: "Öğrencilerimiz Erasmus+ kapsamında Avrupa'nın önde gelen tıp fakültelerinde eğitim veya staj hareketliliğinden yararlanabilmektedir. Ayrıca öğrenci kulüplerimiz aracılığıyla dünya genelinde klinik staj değişim imkanları sunulmaktadır.",
  },
  {
    id: 5,
    question: "Fakültenin hastane ve klinik eğitim altyapısı nasıldır?",
    answer: "Cerrahpaşa Tıp Fakültesi Hastanesi, Türkiye'nin en büyük referans hastanelerinden biridir. Öğrencilerimiz 4. sınıftan itibaren zengin hasta çeşitliliği, modern simülasyon merkezleri ve ameliyathanelerde birebir pratik eğitim almaktadır.",
  },
]

export function FaqSection() {
  const [faqs, setFaqs] = useState<FAQ[]>(defaultFaqs)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // ==========================================
    // 🖥️ BİLGİ İŞLEM DAİRE BAŞKANLIĞI ENTEGRASYON ALANI
    // ==========================================
    // Kurumsal CMS veya yerel JSON entegrasyonu yapıldığında aşağıdaki örnek kodları açabilirsiniz.
    
    /* 
    // Örnek Yöntem A: Sitenin kendi yerel klasöründeki JSON dosyasından okuma (Statik Derleme Uyumlu)
    const fetchLocalFaqs = async () => {
      try {
        setLoading(true);
        const res = await fetch('/data/faqs.json');
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error("Yerel SSS verisi yüklenemedi, varsayılanlar gösteriliyor.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLocalFaqs();
    */

    /*
    // Örnek Yöntem B: Kurumsal API (REST) üzerinden okuma
    const fetchApiFaqs = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://tip.iuc.edu.tr/api/faqs');
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error("API SSS yüklenemedi, varsayılanlar gösteriliyor.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApiFaqs();
    */
  }, [])

  if (loading) {
    return (
      <section id="sss" className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-muted-foreground animate-pulse">SSS yükleniyor...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="sss" className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border/40">
            <Image
              src="/images/medical-students.jpg"
              alt="Tıp öğrencileri laboratuvarda çalışıyor"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-xs font-semibold uppercase tracking-wider">
              Merak Edilenler
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aday öğrencilerimizin en çok merak ettiği soruların cevaplarını burada derledik. Aklınıza takılan diğer tüm sorular için bizimle dilediğiniz zaman iletişime geçebilirsiniz.
            </p>
          </div>
        </div>

        {faqs.length === 0 ? (
          <div className="text-center text-muted-foreground py-10 bg-muted/20 rounded-2xl border border-dashed border-border">
            <p>Henüz soru-cevap eklenmemiş.</p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id.toString()}
                className="bg-card/50 backdrop-blur-xs rounded-2xl border border-border/80 px-6 data-[state=open]:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-serif font-bold text-lg text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  )
}
