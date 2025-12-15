import { useSet } from 'ccstate-react'
import type { PropsWithChildren } from 'react'
import { generateRouterPath } from './routeRegistry'
import { navigateInReact$ } from './navigate'

interface LinkProps extends PropsWithChildren {
    pathname: Parameters<typeof generateRouterPath>[0]
    options?: {
        pathParams?: Parameters<typeof generateRouterPath>[1]
        searchParams?: URLSearchParams
    }
    target?: '_blank' | '_self'
}

/**
 * Router navigation component wrapped with an anchor tag
 * Supports opening in a new window with shift/meta keys while preserving native anchor behavior
 */
export function Link({ pathname, options, children, target }: LinkProps) {
  const navigate = useSet(navigateInReact$)
  const path = generateRouterPath(pathname, options?.pathParams)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (e.shiftKey || e.metaKey || target === '_blank') {
      window.open(`${window.location.origin}${path}`, '_blank')
    } else {
      navigate(pathname, options)
    }
  }

  return (
    <a href={path} onClick={handleClick}>
      {children}
    </a>
  )
}