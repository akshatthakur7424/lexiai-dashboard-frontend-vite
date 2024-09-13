import React, { useState } from "react";


import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

import { Button } from "./ui/button";

export const description = "A bar chart with a label";

const chartData1 = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const chartData2 =  [
  { month: "January", desktop: 250, mobile: 150 },
  { month: "February", desktop: 180, mobile: 200 },
  { month: "March", desktop: 200, mobile: 100 },
  { month: "April", desktop: 150, mobile: 170 },
  { month: "May", desktop: 220, mobile: 120 },
  { month: "June", desktop: 180, mobile: 140 },
];
const chartData3 = [
  
    { month: "January", desktop: 100, mobile: 250 },
    { month: "February", desktop: 200, mobile: 180 },
    { month: "March", desktop: 150, mobile: 220 },
    { month: "April", desktop: 200, mobile: 100 },
    { month: "May", desktop: 120, mobile: 180 },
    { month: "June", desktop: 180, mobile: 150 }, 
  
];

const chartConfig = {
  desktop: {
    label: "Credits ",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Usage",
    color: "hsl(var(--chart-2))",
  },
}

const BarChartComponent = () => {
  const [btn1Clicked, setBtn1Clicked] = useState(true);
  const [btn2Clicked, setBtn2Clicked] = useState(false);
  const [btn3Clicked, setBtn3Clicked] = useState(false);
  const [chartData,setCharData] = useState(chartData1)

  const handleBtn1Click = () => {
    setBtn1Clicked(true);
    setBtn2Clicked(false);
    setBtn3Clicked(false);
    setCharData(chartData1);
  };
  const handleBtn2Click = () => {
    setBtn1Clicked(false);
    setBtn2Clicked(true);
    setBtn3Clicked(false);
    setCharData(chartData2);

  };
  const handleBtn3Click = () => {
    setBtn1Clicked(false);
    setBtn2Clicked(false);
    setBtn3Clicked(true);
    setCharData(chartData3);

  };

  return (
    <>
      <div className="w-full h-full flex flex-col ">
        <div className="w-full h-8 z-20 flex items-center justify-center">
          <Button 
            className={`w-1/3 rounded-none bg-white border border-slate-300 text-black hover:text-white ${
              btn1Clicked ? "bg-gray-800 text-white" : "bg-white"
            }`}
            onClick={handleBtn1Click}
          >
            LeXi Draft
          </Button>
          <Button
            className={`w-1/3 rounded-none bg-white border border-slate-300 text-black hover:text-white ${
              btn2Clicked ? "bg-gray-800 text-white" : "bg-white"
            }`}
            onClick={handleBtn2Click}
          >
            LeXi IQ
          </Button>
          <Button
            className={`w-1/3 rounded-none bg-white border border-slate-300 text-black hover:text-white ${
              btn3Clicked ? "bg-gray-800 text-white" : "bg-white"
            }`}
            onClick={handleBtn3Click}
          >
            LeXi E-Mohar
          </Button>
        </div>

        {/* Bar Chart Code */}

        <div className="w-full h-auto flex items-center justify-center">
          <Card className="rounded-none w-4/5 border-none " >
            <CardHeader>
              <CardTitle className="text-xl" >Credits Chart</CardTitle>
              {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>

            {/* <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </>
  );
};

export default BarChartComponent;

