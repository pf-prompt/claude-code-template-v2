/**
 * Sidebar Showcase
 * Sidebar: collapsed, expanded, with sections
 */

import { Button } from '../../../../ui-components/Button'
import { Icon } from '../../../../ui-components/Icon'
import { state } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'

// we do not test this state, so that we can define it here
const collapsed$ = state(false)

export function SidebarShowcase() {
  const collapsed = useGet(collapsed$)
  const setCollapsed = useSet(collapsed$)
  
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-xs text-muted-foreground">
        Sidebar states (click button to toggle)
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setCollapsed(!collapsed)}
        className="text-foreground"
      >
        Toggle Sidebar
      </Button>
      
      <div className={`border rounded-lg transition-all ${collapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4 space-y-2">
          {/* Section 1 */}
          <div>
            <div className="text-xs text-muted-foreground mb-2">
              {!collapsed && 'Navigation'}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-accent text-foreground">
                <Icon icon="lucide:home" className="size-4" />
                {!collapsed && <span className="text-sm">Home</span>}
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-accent text-foreground">
                <Icon icon="lucide:search" className="size-4" />
                {!collapsed && <span className="text-sm">Search</span>}
              </div>
            </div>
          </div>
          
          {/* Section 2 */}
          {!collapsed && (
            <div>
              <div className="text-xs text-muted-foreground mb-2">Settings</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-accent text-foreground">
                  <Icon icon="lucide:settings" className="size-4" />
                  <span className="text-sm">Preferences</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

