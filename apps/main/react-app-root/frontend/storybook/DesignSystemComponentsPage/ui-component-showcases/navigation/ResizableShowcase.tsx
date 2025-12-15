/**
 * Resizable Showcase
 * Resizable: horizontal split, vertical split, nested
 */

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../../../ui-components/Resizable'

export function ResizableShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Horizontal Split */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">Horizontal Split</div>
        <ResizablePanelGroup direction="horizontal" className="h-32 rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-foreground">Left Panel</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-foreground">Right Panel</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      {/* Vertical Split */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">Vertical Split</div>
        <ResizablePanelGroup direction="vertical" className="h-48 rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-foreground">Top Panel</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-foreground">Bottom Panel</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

