/**
 * RadiusShowcase Component
 * Displays border radius options based on theme metadata
 */

import { useGet } from 'ccstate-react'
import { internalThemeState } from '../../infra/theme/state'

const allRadiusOptions = [
  { label: 'xs', className: 'rounded-xs' },
  { label: 'sm', className: 'rounded-sm' },
  { label: 'md', className: 'rounded-md' },
  { label: 'lg', className: 'rounded-lg' },
  { label: 'xl', className: 'rounded-xl' },
  { label: '2xl', className: 'rounded-2xl' },
  { label: '3xl', className: 'rounded-3xl' },
  { label: '4xl', className: 'rounded-4xl' },
]

const noRadiusOption = { label: 'none', className: 'rounded-none' }

function RadiusItem({ label, className }: { label: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`size-16 border bg-muted/50 ${className}`} />
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

export function RadiusShowcase() {
  const metadata = useGet(internalThemeState.themeMetadata$)
  
  const radiusConfig = metadata.radius ?? { description: 'Standard rounded corners.', enabled: true }
  const isEnabled = radiusConfig.enabled
  
  const row1 = allRadiusOptions.slice(0, 4)
  const row2 = allRadiusOptions.slice(4, 8)

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">Radius</h3>
        <p className="text-sm text-muted-foreground mt-1">{radiusConfig.description}</p>
      </div>
      
      {isEnabled ? (
        <div className="space-y-4">
          <div className="flex gap-6">
            {row1.map((item) => (
              <RadiusItem key={item.label} {...item} />
            ))}
          </div>
          <div className="flex gap-6">
            {row2.map((item) => (
              <RadiusItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-6">
          <RadiusItem {...noRadiusOption} />
        </div>
      )}
    </div>
  )
}
