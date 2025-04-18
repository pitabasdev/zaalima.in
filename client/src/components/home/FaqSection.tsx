import { useState } from "react";
import { faqItems } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <div className="bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral-800 text-center mb-12">
          Got Questions?
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border border-neutral-200 rounded-lg overflow-hidden mb-4 bg-white">
                <AccordionTrigger className="px-5 py-4 font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <p className="text-neutral-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
