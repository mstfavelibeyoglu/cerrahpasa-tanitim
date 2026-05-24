"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#ana-sayfa", label: "Ana Sayfa" },
  { href: "#duyurular", label: "Duyurular" },
  { href: "#rehber", label: "Rehber" },
  { href: "#sss", label: "SSS" },
  { href: "#formlar", label: "Formlar" },
  { href: "#instagram", label: "Sosyal Medya" },
  { href: "#iletisim", label: "İletişim" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-primary/10 py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#ana-sayfa" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 bg-card group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/ctf-logo.png"
                alt="Cerrahpaşa Tıp Fakültesi"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                Cerrahpaşa Tıp
              </span>
              <span className="block text-[10px] uppercase font-bold text-primary tracking-wider -mt-1 font-sans">
                Tanıtım ve Oryantasyon
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-xs uppercase tracking-wider font-bold text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5 active:scale-95"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
