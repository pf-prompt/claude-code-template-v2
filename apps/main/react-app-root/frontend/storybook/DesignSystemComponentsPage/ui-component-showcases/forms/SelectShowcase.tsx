/**
 * Select Showcase
 * Select dropdown: default, with icon, multi-select
 */

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../ui-components/Select'
import { Icon } from '../../../../ui-components/Icon'

export function SelectShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Default */}
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      
      {/* With Icon */}
      <Select>
        <SelectTrigger className="gap-2">
          <Icon icon="lucide:user" className="size-4" />
          <SelectValue placeholder="With icon" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">User A</SelectItem>
          <SelectItem value="b">User B</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

