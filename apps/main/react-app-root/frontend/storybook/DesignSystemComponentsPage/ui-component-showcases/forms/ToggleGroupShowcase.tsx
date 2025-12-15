/**
 * ToggleGroup Showcase
 * Toggle group: single, multiple, with icons
 */

import { ToggleGroup, ToggleGroupItem } from '../../../../ui-components/ToggleGroup'
import { Icon } from '../../../../ui-components/Icon'

export function ToggleGroupShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Single */}
      <ToggleGroup type="single" defaultValue="center">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
      
      {/* Multiple with Icons */}
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold">
          <Icon icon="lucide:bold" className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Icon icon="lucide:italic" className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Icon icon="lucide:underline" className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

