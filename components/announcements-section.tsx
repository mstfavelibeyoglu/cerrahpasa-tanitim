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
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface Announcement {
  id: number
  title: string
  description: string
  longDescription: string
  date: string
  isNew: boolean
}

export function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const { data, error } = await supabase
          .from("announcements")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) throw error
        setAnnouncements(data || [])
      } catch (error) {
        console.error("Duyurular yüklenemedi:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncements()
  }, [])

  if (loading) {
    return (
      <section id="duyurular" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Duyurular yükleniyor...</p>
        </div>
      </section>
    )
  }

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

        {announcements.length === 0 ? (
          <div className="text-center text-muted-foreground">
            <p>Henüz duyuru yok.</p>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  )
}
