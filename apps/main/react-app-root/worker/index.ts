import type { Cloudflare } from '@cloudflare/workers-types'
import { httpHandler } from '../backend/httpHandler'

export default {
  async fetch(request: Request, env: Cloudflare.Env): Promise<Response> {
    return httpHandler(request, env)
  },
}
