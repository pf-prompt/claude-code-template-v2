/**
 * Empty Showcase
 * Empty state: with action button (most common usage)
 */

import { Empty, EmptyMedia, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from '../../../../ui-components/Empty'
import { Button } from '../../../../ui-components/Button'
import { Icon } from '../../../../ui-components/Icon'

export function EmptyShowcase() {
  return (
    <div className="w-full">
      <Empty>
        <EmptyMedia>
          <Icon icon="lucide:inbox" className="size-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No data</EmptyTitle>
          <EmptyDescription>Get started by creating your first item</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">
            <Icon icon="lucide:plus" className="size-4 mr-2" />
            Add Item
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

