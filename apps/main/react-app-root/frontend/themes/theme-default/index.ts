import { registerThemeIconLibrary } from '../../infra/theme/iconMapping'
import { registerThemeMetadata } from '../../infra/theme/themeMetadata'

const theme = 'theme-default'

// Register default theme icon library
registerThemeIconLibrary(theme, 'lucide')
registerThemeMetadata(theme, {
  style: 'Clean modern flat design with subtle layering',
  color: {
    primary: 'Deep slate blue',
    background: 'Near-white with subtle cool tint',
    accents: 'Soft teal and muted indigo'
  },
  typography: 'Sans-serif',
  corners: 'Subtle radius for professional refinement',
  boundaries: 'Subtle surface color differences with soft shadows for gentle elevation',
  feel: 'Technical precision - Professional trust - Refined clarity - Developer-focused sophistication',
  radius: {
    description: 'Subtle rounded corners for a refined look.',
    enabled: true
  },
  shadow: {
    description: 'Soft shadows for gentle elevation.',
    enabled: true
  },
})