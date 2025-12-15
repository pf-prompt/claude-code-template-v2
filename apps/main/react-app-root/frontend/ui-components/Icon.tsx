/**
 * Icon Component
 * 
 * A theme-aware icon component that automatically maps Lucide icons to theme-specific icon libraries.
 * 
 * Usage:
 *   import { Icon } from '@/ui-components/Icon'
 *   <Icon icon="lucide:home" className="size-5" />
 * 
 * When theme changes, icons are automatically mapped to the corresponding library
 */

import { Icon as IconifyIcon, type IconProps as IconifyIconProps } from '@iconify/react'
import { useGet } from 'ccstate-react'
import { internalThemeState } from '../infra/theme/state'
import { getMappedIcon, themeIconLibrary } from '../infra/theme/iconMapping'

export interface IconProps extends Omit<IconifyIconProps, 'icon'> {
  /**
   * Icon name in format "lucide:icon-name"
   * Will be automatically mapped to theme-specific icon library
   */
  icon: string
}

/**
 * Theme-aware icon component
 * Automatically switches icon library based on current theme
 */
export function Icon({ icon, ...props }: IconProps) {
  const theme = useGet(internalThemeState.theme$)
  const targetLibrary = themeIconLibrary.get(theme.style)
  if (!targetLibrary) {
    throw Error(`target icon for ${theme.style} not found`)
  }
  
  // Get mapped icon name (falls back to original if no mapping exists)
  const mappedIcon = getMappedIcon(icon, targetLibrary)
  
  return <IconifyIcon icon={mappedIcon} {...props} />
}

