/**
 * Drawer Showcase
 * Mobile drawer: from bottom, with handle
 */

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../../../ui-components/Drawer'
import { Button } from '../../../../ui-components/Button'

export function DrawerShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>This is a mobile-friendly drawer from bottom</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">Drawer content goes here</p>
          </div>
        </DrawerContent>
      </Drawer>
      
      <div className="text-xs text-muted-foreground">Click button to see drawer (mobile optimized)</div>
    </div>
  )
}

