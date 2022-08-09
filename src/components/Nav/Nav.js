import React from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'

const NavigationBar = styled.ul`
  /* height: calc(100vh - 40px); */
  height: 100%;
  background: beige;
`

const NavigationList = styled.li`
  height: 30px;
`


function Nav(props) {

  const { width, height } = props.dimensions

  const navigate = useNavigate();

  return (
    <div style={{height: '100%'}}>
      <NavigationBar>
        <NavigationList onClick={() => navigate('/')}>{width > 101 ? "메뉴 1 (Home)" : 'icon 1 (Home)'}</NavigationList>
        <NavigationList onClick={() => navigate('/statistics')}>{width > 101 ? "메뉴 2 (Statistics)" : 'icon 2 (Statistics)'}</NavigationList>
        <NavigationList onClick={() => navigate('/websocket')}>{width > 101 ? "메뉴 3 (webSocket)" : 'icon 3 (webSocket)'}</NavigationList>
        <NavigationList>{width > 101 ? "메뉴 4" : 'icon 4'}</NavigationList>
        <NavigationList>{width > 101 ? "메뉴 5" : 'icon 5'}</NavigationList>
        <NavigationList>{width > 101 ? "메뉴 6" : 'icon 6'}</NavigationList>

        <br />
        <div>{width}</div>
      </NavigationBar>
    </div>
  )
}

export default Nav