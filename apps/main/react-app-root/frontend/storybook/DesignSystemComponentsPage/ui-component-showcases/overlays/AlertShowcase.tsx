/**
 * Alert Showcase
 * Alert: default, destructive, with icon, with action
 */

import { Alert, AlertDescription, AlertTitle } from '../../../../ui-components/Alert'
import { Button } from '../../../../ui-components/Button'
import { Icon } from '../../../../ui-components/Icon'

export function AlertShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Default */}
      <Alert>
        <AlertTitle className="text-sm">Default</AlertTitle>
        <AlertDescription className="text-xs">This is a default alert</AlertDescription>
      </Alert>
      
      {/* Destructive */}
      <Alert variant="destructive">
        <AlertTitle className="text-sm">Error</AlertTitle>
        <AlertDescription className="text-xs">Action failed</AlertDescription>
      </Alert>
      
      {/* With Icon */}
      <Alert>
        <Icon icon="lucide:info" className="size-4" />
        <AlertTitle className="text-sm">With Icon</AlertTitle>
        <AlertDescription className="text-xs">Info message</AlertDescription>
      </Alert>
      
      {/* With Action */}
      <Alert>
        <AlertTitle className="text-sm">Action</AlertTitle>
        <AlertDescription className="text-xs">
          <div className="flex items-center gap-2 mt-2">
            <span>Take action now</span>
            <Button size="sm" variant="outline" className="h-6 text-xs">
              Retry
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}

