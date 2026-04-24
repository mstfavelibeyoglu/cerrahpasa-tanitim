import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

const mockPosts = [
  { id: 1, color: "bg-primary/20" },
  { id: 2, color: "bg-secondary/30" },
  { id: 3, color: "bg-accent" },
  { id: 4, color: "bg-primary/30" },
  { id: 5, color: "bg-secondary/20" },
  { id: 6, color: "bg-accent/80" },
  { id: 7, color: "bg-primary/15" },
  { id: 8, color: "bg-secondary/40" },
  { id: 9, color: "bg-accent/60" },
]

export function InstagramSection() {
  return (
    <section id="instagram" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Sosyal Medya
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Güncel paylaşımlarımız ve etkinliklerimiz için bizi takip edin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
            <a
              href="https://instagram.com/cerrahpasaliolmak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">@cerrahpasaliolmak</span>
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="https://instagram.com/iuc.cerrahpasatip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">@iuc.cerrahpasatip</span>
            </a>
          </div>
        </div>

        {/* Mock Instagram Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-10 max-w-lg mx-auto">
          {mockPosts.map((post) => (
            <div
              key={post.id}
              className={`aspect-square rounded-xl ${post.color} hover:scale-105 transition-transform cursor-pointer relative overflow-hidden group flex flex-col items-center justify-center`}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-foreground/40 group-hover:text-foreground/80 transition-colors" />
                <span className="text-[8px] sm:text-[10px] text-foreground/30 font-medium group-hover:text-foreground/60 transition-colors">📸 Görsel</span>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            <a
              href="https://instagram.com/cerrahpasaliolmak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram&apos;da takip et
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
