import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { GuideSection } from "@/components/guide-section"
import { FaqSection } from "@/components/faq-section"
import { AnnouncementsSection } from "@/components/announcements-section"
import { FormsSection } from "@/components/forms-section"
import { InstagramSection } from "@/components/instagram-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GuideSection />
      <FaqSection />
      <AnnouncementsSection />
      <FormsSection />
      <InstagramSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
