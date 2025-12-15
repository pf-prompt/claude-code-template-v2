/**
 * Popover Showcase
 * Popover: default, with arrow, different positions
 */

import { Popover, PopoverContent, PopoverTrigger } from '../../../../ui-components/Popover'

export function PopoverShowcase() {
  return (
    <div className="w-full flex flex-wrap gap-2">
      {/* Default */}
      <Popover>
        <PopoverTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
          Default
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Popover</h4>
            <p className="text-xs text-muted-foreground">This is a popover content</p>
          </div>
        </PopoverContent>
      </Popover>
      
      {/* Top */}
      <Popover>
        <PopoverTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
          Top
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-xs">Popover on top</p>
        </PopoverContent>
      </Popover>
      
      {/* Right */}
      <Popover>
        <PopoverTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
          Right
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-xs">Popover on right</p>
        </PopoverContent>
      </Popover>
      
      {/* Bottom */}
      <Popover>
        <PopoverTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
          Bottom
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p className="text-xs">Popover on bottom</p>
        </PopoverContent>
      </Popover>
      
      <div className="w-full text-xs text-muted-foreground mt-2">Click buttons to see popovers</div>
    </div>
  )
}

