/**
 * Label Showcase
 * Label: plain text, with required indicator, disabled state
 */

import { Label } from '../../../../ui-components/Label'

export function LabelShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Normal */}
      <Label>Normal Label</Label>
      
      {/* With Required */}
      <Label>
        Required Label <span className="text-destructive">*</span>
      </Label>
      
      {/* Disabled */}
      <Label className="opacity-50 cursor-not-allowed">Disabled Label</Label>
    </div>
  )
}

