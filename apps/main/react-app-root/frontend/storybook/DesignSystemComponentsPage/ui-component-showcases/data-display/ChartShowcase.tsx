/**
 * Chart Showcase
 * Charts: line, bar, pie, area
 */

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../../../ui-components/Chart'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const chartData = [
  { month: 'Jan', value: 186 },
  { month: 'Feb', value: 305 },
  { month: 'Mar', value: 237 },
]

export function ChartShowcase() {
  const chartColor = 'var(--chart-1)'
  
  return (
    <div className="w-full flex flex-col gap-4">
      
      {/* Bar Chart */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Bar Chart</div>
        <ChartContainer className="h-[150px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent overrideItemConfig={{
              value: {
                label: 'Value',
              },
            }} />} />
            <Bar dataKey="value" fill={chartColor} radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
      
      {/* Area Chart */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Area Chart</div>
        <ChartContainer className="h-[150px] w-full">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent overrideItemConfig={{
              value: {
                label: 'Value',
              },
            }}/>} />
            <Area type="monotone" dataKey="value" fill={chartColor} stroke={chartColor} />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  )
}

