import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardList, FileText, MessageSquare, ExternalLink } from "lucide-react"

const forms = [
  {
    id: 1,
    title: "Tanıtım Anketi",
    description: "Fakültemizi nasıl duydunuz? Görüşleriniz bizim için değerli.",
    icon: ClipboardList,
    // TODO: Gerçek Google Form URL'sini buraya ekleyin
    url: "https://forms.google.com",
  },
  {
    id: 2,
    title: "Başvuru Formu",
    description: "Tanıtım etkinliklerimize katılım için başvuru yapın.",
    icon: FileText,
    // TODO: Gerçek Google Form URL'sini buraya ekleyin
    url: "https://forms.google.com",
  },
  {
    id: 3,
    title: "Soru ve Görüş Formu",
    description: "Sorularınızı ve önerilerinizi bizimle paylaşın.",
    icon: MessageSquare,
    // TODO: Gerçek Google Form URL'sini buraya ekleyin
    url: "https://forms.google.com",
  },
]

export function FormsSection() {
  return (
    <section id="formlar" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Formlar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Anketlerimize katılın, başvuru yapın veya bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {forms.map((form) => (
            <Card
              key={form.id}
              className="group bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <form.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {form.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {form.description}
                </p>
                <Button
                  asChild
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={form.url} target="_blank" rel="noopener noreferrer">
                    Formu Aç
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
