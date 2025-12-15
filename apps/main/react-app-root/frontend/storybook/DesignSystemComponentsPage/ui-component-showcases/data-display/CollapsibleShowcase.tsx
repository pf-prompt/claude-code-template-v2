/**
 * Collapsible Showcase
 * Collapsible: expanded, collapsed, with trigger
 */

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../../ui-components/Collapsible'
import { Button } from '../../../../ui-components/Button'
import { Icon } from '../../../../ui-components/Icon'
import { state } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'

// we do not test this state, so we can define it here
const isOpen$ = state(false)

export function CollapsibleShowcase() {
  const isOpen = useGet(isOpen$)
  const setIsOpen = useSet(isOpen$)
  
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Basic Collapsible */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">
            Collapsible Section
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <Icon 
                icon={isOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'} 
                className="size-4" 
              />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-xs text-foreground">
            Hidden content 1
          </div>
          <div className="rounded-md border px-4 py-2 text-xs text-foreground">
            Hidden content 2
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

