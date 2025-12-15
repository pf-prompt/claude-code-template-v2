/**
 * ColorsSection Component
 * Displays all theme colors organized by category
 */

import { ColorSwatch } from './ColorSwatch'

export function ColorsSection() {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Colors</h3>
      
      {/* Foundation - 2 per row */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Foundation</h4>
        <div className="grid grid-cols-3 gap-4">
          <ColorSwatch bgClass="bg-background" label="background" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-foreground" label="foreground" /></div>
        </div>
      </div>

      {/* Semantic - 2 per row */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Semantic</h4>
        <div className="grid grid-cols-3 gap-4">
          <ColorSwatch bgClass="bg-primary" label="primary" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-primary-foreground" label="primary-foreground" /></div>
          <ColorSwatch bgClass="bg-secondary" label="secondary" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-secondary-foreground" label="secondary-foreground" /></div>
          <ColorSwatch bgClass="bg-muted" label="muted" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-muted-foreground" label="muted-foreground" /></div>
          <ColorSwatch bgClass="bg-accent" label="accent" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-accent-foreground" label="accent-foreground" /></div>
          <ColorSwatch bgClass="bg-destructive" label="destructive" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-destructive-foreground" label="destructive-foreground" /></div>
        </div>
      </div>

      {/* Component Surfaces - 2 per row */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Component Surfaces</h4>
        <div className="grid grid-cols-3 gap-4">
          <ColorSwatch bgClass="bg-card" label="card" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-card-foreground" label="card-foreground" /></div>
          <ColorSwatch bgClass="bg-popover" label="popover" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-popover-foreground" label="popover-foreground" /></div>
          <ColorSwatch bgClass="bg-sidebar" label="sidebar" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-sidebar-foreground" label="sidebar-foreground" /></div>
          <ColorSwatch bgClass="bg-sidebar-primary" label="sidebar-primary" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-sidebar-primary-foreground" label="sidebar-primary-foreground" /></div>
          <ColorSwatch bgClass="bg-sidebar-accent" label="sidebar-accent" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-sidebar-accent-foreground" label="sidebar-accent-foreground" /></div>
          <ColorSwatch bgClass="bg-sidebar-border" label="sidebar-border" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-sidebar-ring" label="sidebar-ring" /></div>
          <ColorSwatch bgClass="bg-surface" label="surface" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-surface-foreground" label="surface-foreground" /></div>
        </div>
      </div>

      {/* Control Elements - 3 per row */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Control Elements</h4>
        <div className="grid grid-cols-3 gap-4">
          <ColorSwatch bgClass="bg-border" label="border" />
          <ColorSwatch bgClass="bg-input" label="input" />
          <ColorSwatch bgClass="bg-ring" label="ring" />
        </div>
      </div>

      {/* Data Visualization - 3 per row */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Data Visualization</h4>
        <div className="grid grid-cols-3 gap-4">
          <ColorSwatch bgClass="bg-chart-1" label="chart-1" />
          <ColorSwatch bgClass="bg-chart-2" label="chart-2" />
          <ColorSwatch bgClass="bg-chart-3" label="chart-3" />
          <ColorSwatch bgClass="bg-chart-4" label="chart-4" />
          <ColorSwatch bgClass="bg-chart-5" label="chart-5" />
        </div>
      </div>

      {/* Code & Selection - 2 per row */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Code & Selection</h4>
        <div className="grid grid-cols-3 gap-4">
          <ColorSwatch bgClass="bg-code" label="code" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-code-foreground" label="code-foreground" /></div>
          <ColorSwatch bgClass="bg-code-highlight" label="code-highlight" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-code-number" label="code-number" /></div>
          <ColorSwatch bgClass="bg-selection" label="selection" />
          <div className="col-span-2"><ColorSwatch bgClass="bg-selection-foreground" label="selection-foreground" /></div>
        </div>
      </div>
    </div>
  )
}

