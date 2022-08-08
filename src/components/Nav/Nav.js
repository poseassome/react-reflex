import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'


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

  return (
    <div style={{height: '100%'}}>
      <NavigationBar width>
        <NavigationList>{width > 101 ? "메뉴 1" : 'icon 1'}</NavigationList>
        <NavigationList>{width > 101 ? "메뉴 2" : 'icon 2'}</NavigationList>
        <NavigationList>{width > 101 ? "메뉴 3" : 'icon 3'}</NavigationList>
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