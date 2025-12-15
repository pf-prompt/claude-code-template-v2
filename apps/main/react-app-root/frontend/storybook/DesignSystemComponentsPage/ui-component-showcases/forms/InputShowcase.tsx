/**
 * Input Showcase
 * Input field: default, disabled, error, with icon
 */

import { Input } from '../../../../ui-components/Input'
import { Icon } from '../../../../ui-components/Icon'

export function InputShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Default */}
      <Input placeholder="Default input" />
      
      {/* Disabled */}
      <Input placeholder="Disabled" disabled />
      
      {/* Error State */}
      <Input placeholder="Error state" aria-invalid />
      
      {/* With Icon */}
      <div className="relative">
        <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="With icon" className="pl-9" />
      </div>
    </div>
  )
}

