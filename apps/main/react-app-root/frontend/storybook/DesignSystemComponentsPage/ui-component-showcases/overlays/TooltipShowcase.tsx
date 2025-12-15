/**
 * Tooltip Showcase
 * Tooltip: top, bottom, left, right
 */

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../../ui-components/Tooltip'

export function TooltipShowcase() {
  return (
    <TooltipProvider>
      <div className="w-full flex flex-wrap gap-2">
        {/* Top */}
        <Tooltip>
          <TooltipTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
            Top
          </TooltipTrigger>
          <TooltipContent side="top">
            <p className="text-xs">Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
        
        {/* Bottom */}
        <Tooltip>
          <TooltipTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
            Bottom
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p className="text-xs">Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
        
        {/* Left */}
        <Tooltip>
          <TooltipTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
            Left
          </TooltipTrigger>
          <TooltipContent side="left">
            <p className="text-xs">Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
        
        {/* Right */}
        <Tooltip>
          <TooltipTrigger className="px-3 py-1.5 text-sm text-foreground border border-input rounded-md hover:bg-accent">
            Right
          </TooltipTrigger>
          <TooltipContent side="right">
            <p className="text-xs">Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
        
        <div className="w-full text-xs text-muted-foreground mt-2">Hover buttons to see tooltips</div>
      </div>
    </TooltipProvider>
  )
}

