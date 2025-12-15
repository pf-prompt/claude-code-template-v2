/**
 * Sheet Showcase
 * Side drawer: left, right, top, bottom
 */

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../../../ui-components/Sheet'
import { Button } from '../../../../ui-components/Button'

export function SheetShowcase() {
  return (
    <div className="w-full flex flex-wrap gap-2">
      {/* Left */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>Content from left side</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
      {/* Right */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>Content from right side</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
      {/* Top */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>Content from top</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
      {/* Bottom */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>Content from bottom</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
      <div className="w-full text-xs text-muted-foreground mt-2">Click buttons to see sheets</div>
    </div>
  )
}

