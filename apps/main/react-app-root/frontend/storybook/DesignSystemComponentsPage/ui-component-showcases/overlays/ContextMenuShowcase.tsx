/**
 * ContextMenu Showcase
 * Context menu: basic menu, with submenu, with shortcuts
 */

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '../../../../ui-components/ContextMenu'
import { Icon } from '../../../../ui-components/Icon'

export function ContextMenuShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed text-sm text-foreground">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            <Icon icon="lucide:user" className="size-4 mr-2" />
            Profile
            <ContextMenuShortcut>⌘P</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Icon icon="lucide:settings" className="size-4 mr-2" />
            Settings
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Icon icon="lucide:share" className="size-4 mr-2" />
              Share
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Email</ContextMenuItem>
              <ContextMenuItem>Link</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem className="text-destructive">
            <Icon icon="lucide:trash" className="size-4 mr-2" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      
      <div className="text-xs text-muted-foreground">Right click the box above</div>
    </div>
  )
}

