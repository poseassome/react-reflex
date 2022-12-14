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
import React from 'react';



const halfWidth = window.screen.width / 2;
const minHeight = window.screen.height / 4;
const minWidthLeftPane = window.screen.width / 8;



function App() {

  return (
    <div className="App">
      <Reset />

{/*   TEST (1)   */}
      {/* <ReflexContainer style={{ height: "100vh" }} orientation="vertical">
        <ReflexElement className="left-pane">
          <div className="pane-content">
            <label>Left Pane (resizable)</label>
          </div>
        </ReflexElement>

        <ReflexSplitter
          style={{
            backgroundColor: "#ccdff2",
            textAlign: "center",
            width: "15px"
          }}
        >
          <div class="splitter">o o o</div>
        </ReflexSplitter>

        <ReflexElement className="right-pane" minSize="200" maxSize="800">
          <div className="pane-content">
            <div style={{ display: "flex" }}>
              <label>
                Right Pane (resizable)
                <br />
                <br />
                minSize = 200px
                <br />
                maxSize = 800px
              </label>
            </div>
          </div>
        </ReflexElement>
      </ReflexContainer> */}



{/*   TEST (2)   */}
      {/* <ReflexContainer orientation="vertical" style={{height: '100vh'}}>
        <ReflexElement className="left-pane">
          <div className="pane-content">
            <label>
              Left Pane (resizable)
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter/>

        <ReflexElement className="right-pane"
          minSize="200"
          maxSize="800">
          <div className="pane-content">
            <label>
              Right Pane (resizable)
              <br/>
              <br/>
              minSize = 200px
              <br/>
              maxSize = 800px
            </label>
            </div>
        </ReflexElement>
      </ReflexContainer> */}




{/*   Resizable Layout   */}
      <ReflexContainer orientation='horizontal'>
        {/* ?????? Header */}
        <ReflexElement>
          <Header />
        </ReflexElement>

        {/* Header ?????? ?????? */}
        <ReflexElement>
          {/* ?????? ?????? resizable */}
          <ReflexContainer orientation="vertical" style={{height: 'calc(100vh - 40px)'}}>
            {/* ?????? nav */}
            <ReflexElement className='left-pane' minSize='100' maxSize='300' style={{height: 'calc(100vh - 40px)', overflow: 'hidden'}} propagateDimensions={true} propagateDimensionsRate={200} >
              <Nav />
            </ReflexElement>

            <ReflexSplitter className="reflex-thin" />

              {/* ?????? content */}
              <ReflexElement  className='middle-pane' style={{height: 'calc(100vh - 40px)'}}>
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

              <ReflexSplitter className="reflex-thin" />

              {/* ????????? content */}
              <ReflexElement className='right-pane' style={{height: 'calc(100vh - 40px)'}} minSize={minWidthLeftPane} maxSize={window.screen.width / 6} >
                <ReflexContainer orientation='horizontal'>
                  <ReflexElement minSize={minHeight}>
                    <ContentThree />
                  </ReflexElement>

                  <ReflexSplitter className="reflex-thin" />

                  <ReflexElement minSize={minHeight}>
                    <Calllist />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>

          </ReflexContainer>

        </ReflexElement>
      </ReflexContainer>


    </div>
  );
}

export default App;
