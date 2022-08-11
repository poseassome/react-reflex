import React from 'react'
import styled from 'styled-components';

import { Area, AreaChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'
import { BarChart, Bar, Cell, Legend, ResponsiveContainer } from 'recharts';


const Ratiobar = styled.div`
  width: 50%;
  height: 6px;
  background: #8884d8;
  border-radius: 3px;
`

function Rechart() {

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];


  return (
    <div style={{display: 'flex'}}>
      <p style={{color: '#fff', fontSize: '20px', marginRight: '30px'}}>ReChart</p>

      <div style={{background: '#fff', marginRight: '10px'}}>
        <AreaChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          style={{background: '#fff'}}
        >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={false} contentStyle={{background: '#fff', borderRadius: '20px', boxShadow: '0 2px 3px 3px rgba(0,0,0,0.2)'}}  wrapperStyle={{width: '200px'}} />
          <Area type="line" dataKey="uv" stroke="#8884d8" fill='url(#colorUv)'  />
        </AreaChart>

        <div style={{width: '700px'}}>
          <Ratiobar />
        </div>
      </div>



      <div style={{background: '#fff'}}>
        <div>
          
        </div>

        <BarChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          style={{background: '#fff'}}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={false} contentStyle={{background: '#fff', borderRadius: '20px', boxShadow: '0 2px 3px 3px rgba(0,0,0,0.2)'}}  wrapperStyle={{width: '200px'}} />
          <Bar dataKey="pv" fill="#8884d8" barSize={20} />
        </BarChart>
      </div>

    </div>
  )
}

export default Rechart