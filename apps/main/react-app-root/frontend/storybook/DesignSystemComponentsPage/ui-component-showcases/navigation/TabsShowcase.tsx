/**
 * Tabs Showcase
 * Tabs: horizontal, vertical, with icons
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../ui-components/Tabs'
import { Icon } from '../../../../ui-components/Icon'

export function TabsShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Horizontal */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">Horizontal</div>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="text-xs text-foreground mt-2">Content 1</TabsContent>
        </Tabs>
      </div>
      
      {/* With Icons */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">With Icons</div>
        <Tabs defaultValue="home" className="w-full">
          <TabsList>
            <TabsTrigger value="home" className="gap-2">
              <Icon icon="lucide:home" className="size-4" />
              Home
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Icon icon="lucide:settings" className="size-4" />
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

