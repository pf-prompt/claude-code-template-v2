/**
 * ShadowShowcase Component
 * Displays box shadow options based on theme metadata
 */

import { useGet } from 'ccstate-react'
import { internalThemeState } from '../../infra/theme/state'

const allShadowOptions = [
  { label: '2xs', className: 'shadow-2xs' },
  { label: 'xs', className: 'shadow-xs' },
  { label: 'sm', className: 'shadow-sm' },
  { label: 'md', className: 'shadow-md' },
  { label: 'lg', className: 'shadow-lg' },
  { label: 'xl', className: 'shadow-xl' },
  { label: '2xl', className: 'shadow-2xl' },
]

const noShadowOption = { label: 'none', className: 'shadow-none' }

function ShadowItem({ label, className }: { label: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`size-16 bg-card rounded-lg ${className}`} />
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

export function ShadowShowcase() {
  const metadata = useGet(internalThemeState.themeMetadata$)
  
  const shadowConfig = metadata.shadow ?? { description: 'Standard elevation shadows.', enabled: true }
  const isEnabled = shadowConfig.enabled
  
  const row1 = allShadowOptions.slice(0, 4)
  const row2 = allShadowOptions.slice(4, 7)

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">Shadow</h3>
        <p className="text-sm text-muted-foreground mt-1">{shadowConfig.description}</p>
      </div>
      
      {isEnabled ? (
        <div className="space-y-4">
          <div className="flex gap-6">
            {row1.map((item) => (
              <ShadowItem key={item.label} {...item} />
            ))}
          </div>
          <div className="flex gap-6">
            {row2.map((item) => (
              <ShadowItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-6">
          <ShadowItem {...noShadowOption} />
        </div>
      )}
    </div>
  )
}
