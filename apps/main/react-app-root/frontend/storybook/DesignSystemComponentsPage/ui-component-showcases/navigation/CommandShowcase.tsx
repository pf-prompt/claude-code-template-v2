/**
 * Command Showcase
 * Command palette: search, with groups, with shortcuts
 */

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '../../../../ui-components/Command'
import { Icon } from '../../../../ui-components/Icon'

export function CommandShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-xs text-muted-foreground">Command palette (search panel)</div>
      
      <Command className="rounded-lg border">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Icon icon="lucide:calendar" className="size-4 mr-2" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Icon icon="lucide:smile" className="size-4 mr-2" />
              <span>Search Emoji</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Settings">
            <CommandItem>
              <Icon icon="lucide:user" className="size-4 mr-2" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Icon icon="lucide:settings" className="size-4 mr-2" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}

