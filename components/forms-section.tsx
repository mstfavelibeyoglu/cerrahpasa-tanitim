"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardList, FileText, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

interface FormItem {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  url: string
}

const forms: FormItem[] = [
  {
    id: 1,
    title: "Tanıtım Anketi",
    description: "Fakültemizi nasıl duydunuz? Görüşleriniz bizim için değerli.",
    icon: ClipboardList,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfD_cerrahpasa_tanitim_anketi/viewform",
  },
  {
    id: 2,
    title: "Başvuru Formu",
    description: "Tanıtım etkinliklerimize katılım için başvuru yapın.",
    icon: FileText,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfD_cerrahpasa_basvuru_formu/viewform",
  },
  {
    id: 3,
    title: "Soru ve Görüş Formu",
    description: "Sorularınızı ve önerilerinizi bizimle paylaşın.",
    icon: MessageSquare,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfD_cerrahpasa_soru_gorus/viewform",
  },
]

export function FormsSection() {
  const [consents, setConsents] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  })

  return (
    <section id="formlar" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" /> Güvenli İletişim Kanalları
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Aday Öğrenci İletişim Formları
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Görüşlerinizi bizimle paylaşmak için aşağıdaki formları kullanabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {forms.map((form) => (
            <Card
              key={form.id}
              className="group bg-card/60 backdrop-blur-md border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <form.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {form.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                  {form.description}
                </p>

                {/* Direct KVKK Consent Box inside Card */}
                <div className="flex items-start gap-2.5 text-left mb-6 bg-muted/40 p-3.5 rounded-xl border border-border/50 w-full transition-colors group-hover:bg-muted/60">
                  <Checkbox
                    id={`kvkk-${form.id}`}
                    checked={consents[form.id] || false}
                    onCheckedChange={(checked) =>
                      setConsents((prev) => ({ ...prev, [form.id]: checked === true }))
                    }
                    className="mt-0.5"
                  />
                  <label
                    htmlFor={`kvkk-${form.id}`}
                    className="text-[10px] text-muted-foreground leading-normal cursor-pointer select-none"
                  >
                    Kişisel verilerimin işlenmesine ve Google altyapısı sebebiyle yurt dışına aktarılmasına onay veriyorum.
                  </label>
                </div>

                <Button
                  asChild={consents[form.id]}
                  disabled={!consents[form.id]}
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {consents[form.id] ? (
                    <a href={form.url} target="_blank" rel="noopener noreferrer">
                      Formu Aç
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Onaylayıp Devam Et
                      <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                    </span>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
