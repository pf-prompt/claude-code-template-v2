/**
 * Textarea Showcase
 * Multi-line input: default, disabled, error, with placeholder
 */

import { Textarea } from '../../../../ui-components/Textarea'

export function TextareaShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Default */}
      <Textarea placeholder="Default textarea" rows={2} />
      
      {/* Disabled */}
      <Textarea placeholder="Disabled" disabled rows={2} />
      
      {/* Error */}
      <Textarea placeholder="Error state" aria-invalid rows={2} />
    </div>
  )
}

