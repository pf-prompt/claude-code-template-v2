/**
 * StyleKeywords Component
 * Displays theme style characteristics
 */

import { useGet } from 'ccstate-react'
import { internalThemeState } from '../../infra/theme/state'

export function StyleKeywords() {
  const metadata = useGet(internalThemeState.themeMetadata$)

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground mb-4">Style keywords</h3>
      
      <div className="text-sm text-muted-foreground space-y-2">
        <div>
          <span className="font-medium">Style:</span> {metadata.style}
        </div>
        
        <div>
          <span className="font-medium">Color:</span>
          <ul className="ml-6 mt-1 space-y-1 list-disc">
            <li>{metadata.color.primary}</li>
            <li>{metadata.color.background}</li>
            <li>{metadata.color.accents}</li>
          </ul>
        </div>
        
        <div>
          <span className="font-medium">Typography:</span> {metadata.typography}
        </div>
        
        <div>
          <span className="font-medium">Corners:</span> {metadata.corners}
        </div>
        
        <div>
          <span className="font-medium">Boundaries:</span> {metadata.boundaries}
        </div>
        
        <div>
          <span className="font-medium">Feel:</span> {metadata.feel}
        </div>
      </div>
    </div>
  )
}

