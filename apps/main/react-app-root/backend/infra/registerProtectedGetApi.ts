import { apiRegistry, HTTPError } from '../../common/infra/apiRegistry'
import { currentUser$ } from './currentUser'
import { getContext } from './getContext'

export const registerProtectedGetApi: typeof apiRegistry.registerGetApi = (apiName, handler) => {
  const wrapped = (async (req) => {
    if (!await getContext(currentUser$)) {
      throw new HTTPError(401, 'Missing Authorization header or Token is invalid')
    }
    return await handler(req)
  }) as typeof handler
  return apiRegistry.registerGetApi(apiName, wrapped)
}