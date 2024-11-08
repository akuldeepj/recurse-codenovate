import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { div } from "framer-motion/client"
  
  export function AccordionDemo() {
    return (
    <div className="max-w-7xl mx-auto w-[90vw] px-4 sm:px-6 lg:px-8" id="faq">
        <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-400  my-8 text-center">
            FAQ
        </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the schedule for the hackathon?</AccordionTrigger>
          <AccordionContent>
            The hackathon starts at 9 AM and ends at 9 AM the following day. Check the event page for detailed schedules.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are there any themes or tracks?</AccordionTrigger>
          <AccordionContent>
            Yes, participants can choose from themes like AI, sustainability, and fintech. More details are available on the registration page.
          </AccordionContent>
        </AccordionItem>
    
        <AccordionItem value="item-3">
          <AccordionTrigger>How are the projects judged?</AccordionTrigger>
          <AccordionContent>
            Projects are judged based on innovation, impact, and technical execution. The judging panel includes industry experts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I participate remotely?</AccordionTrigger>
          <AccordionContent>
            No, the hackathon is in-person and will be held at Keshav Memorial Institute of Technology, Hyderabad.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What are the prizes?</AccordionTrigger>
          <AccordionContent>
            There will be cash prizes for the top 3 teams .
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  