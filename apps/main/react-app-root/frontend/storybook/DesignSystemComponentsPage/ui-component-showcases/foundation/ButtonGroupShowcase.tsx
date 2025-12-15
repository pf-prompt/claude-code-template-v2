/**
 * ButtonGroup Showcase
 */

import { Button } from '../../../../ui-components/Button'
import { ButtonGroup } from '../../../../ui-components/ButtonGroup'

export function ButtonGroupShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Horizontal */}
      <ButtonGroup orientation="horizontal">
        <Button variant="outline" size="sm">Left</Button>
        <Button variant="outline" size="sm">Middle</Button>
        <Button variant="outline" size="sm">Right</Button>
      </ButtonGroup>
      
      {/* Vertical */}
      <ButtonGroup orientation="vertical">
        <Button variant="outline" size="sm">Top</Button>
        <Button variant="outline" size="sm">Middle</Button>
        <Button variant="outline" size="sm">Bottom</Button>
      </ButtonGroup>
    </div>
  )
}

