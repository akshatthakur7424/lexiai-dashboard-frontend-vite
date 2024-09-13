import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { contracts: "chrome", visitors: 475, fill: "var(--color-chrome)" },
  { contracts: "firefox", visitors: 287, fill: "var(--color-firefox)" },
]

export const ChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Pending Contracts : ",
    color: "hsl(var(--chart-1))",
  },
  firefox: {
    label: "Expired Contracts : ",
    color: "hsl(var(--chart-2))",
  }
} 

const PieChartComponent = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col w-full h-full rounded-none">
      <CardHeader className="items-center pb-0">
        <CardTitle className='text-center text-xl' >Contracts Division</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={ChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="contracts"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Contracts
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        
        <div className="leading-none text-muted-foreground text-center">
          Showing current contracts division
        </div>
      </CardFooter>
    </Card>
  )
}


export default PieChartComponent;