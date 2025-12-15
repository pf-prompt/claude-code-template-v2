/**
 * Skeleton Showcase
 * Skeleton screen: text lines, circle, rectangular card
 */

import { Skeleton } from '../../../../ui-components/Skeleton'

export function SkeletonShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Text Lines */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      
      {/* Circle */}
      <Skeleton className="size-12 rounded-full" />
      
      {/* Card Rectangle */}
      <Skeleton className="h-24 w-full rounded-lg" />
    </div>
  )
}

