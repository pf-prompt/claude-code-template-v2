/**
 * NativeSelect Showcase
 * Native dropdown: default, disabled, with options
 */

import { NativeSelect } from '../../../../ui-components/NativeSelect'

export function NativeSelectShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Default */}
      <NativeSelect>
        <option value="">Select...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </NativeSelect>
      
      {/* Disabled */}
      <NativeSelect disabled>
        <option value="">Disabled</option>
      </NativeSelect>
    </div>
  )
}

