import * as React from 'react'
import * as RechartsPrimitive from 'recharts'
import type { LegendPayload } from 'recharts/types/component/DefaultLegendContent'
import {
  Payload,
} from 'recharts/types/component/DefaultTooltipContent'
import type { Props as LegendProps } from 'recharts/types/component/Legend'

import { cn } from '../infra/cn'

export type CustomTooltipProps = {
  label?: string | number;
  payload?: ReadonlyArray<Payload<string, string>>;
  className?: string;
  nameKey?: string;
  color?: string;
  overrideItemConfig?: {
    [k in string]: {
      label?: React.ReactNode;
      icon?: React.ComponentType;
    };
  }
};

export type ChartLegendContentProps = {
  className?: string;
  hideIcon?: boolean;
  verticalAlign?: LegendProps['verticalAlign'];
  payload?: LegendPayload[];
  nameKey?: string;
  overrideItemConfig?: {
    [k in string]: {
      label?: React.ReactNode;
      icon?: React.ComponentType;
    };
  }
};

export function ChartContainer({
  id,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >['children'];
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  return (
    <div
      data-slot="chart"
      data-chart={chartId}
      className={cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      )}
      {...props}
    >
      <RechartsPrimitive.ResponsiveContainer>
        {children}
      </RechartsPrimitive.ResponsiveContainer>
    </div>
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip


export function ChartTooltipContent({
  payload,
  label,
  className,
  color,
  nameKey,
  overrideItemConfig = {},
}: CustomTooltipProps) {
  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        'border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl',
        className
      )}
    >
      <div className={cn('font-medium')}>{label}</div>
      <div className="grid gap-1.5">
        {payload.map((item) => {
          const key = `${nameKey || item.name || item.dataKey || 'value'}`
          const itemConfig = overrideItemConfig[key]
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey as string}
              className={cn(
                '[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5',
                'items-center'
              )}
            >
              {itemConfig?.icon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className={cn(
                    'shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)',
                    'h-2.5 w-2.5'
                  )}
                  style={
                      {
                        '--color-bg': indicatorColor,
                        '--color-border': indicatorColor,
                      } as React.CSSProperties
                  }
                />
              )}
              <div
                className={cn(
                  'flex flex-1 justify-between leading-none',
                  'items-center'
                )}
              >
                <div className="grid gap-1.5">
                  <span className="text-muted-foreground">
                    {itemConfig?.label || item.name}
                  </span>
                </div>
                {item.value && (
                  <span className="text-foreground font-mono font-medium tabular-nums">
                    {item.value.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

export function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
  overrideItemConfig = {},
}: ChartLegendContentProps) {
  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = overrideItemConfig[key]

        return (
          <div
            key={item.value}
            className={cn(
              '[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3'
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

export {
  ChartTooltip,
  ChartLegend,
}
