import { Icon } from './Icon'

import { cn } from '../infra/cn'

interface SpinnerProps {
  className?: string
  width?: string | number
  height?: string | number
}

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <Icon
      icon="lucide:loader-2"
      className={cn('size-4 animate-spin text-muted-foreground', className)}
      {...props}
    />
  )
}

export { Spinner }
