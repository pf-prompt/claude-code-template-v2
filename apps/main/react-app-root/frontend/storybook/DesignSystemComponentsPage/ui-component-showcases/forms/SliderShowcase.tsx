/**
 * Slider Showcase
 * Slider: single, range, disabled, with step
 */

import { Slider } from '../../../../ui-components/Slider'

export function SliderShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Single */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Single</div>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      
      {/* Range */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Range</div>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>
      
      {/* Disabled */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Disabled</div>
        <Slider defaultValue={[60]} max={100} disabled />
      </div>
    </div>
  )
}

