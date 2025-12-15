// Server-side API registry for handling backend requests

import type { Getter } from 'ccstate'
import type { AllApiTypes } from '../backendApi'

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- ApiHandler needs to accept arbitrary request types and return arbitrary response types, this is a low-level type system abstraction
type ApiHandler = (request: any) => Promise<any>

export class HTTPError extends Error {
  public status: number
  public message: string
  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }
}

export class ApiRegistry<T> {

  private getApiHandlers: Map<unknown, ApiHandler>
  private postApiHandlers: Map<unknown, ApiHandler>
  public useDirectRoute: Getter | undefined

  constructor() {
    this.getApiHandlers = new Map()
    this.postApiHandlers = new Map()
    this.useDirectRoute = undefined
  }

  public registerGetApi<R extends keyof T>(
    apiName: T[R] extends { method: 'GET' } ? R : never,
    handler: (req: T[R] extends { request: infer Req } ? Req : never) => T[R] extends { response: infer Res } ? Promise<Res> : never
  ) {
    this.getApiHandlers.set(apiName, handler)
  }

  public registerPostApi<R extends keyof T>(
    apiName: T[R] extends { method: 'POST' } ? R : never,
    handler: (req: T[R] extends { request: infer Req } ? Req : never) => T[R] extends { response: infer Res } ? Promise<Res> : never
  ) {
    this.postApiHandlers.set(apiName, handler)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Runtime dynamic invocation, needs to accept arbitrary request parameter types
  public handleGetRequest(apiName: string, req: any) {
    const handler = this.getApiHandlers.get(apiName)
    if (!handler) {
      throw new HTTPError(405, `missing handler for GET api "${apiName}"`)
    }
    return handler.call(undefined, req)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Runtime dynamic invocation, needs to accept and return arbitrary data types
  public handlePostRequest(apiName: string, req: any): Promise<any> {
    const handler = this.postApiHandlers.get(apiName)
    if (!handler) {
      throw new HTTPError(405, `missing handler for POST api "${apiName}"`)
    }
    return handler.call(undefined, req)
  }
}

export const apiRegistry = new ApiRegistry<AllApiTypes>()