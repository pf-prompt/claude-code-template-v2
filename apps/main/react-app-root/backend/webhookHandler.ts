import { logger } from '../common/infra/log'

const L = logger('webhookHandler')

// modify this function to integration 3rd party webhook
export async function handleWebhook(request: Request): Promise<Response | undefined> {
  const isWebhook = false
  L.debug(`request ${request.url} is webhook: ${isWebhook}`)
  if (!isWebhook) {
    // return undefined if request is not webhook
    return undefined
  }
  return new Response('OK', { status: 200 })
}