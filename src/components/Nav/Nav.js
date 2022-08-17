import React, {useEffect} from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'

const NavigationBar = styled.ul`
  /* height: calc(100vh - 40px); */
  height: 100%;
  background: beige;
  width: 100%;
`

const NavigationList = styled.li`
  height: 30px;
`


function Nav(props) {

  const [resizeView, setResizeView] = useState(false);

  let { width, height } = props.dimensions

  const navigate = useNavigate();

  const delay = 500;
  let timer = null;

  const handleResize = () => {
    setResizeView(true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setResizeView(false)
    }, delay)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  useEffect(() => {
    props.setTempwidth(width);
  }, [width])

  // useEffect(() => {
  //   if(resizeView) {
  //     props.setTestwidth(width);
  //     props.setTempwidth(width);
  //   }
  //   // else props.setTestwidth(300);
  // }, [resizeView])



  return (
    <div style={{height: '100%'}} id='testdiv'>
      <NavigationBar>
        <NavigationList onClick={() => navigate('/')}>{width > 101 ? "메뉴 1 (Home)" : 'icon 1 (Home)'}</NavigationList>
        <NavigationList onClick={() => navigate('/statistics')}>{width > 101 ? "메뉴 2 (Statistics)" : 'icon 2 (Statistics)'}</NavigationList>
        <NavigationList onClick={() => navigate('/websocket')}>{width > 101 ? "메뉴 3 (webSocket)" : 'icon 3 (webSocket)'}</NavigationList>
        <NavigationList onClick={() => navigate('/calendar')}>{width > 101 ? "메뉴 4 (Calendar)" : 'icon 4 (Calendar)'}</NavigationList>
        <NavigationList>{width > 101 ? "메뉴 5" : 'icon 5'}</NavigationList>
        <NavigationList>{width > 101 ? "메뉴 6" : 'icon 6'}</NavigationList>


        {/* <NavigationList /> */}

        <br />
        <div>{width}</div>
      </NavigationBar>
    </div>
  )
}

export default Nav