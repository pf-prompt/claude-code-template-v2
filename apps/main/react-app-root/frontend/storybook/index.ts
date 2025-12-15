/* KEEP_AFTER_RESET_BEGIN */
import { DesignSystemStylesRoute } from './DesignSystemStylesPage'
import { DesignSystemComponentsRoute } from './DesignSystemComponentsPage'
import { RouteConfig } from '../infra/router/routeRegistry'

export const designSystemRoutes: RouteConfig[] = [
  DesignSystemStylesRoute,
  DesignSystemComponentsRoute,
]
/* KEEP_AFTER_RESET_END */
