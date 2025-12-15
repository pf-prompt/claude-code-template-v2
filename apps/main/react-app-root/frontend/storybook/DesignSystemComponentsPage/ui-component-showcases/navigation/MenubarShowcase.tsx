/**
 * Menubar Showcase
 * Menu bar: horizontal menu, with submenus
 */

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../../../../ui-components/Menubar'
import { Icon } from '../../../../ui-components/Icon'

export function MenubarShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-xs text-muted-foreground">Horizontal menu bar</div>
      
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="text-foreground">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Icon icon="lucide:file" className="size-4 mr-2" />
              New File
            </MenubarItem>
            <MenubarItem>
              <Icon icon="lucide:folder" className="size-4 mr-2" />
              Open
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger className="text-foreground">Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>More</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger className="text-foreground">View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Zoom In</MenubarItem>
            <MenubarItem>Zoom Out</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

