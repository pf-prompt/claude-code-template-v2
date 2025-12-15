/**
 * Progress Showcase
 * Progress bar: 0%, 50%, 100%, indeterminate
 */

import { Progress } from '../../../../ui-components/Progress'

export function ProgressShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* 0% */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">0%</div>
        <Progress value={0} />
      </div>
      
      {/* 50% */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">50%</div>
        <Progress value={50} />
      </div>
      
      {/* 100% */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">100%</div>
        <Progress value={100} />
      </div>
      
      {/* Indeterminate */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Indeterminate</div>
        <Progress value={undefined} className="animate-pulse" />
      </div>
    </div>
  )
}

