/**
 * Sonner Showcase
 * Toast: success, error, info, warning, with action
 */

import { logger } from '../../../../../common/infra/log'
import { Button } from '../../../../ui-components/Button'
import { Icon } from '../../../../ui-components/Icon'
import { toast } from 'sonner'

const L = logger('SonnerShowcase')

export function SonnerShowcase() {
  return (
    <div className="w-full flex flex-wrap gap-2">
      {/* Success */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => toast.success('Success! Operation completed')}
      >
        <Icon icon="lucide:check-circle-2" className="size-4 mr-2" />
        Success
      </Button>
      
      {/* Error */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => toast.error('Error! Something went wrong')}
      >
        <Icon icon="lucide:alert-circle" className="size-4 mr-2" />
        Error
      </Button>
      
      {/* Info */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => toast.info('Info: New update available')}
      >
        <Icon icon="lucide:info" className="size-4 mr-2" />
        Info
      </Button>
      
      {/* Warning */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => toast.warning('Warning: Please review')}
      >
        <Icon icon="lucide:alert-triangle" className="size-4 mr-2" />
        Warning
      </Button>
      
      {/* With Action */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => toast('Event created', {
          action: {
            label: 'Undo',
            onClick: () => L.info('Undo'),
          },
        })}
      >
        <Icon icon="lucide:sparkles" className="size-4 mr-2" />
        With Action
      </Button>
      
      <div className="w-full text-xs text-muted-foreground mt-2">Click buttons to show toasts</div>
    </div>
  )
}

