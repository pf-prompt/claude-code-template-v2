/**
 * ColorSwatch Component
 * Displays a color swatch with its name and CSS variable value
 */

import { cn } from '../../infra/cn'

interface ColorSwatchProps {
  bgClass: string  // Tailwind bg class, e.g., "bg-primary"
  label: string
  showValue?: boolean
}

export function ColorSwatch({ bgClass, label, showValue = false }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-3">
      <div 
        className={cn(
          'w-12 h-8 rounded-md border border-black/15 dark:border-white/15',
          bgClass
        )}
      />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-foreground">{label}</div>
        {showValue && (
          <div className="text-xs text-muted-foreground truncate">
            {bgClass}
          </div>
        )}
      </div>
    </div>
  )
}

