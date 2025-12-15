import { Icon } from '../../ui-components/Icon'
import { useGet, useSet } from 'ccstate-react'
import { cn } from '../../infra/cn'
import { ToggleGroup, ToggleGroupItem } from '../../ui-components/ToggleGroup'
import { updateColorMode$ } from '../../infra/theme/update'
import { type ColorMode, internalThemeState } from '../../infra/theme/state'

interface ThemeToggleProps {
  size?: 'default' | 'sm' | 'lg'
  className?: string
}

export function ThemeColorModeToggle({
  size = 'default',
  className
}: ThemeToggleProps) {
  const theme = useGet(internalThemeState.theme$)
  const setColorMode = useSet(updateColorMode$)

  return (
    <ToggleGroup
      type="single"
      value={theme.colorMode}
      onValueChange={(value) => {
        if (value) {
          setColorMode(value as ColorMode)
        }
      }}
      variant="outline"
      size={size}
      className={cn('h-[36px]', className)}
    >
      <ToggleGroupItem value="light" aria-label="Light mode" className="h-[36px] px-[12px]">
        <Icon icon="lucide:sun" className="size-[20px]" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark mode" className="h-[36px] px-[12px]">
        <Icon icon="lucide:moon" className="size-[20px]" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

