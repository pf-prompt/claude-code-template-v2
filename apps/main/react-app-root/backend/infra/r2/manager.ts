import { R2Client } from './client'
import type { Cloudflare, R2Bucket } from '@cloudflare/workers-types'

export interface R2Environment extends Cloudflare.Env {
  R2_BUCKET_PUBLIC?: R2Bucket;
  R2_BUCKET_PRIVATE?: R2Bucket;
}

let publicBucket: R2Client | null = null
let privateBucket: R2Client | null = null

export function initializeR2BucketsFromEnv(env?: R2Environment): void {
  if (!env) {
    return
  }

  if (publicBucket === null && env.R2_BUCKET_PUBLIC) {
    publicBucket = new R2Client({ bucket: env.R2_BUCKET_PUBLIC })
  }

  if (privateBucket === null && env.R2_BUCKET_PRIVATE) {
    privateBucket = new R2Client({ bucket: env.R2_BUCKET_PRIVATE })
  }
}

export function getPublicBucket(): R2Client {
  if (!publicBucket) {
    throw new Error('Public R2 bucket not initialized. Call initializeR2Buckets() first')
  }
  return publicBucket
}

export function getPrivateBucket(): R2Client {
  if (!privateBucket) {
    throw new Error('Private R2 bucket not initialized. Call initializeR2Buckets() first')
  }
  return privateBucket
}

export function getPublicBucketDomain(): string {
  return process.env.PARAFLOW_BUCKET_DOMAIN || ''
}
