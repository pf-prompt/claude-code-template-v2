/**
 * TypographyShowcase Component
 * Displays font families with preview cards
 */

import { useGet } from 'ccstate-react'
import { Badge } from '../../ui-components/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui-components/Card'
import { computed } from 'ccstate'
import { cssVarQueryFactory } from './cssVarQuery'

interface FontCardProps {
  name: string
  fontClass: string
  fontValue: string
  isDefault?: boolean
}

function FontCard({ name, fontClass, fontValue, isDefault }: FontCardProps) {
  return (
    <Card className={`overflow-hidden flex-1 relative py-3 ${fontClass}`}>
      {isDefault && (
        <Badge variant="secondary" className="absolute top-3 right-2 text-xs font-extrabold">
          Default
        </Badge>
      )}
      <CardHeader className="pb-1 px-4">
        <CardTitle className="text-sm">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-4">
        {/* Large Aa Preview */}
        <div className="text-5xl font-normal text-foreground">
          Aa
        </div>
        
        {/* Font Family Value */}
        <div className="pt-2 border-t border-border">
          <code className="text-xs text-muted-foreground break-all leading-relaxed">
            {fontValue}
          </code>
        </div>
      </CardContent>
    </Card>
  )
}

const fontsSans$ = cssVarQueryFactory('--font-sans', 'ui-sans-serif, system-ui, sans-serif')
const fontsSerif$ = cssVarQueryFactory('--font-serif', 'ui-serif, Georgia, serif')
const fontsMono$ = cssVarQueryFactory('--font-mono', 'ui-monospace, Menlo, monospace')
const defaultFontVar$ = cssVarQueryFactory('--font-default', 'var(--font-sans)')
const defaultFont$ = computed(get => {
  const defaultFontVar = get(defaultFontVar$)
  if (defaultFontVar === 'var(--font-serif)') {
    return 'serif' as const
  }
  if (defaultFontVar === 'var(--font-mono)') {
    return 'mono' as const
  }
  return 'sans' as const
})

export function TypographyShowcase() {  
  const fontsSans = useGet(fontsSans$)
  const fontsSerif = useGet(fontsSerif$)
  const fontsMono = useGet(fontsMono$)
  const defaultFont = useGet(defaultFont$)
  
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Typography</h3>
      
      {/* Font Preview Cards - 3 columns */}
      <div className="flex gap-4">
        <FontCard 
          name="Sans-serif" 
          fontClass="font-sans" 
          fontValue={fontsSans}
          isDefault={defaultFont === 'sans'}
        />
        
        <FontCard 
          name="Serif" 
          fontClass="font-serif" 
          fontValue={fontsSerif}
          isDefault={defaultFont === 'serif'}
        />
        
        <FontCard 
          name="Monospace" 
          fontClass="font-mono" 
          fontValue={fontsMono}
          isDefault={defaultFont === 'mono'}
        />
      </div>
    </div>
  )
}
