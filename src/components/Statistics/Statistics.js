import React from 'react'
import { ReflexContainer, ReflexElement } from 'react-reflex'
import styled from 'styled-components'
import ApexCharts from './ApexCharts'
import Rechart from './Rechart'

const Statistic = styled.div`
  background: #646090;
  height: 100%;
`


function Statistics() {
  return (
    <ReflexElement className='middle-pane' style={{height: 'calc(100vh - 40px)'}}>
      <Statistic>
        <ApexCharts />
        <br/>
        <br/>
        <Rechart />
      </Statistic>
    </ReflexElement>
  )
}

export default Statistics