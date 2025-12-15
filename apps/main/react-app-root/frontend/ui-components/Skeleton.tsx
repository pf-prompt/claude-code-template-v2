import { cn } from '../infra/cn'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-muted animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

export { Skeleton }

/**
 * Changelog:
 * - 2025-11-27: Changed from bg-accent to bg-muted for more subtle appearance across all themes
 */
