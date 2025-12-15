import { Icon } from '@iconify/react'
import { internalThemeState } from '../infra/theme/state'
import { Toaster as SonnerToaster, type ToasterProps } from 'sonner'
import { useGet } from 'ccstate-react'

export const Toaster = ({ ...props }: ToasterProps) => {
  const isDark = useGet(internalThemeState.isDark$)

  return (
    <SonnerToaster
      theme={isDark ? 'dark' : 'light'}
      className="toaster group"
      icons={{
        success: <Icon icon="lucide:circle-check" className="size-4" />,
        info: <Icon icon="lucide:info" className="size-4" />,
        warning: <Icon icon="lucide:triangle-alert" className="size-4" />,
        error: <Icon icon="lucide:octagon-x" className="size-4" />,
        loading: <Icon icon="lucide:loader-2" className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}
