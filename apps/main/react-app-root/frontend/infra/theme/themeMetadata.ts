/**
 * Theme Metadata Configuration
 * Stores style keywords and design characteristics for each theme
 */

import { ThemeStyle } from './config'

export interface ThemeMetadata {
  style: string
  color: {
    primary: string
    background: string
    accents: string
  }
  typography: string
  corners: string
  boundaries: string
  feel: string

  // Extension: Radius configuration
  radius?: {
    description: string  // Short description, e.g. "Subtle rounded corners"
    enabled: boolean     // If false, show only one "no radius" example
  }

  // Extension: Shadow configuration
  shadow?: {
    description: string  // Short description, e.g. "Soft elevation shadows"
    enabled: boolean     // If false, show only one "no shadow" example
  }
}


export const themeMetadata = new Map<ThemeStyle, ThemeMetadata>()

export const registerThemeMetadata = (style: ThemeStyle, metadata: ThemeMetadata) => {
  themeMetadata.set(style, metadata)
}