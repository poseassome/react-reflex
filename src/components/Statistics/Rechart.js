import React, { useState } from 'react'
import styled from 'styled-components';

import { Area, AreaChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'
import { BarChart, Bar, Cell, Legend } from 'recharts';



const IndicatorContainter = styled.div`
  width: 100px;
  height: 36px;
  background: #d2d2d2;
  border-radius: 5px;
  padding: 2px;
  
`

const IndicatorBox = styled.div`
  width: 46px;
  height: 32px;
  line-height: 32px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  transform: ${(props) => (props.content === 'A' ? 'translateX(0px)' : 'translateX(50px)')};
  /* transform: translateX(2px); */
  transition: transform 300ms cubic-bezier(0.3, 0, 0, 1) 0ms;
`

const IndicatorType = styled.div`
  width: 48px;
  height: 32px;
  color: #a5a5a5;
  line-height: 32px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #d9d9d9;
  }
`

const ChoiceType = styled(IndicatorType)`
  color: #000;
  cursor: default;
  font-weight: 700;
  &:hover {
    background: none;
  }
  position: absolute;
`

const Ratiobar = styled.div`
  width: 50%;
  height: 6px;
  background: #8884d8;
  border-radius: 3px;
`

function Rechart() {

  const [changeData, setChangeData] = useState('A');

  const onClick = (type) => {
    setChangeData(type);
  }

  const dataA = [
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


  const dataB = [
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ]


  return (
    <div style={{display: 'flex'}}>
      <p style={{color: '#fff', fontSize: '20px', marginRight: '30px'}}>ReChart</p>

      <div style={{background: '#fff', marginRight: '10px'}}>
        <AreaChart
          width={700}
          height={400}
          data={dataA}
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
        {/* 일반 toggle */}
        {/* <IndicatorContainter>
          <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
            <IndicatorBox content={changeData} />

            <IndicatorType onClick={() => onClick('A')}>A</IndicatorType>
            <IndicatorType onClick={() => onClick('B')}>B</IndicatorType>
          </div>
        </IndicatorContainter> */}


        {/* Indicator 위 글자표시 */}
        <IndicatorContainter>
          <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
            <IndicatorBox content={changeData} />

            { changeData === 'A' ? 
                <ChoiceType>A</ChoiceType>
              :
                <IndicatorType onClick={() => onClick('A')}>A</IndicatorType>
            }
            { changeData === 'B' ?
                <ChoiceType style={{marginLeft: '50px'}}>B</ChoiceType>
              :
                <IndicatorType style={{marginLeft: '50px'}} onClick={() => onClick('B')}>B</IndicatorType>
            }
          </div>
        </IndicatorContainter>



        <BarChart
          width={700}
          height={400}
          data={changeData === 'A' ? dataA : dataB}
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