/**
 * RadioGroup Showcase
 * Radio group: vertical, horizontal, disabled
 */

import { RadioGroup, RadioGroupItem } from '../../../../ui-components/RadioGroup'
import { Label } from '../../../../ui-components/Label'

export function RadioGroupShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Vertical */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Vertical</div>
        <RadioGroup defaultValue="v1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="v1" id="v1" />
            <Label htmlFor="v1">Option 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="v2" id="v2" />
            <Label htmlFor="v2">Option 2</Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Horizontal */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Horizontal</div>
        <RadioGroup defaultValue="h1" className="flex-row gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="h1" id="h1" />
            <Label htmlFor="h1">A</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="h2" id="h2" />
            <Label htmlFor="h2">B</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

