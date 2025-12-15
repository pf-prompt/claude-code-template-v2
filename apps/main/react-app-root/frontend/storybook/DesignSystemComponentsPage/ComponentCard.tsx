/**
 * ComponentCard
 * Container for component showcase with title
 */

import { cn } from '../../infra/cn'

interface ComponentCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function ComponentCard({ title, children, className }: ComponentCardProps) {
  return (
    <div className={cn('bg-card border border-border rounded-lg p-6 space-y-4', className)}>
      <h3 className="text-base font-semibold text-foreground italic">{title}</h3>
      <div className="flex flex-wrap items-center gap-3">
        {children}
      </div>
    </div>
  )
}

