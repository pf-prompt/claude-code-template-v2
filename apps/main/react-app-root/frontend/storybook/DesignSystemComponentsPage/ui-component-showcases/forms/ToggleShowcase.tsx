/**
 * Toggle Showcase
 * Toggle button: off, on, with icon
 */

import { Toggle } from '../../../../ui-components/Toggle'
import { Icon } from '../../../../ui-components/Icon'

export function ToggleShowcase() {
  return (
    <>
      {/* Off */}
      <Toggle aria-label="Toggle off">Off</Toggle>
      
      {/* On */}
      <Toggle pressed aria-label="Toggle on">On</Toggle>
      
      {/* With Icon */}
      <Toggle aria-label="Toggle bold">
        <Icon icon="lucide:bold" className="size-4" />
      </Toggle>
    </>
  )
}

