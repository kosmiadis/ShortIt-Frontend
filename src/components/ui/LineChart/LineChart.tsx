/*
    DOCUMENTATION

    yAxis: The max value of the y axis
    yAxisPointsLength: The number of number referrences "checkpoints" the y axis will have.
    scaleX: The value unit -per... of the x axis.
    xAxis: A list representing patterned dates or numbers
    line: The styling of the chart line.
*/

import { useEffect, useRef, useState } from "react";
import type { LineI } from "./Line";
import Line from "./Line";


// interface LineChartI {
//     statisticTitle: string;
//     featuredStatistic: number | string;
//     yAxis: number;
//     yAxisPointsLength: number;
//     scaleX?: 'day' | 'month' | 'year' | number;
//     xAxis?: number[] | Date[] | string[];
//     points?: LineI[];
// }

// function returnYAxisPoints (yAxis: number, yAxisPointsLength: number) {
//     const yAxisPoints = [];
//     for (let i=0; i<yAxisPointsLength; i++) {
//         yAxisPoints.push(yAxis - i * (Math.round(yAxis/yAxisPointsLength)))
//     }
//     yAxisPoints.push(0);
//     return yAxisPoints
// }

export default function LineChart ({ 
    statisticTitle,
    featuredStatistic,
    yAxis,
    yAxisPointsLength,
    scaleX,
    xAxis,
    points
 }) {


    const lineChartRef = useRef<HTMLCanvasElement>(document.querySelector('#chart'));
    // if (!ctx) return <div>Something went wrong with loading the chart.</div>
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);


    //for loading canvas context.
    useEffect(() => {   
        if (lineChartRef !== null) {
            // console.log(lineChartRef.current!.getContext('2d'))
            setCtx(lineChartRef.current!.getContext('2d'));
        }
    }, [lineChartRef])

    //for linechart drawing
    useEffect(() => {
        if (ctx) {
            //add analytics line logic here.
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(100, 100);
            ctx.stroke();
        }
    }, [ctx])




    if (scaleX === 'day') return <></>
    if (scaleX === 'month') return <></>
    if (scaleX === 'year') return <></>

    // const yAxisPoints = returnYAxisPoints(yAxis, yAxisPointsLength);


    return <div className="bg-bg-secondary flex flex-col gap-md p-sm rounded-lg">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-text-secondary text-lg">{statisticTitle}</h2>
                <p className="text-text-primary font-bold text-4xl">{featuredStatistic}</p>
            </div>
            
            <select defaultValue={'day'} className="bg-bg-secondary rounded-lg">
                <option value={'day'}>
                    Day
                </option>
                <option value={'month'}>
                    Month
                </option>
                <option value={'year'}> 
                    Year
                </option>
            </select>
        </div>

        {/* Line Chart */}
        <canvas id="chart" ref={lineChartRef}>
        </canvas> 
        
    </div>
}


`<div  className="grid grid-cols-[min-content_1fr] grid-rows-[1fr_min-content] gap-sm text-text-secondary">
            {/* Y Axis */}
            <div className="flex row-start-1 row-end-[-1]">
                <ul className="flex flex-col items-center gap-sm">
                    {yAxisPoints.map(point => <li>{point}</li>)}
                </ul>
            </div>

            {/* Line Chart */}
            <div ref={lineChartRef} className="w-full h-full relative" style={{}}>
                {points?.map(point => <Line {...point} />)}
            </div>

            {/* X Axis */}
            <div>
                <ul className="flex items-center justify-around">
                    {xAxis?.map(xAxisPoint => <li>
                        {typeof xAxisPoint === 'number' && xAxisPoint}
                        {typeof xAxisPoint === 'string' && <span>{xAxisPoint}</span>}
                        {typeof xAxisPoint !== 'number' && typeof xAxisPoint !== 'string' && (new Date(xAxisPoint).getDate()+'/'+ new Date(xAxisPoint).getMonth()) }
                    </li>)}
                </ul>
            </div>

        </div>`
