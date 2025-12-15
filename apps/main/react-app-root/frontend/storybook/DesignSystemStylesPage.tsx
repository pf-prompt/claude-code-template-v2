/**
 * DesignSystemStylesPage
 * Displays theme design tokens, colors, typography, and other style specifications
 * This page is auto-generated based on [theme-name]/index.css and [theme-name]/index.ts. Manual maintenance is not required.
 */

import { useGet, useSet } from 'ccstate-react'
import { internalThemeState } from '../infra/theme/state'
import { ALL_THEMES, ThemeStyle } from '../infra/theme/config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui-components/Select'
import { Icon } from '../ui-components/Icon'
import { ThemeColorModeToggle } from './DesignSystemStylesPage/ThemeColorModeToggle'
import { StyleKeywords } from './DesignSystemStylesPage/StyleKeywords'
import { TypographyShowcase } from './DesignSystemStylesPage/TypographyShowcase'
import { RadiusShowcase } from './DesignSystemStylesPage/RadiusShowcase'
import { ShadowShowcase } from './DesignSystemStylesPage/ShadowShowcase'
import { ColorsSection } from './DesignSystemStylesPage/ColorsSection'
import { RouteConfig } from '../infra/router/routeRegistry'
import { updateThemeStyle$ } from '../infra/theme/update'

function DesignSystemStylesPage() {
  const theme = useGet(internalThemeState.theme$)
  const setTheme = useSet(updateThemeStyle$)

  const handleThemeStyleChange = (value: ThemeStyle) => {
    setTheme(value)
  }

  return (
    <div className="min-h-screen bg-background text-foreground italic">
      {/* Header - Fixed pixel sizes to prevent theme-induced resizing */}
      <header className="h-[100px] border-b border-border bg-card/50 text-card-foreground backdrop-blur-sm sticky top-0 z-50 pt-[var(--safe-area-inset-top)]">
        <div className="container mx-auto px-[32px] py-[16px] h-full">
          <div className="flex items-center justify-between h-full">
            <h1 className="text-[30px] leading-[36px] font-bold text-foreground">Design System - Styles</h1>
            
            <div className="flex items-center gap-[12px]">
              {/* Theme Style Selector */}
              <Select value={theme.style} onValueChange={handleThemeStyleChange}>
                <SelectTrigger id="theme-style" className="w-min-[240px] text-[16px] h-[36px] [&_.size-4]:size-[20px]">
                  <span className="flex items-center gap-[8px]">
                    <Icon icon="lucide:palette" className="size-[20px]" />
                    <SelectValue />
                  </span>
                </SelectTrigger>
                <SelectContent>
                  {ALL_THEMES.map(theme => (
                    <SelectItem key={theme} value={theme} className="text-[16px]">
                      {theme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Dark Mode Toggle */}
              <ThemeColorModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-10">
            <StyleKeywords />
            <TypographyShowcase />
            <RadiusShowcase />
            <ShadowShowcase />
          </div>

          {/* Right Column */}
          <div>
            <ColorsSection />
          </div>
        </div>
      </main>
    </div>
  )
}

export const DesignSystemStylesRoute: RouteConfig = {
  path: '/design-system/theme',
  viewFactory: () => <DesignSystemStylesPage/>
}