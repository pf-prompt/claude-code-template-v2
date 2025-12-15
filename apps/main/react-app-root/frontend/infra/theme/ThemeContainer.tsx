import { useGet } from 'ccstate-react'
import { internalThemeState } from './state'

interface ThemeContainerProps {
  children: React.ReactNode
}

export const ThemeContainer = ({ children }: ThemeContainerProps) => {
  const { style } = useGet(internalThemeState.theme$)
  const isDark = useGet(internalThemeState.isDark$)
  const classes: string[] = [style]
  if (isDark) {
    classes.push('dark')
  }

  return <div className={classes.join(' ')}><div className='theme-container'>{children}</div></div>
}