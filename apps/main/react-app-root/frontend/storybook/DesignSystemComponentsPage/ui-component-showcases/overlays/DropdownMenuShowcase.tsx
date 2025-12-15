 
/**
 * DropdownMenu Showcase
 * Dropdown menu: basic, with icons, with checkboxes, with submenu
 */

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../../../../ui-components/DropdownMenu'
import { Button } from '../../../../ui-components/Button'
import { Icon } from '../../../../ui-components/Icon'
import { state } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'

// we do not test this state, so that we can define it here
const showStatus$ = state(true)

export function DropdownMenuShowcase() {
  const showStatus = useGet(showStatus$)
  const setShowStatus = useSet(showStatus$)
  
  return (
    <div className="w-full flex flex-wrap gap-2">
      {/* Basic */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">Basic</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* With Icons */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">With Icons</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Icon icon="lucide:user" className="size-4 mr-2" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="lucide:settings" className="size-4 mr-2" />
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* With Checkboxes */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">Checkboxes</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
            Show Status
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>
            Show Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* With Submenu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">Submenu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <div className="w-full text-xs text-muted-foreground mt-2">Click buttons to see menus</div>
    </div>
  )
}

