/**
 * Button Showcase
 */

import { Button } from '../../../../ui-components/Button'
import { Icon } from '../../../../ui-components/Icon'

export function ButtonShowcase() {
  return (
    <>
      <Button variant="default">
        <Icon icon="lucide:check" className="size-4 mr-2" />
        default
      </Button>
      <Button variant="outline">outline</Button>
      <Button variant="destructive">
        <Icon icon="lucide:trash" className="size-4 mr-2" />
        destructive
      </Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">Link</Button>
    </>
  )
}

