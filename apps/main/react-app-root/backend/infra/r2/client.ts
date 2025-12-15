 
import type { R2GetOptions, R2PutOptions, R2Bucket, R2Object, R2ObjectBody } from '@cloudflare/workers-types'
import { getPublicBucketDomain } from './manager'

export interface R2ClientConfig {
  bucket: R2Bucket
}

export class R2Client {
  private bucket: R2Bucket

  constructor(config: R2ClientConfig) {
    this.bucket = config.bucket
  }

  async get(key: string, options?: R2GetOptions): Promise<R2ObjectBody | null> {
    const result = await this.bucket.get(key, options)
    return result
  }

  async put(key: string, value: unknown, options?: R2PutOptions): Promise<R2Object & { resourceUrl?: string }> {
    // @ts-expect-error - Working around Blob type incompatibility between browser and Cloudflare Workers
    const result = await this.bucket.put(key, value, options)

    const domain = getPublicBucketDomain()
    if (domain) {
      const baseUrl = domain.endsWith('/') ? domain : `${domain}/`
      const encodedKey = key.split('/').map(segment => encodeURIComponent(segment)).join('/')
      const resultWithUrl = result as R2Object & { resourceUrl: string }
      resultWithUrl.resourceUrl = `${baseUrl}${encodedKey}`
      return resultWithUrl
    }

    return result
  }

  async delete(keys: string | string[]): Promise<void> {
    const keysArray = Array.isArray(keys) ? keys : [keys]
    await this.bucket.delete(keysArray)
  }

  async exists(key: string): Promise<boolean> {
    const headResult = await this.bucket.head(key)
    return headResult !== null
  }
}
