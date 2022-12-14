import './App.css';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

import ContentOne from './components/Content1/Content_one'
import ContentTwo from './components/Content2/Content_two'
import ContentThree from './components/Content3/Content_three'
import Calllist from './components/Calllist/Calllist'

import Statistics from './components/Statistics/Statistics';
import MiddleComponent from './components/MiddleComponent/MiddleComponent';
import WebSocket from './components/WebSocket/WebSocket';
import CalendarCustom from './components/Calendar/CalendarCustom';
import { useRef, useState } from 'react';
import { useEffect } from 'react';



const halfWidth = window.screen.width / 2;
const minHeight = window.screen.height / 4;
const minWidthLeftPane = window.screen.width / 8;



function App() {

  const [testwidth, setTestwidth] = useState(300);
  const [tempwidth, setTempwidth] = useState(testwidth);


  return (
    <div className="App" style={{minWidth: '1200px', position: 'relative'}}>
      <Reset />

{/*   Resizable Layout   */}
      <ReflexContainer orientation='horizontal' >
        {/* 고정 Header */}
        <ReflexElement>
          <Header />
        </ReflexElement>

        {/* Header 아래 내용 */}
        <ReflexElement>

          {/* 내용 내부 resizable */}
          <ReflexContainer orientation="vertical" style={{height: 'calc(100vh - 40px)'}} windowResizeAware={true}>
            {/* 왼쪽 nav */}
            <ReflexElement className='left-pane' style={{height: 'calc(100vh - 40px)', overflow: 'hidden'}}
              minSize='100' maxSize={testwidth} propagateDimensions={true} >
              <Nav setTestwidth={setTestwidth} setTempwidth={setTempwidth} />
            </ReflexElement>

            <ReflexSplitter className="reflex-thin" onStartResize={() => setTestwidth(300)} onStopResize={() => setTestwidth(tempwidth)} />

              {/* 중간 content */}
              {/* <ReflexElement  className='middle-pane' style={{height: 'calc(100vh - 40px)'}}>
                <ReflexContainer orientation='horizontal'>
                  <ReflexElement minSize={minHeight}>
                    <ContentOne />
                  </ReflexElement>
                  
                  <ReflexSplitter className="reflex-thin" />

                  <ReflexElement  minSize={minHeight}>
                    <ContentTwo />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>

              <ReflexSplitter className="reflex-thin" /> */}

              {/* 오른쪽 content */}
              {/* <ReflexElement className='right-pane' style={{height: 'calc(100vh - 40px)'}} minSize={minWidthLeftPane} maxSize={window.screen.width / 6} >
                <ReflexContainer orientation='horizontal'>
                  <ReflexElement minSize={minHeight}>
                    <ContentThree />
                  </ReflexElement>

                  <ReflexSplitter className="reflex-thin" />

                  <ReflexElement minSize={minHeight}>
                    <Calllist />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement> */}

              <ReflexElement>
                <Routes>
                  <Route path='/' element={<MiddleComponent />} />
                  <Route path='/statistics' element={<Statistics />} />
                  <Route path='/websocket' element={<WebSocket />} />
                  <Route path='/calendar' element={<CalendarCustom />} />
                </Routes>
              </ReflexElement>

          </ReflexContainer>

        </ReflexElement>
      </ReflexContainer>


    </div>
  );
}

export default App;
