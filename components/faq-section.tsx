"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import faqsData from "@/data/faqs.json"

const faqs = faqsData as Array<{
  id: string
  question: string
  answer: string
}>

export function FaqSection() {
  return (
    <section id="sss" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/medical-students.jpg"
              alt="Tıp öğrencileri laboratuvarda çalışıyor"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-muted-foreground text-lg">
              Aday öğrencilerimizin merak ettiği soruların cevaplarını burada bulabilirsiniz. Daha fazla bilgi için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
