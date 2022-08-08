import React from 'react'
import styled from 'styled-components'


const NavigationBar = styled.ul`
  /* height: calc(100vh - 40px); */
  height: 100%;
  background: beige;
`

const NavigationList = styled.li`
  height: 30px;
`


function Nav() {
  return (
    <div style={{height: '100%'}}>
      <NavigationBar>
        <NavigationList>메뉴 1</NavigationList>
        <NavigationList>메뉴 2</NavigationList>
        <NavigationList>메뉴 3</NavigationList>
        <NavigationList>메뉴 4</NavigationList>
        <NavigationList>메뉴 5</NavigationList>
        <NavigationList>메뉴 6</NavigationList>
      </NavigationBar>
    </div>
  )
}

export default Nav