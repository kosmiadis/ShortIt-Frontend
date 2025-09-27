import { useState } from 'react'
import { LineChart, Line, Legend, XAxis, YAxis } from 'recharts'

export default function TrafficChart () {

    const [data, setData] = useState([
        {name: 'January', uv: 400, pv: 2400 },
        {name: 'February', uv: 100, pv: 700 },
        {name: 'March', uv: 200, pv: 2200 },
        {name: 'April', uv: 500, pv: 200 },
        {name: 'May', uv: 1100, pv: 1500 },
        {name: 'June', uv: 800, pv: 725 },
        {name: 'July', uv: 2200, pv: 2200 },
        {name: 'August', uv: 200, pv: 20 },
      
      ]);




    return <div className='w-full overflow-x-scroll py-sm'>
      <LineChart width={1000} height={200} data={data}>
      <Line dataKey="uv" />
      <YAxis dataKey="uv"/>
      <XAxis dataKey="name" />
      </LineChart>
    </div>
}