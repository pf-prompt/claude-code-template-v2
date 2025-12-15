/**
 * Accordion Showcase
 * Accordion: single expand, multiple expand, with icon
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../ui-components/Accordion'
import { Icon } from '../../../../ui-components/Icon'

export function AccordionShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Single Expand */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Single</div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">Item 1</AccordionTrigger>
            <AccordionContent className="text-xs">
              Content for item 1
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm">Item 2</AccordionTrigger>
            <AccordionContent className="text-xs">
              Content for item 2
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      {/* Multiple Expand with Icon */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Multiple</div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="a">
            <AccordionTrigger className="text-sm">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:star" className="size-4" />
                With Icon
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xs">
              Content with icon
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

