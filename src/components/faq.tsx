import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faqData from "./faq.json"

interface FAQItem {
  id: string
  question: string
  answer: string
}

export function AccordionDemo(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto w-[90vw] px-4 sm:px-6 lg:px-8" id="faq">
      <h1 className="text-4xl sm:text-6xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-400 my-8 text-center">
        FAQ
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item: FAQItem) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
