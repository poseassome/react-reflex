import './App.css';
import { Reset } from 'styled-reset';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import ContentOne from './components/Content1/Content_one'
import ContentTwo from './components/Content2/Content_two'
import ContentThree from './components/Content3/Content_three'
import Calllist from './components/Calllist/Calllist'



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



      <ReflexContainer orientation='horizontal'>
        {/* 고정 Header */}
        <ReflexElement>
          <Header />
        </ReflexElement>

        {/* Header 아래 내용 */}
        <ReflexElement>
          {/* 내용 내부 resizable */}
          <ReflexContainer orientation="vertical" style={{height: 'calc(100vh - 40px)'}}>
            {/* 왼쪽 nav */}
            <ReflexElement className='left-pane' minSize='100' maxSize='300' style={{height: 'calc(100vh - 40px)', overflow: 'hidden'}} propagateDimensions={true} propagateDimensionsRate={200} >
              <Nav />
            </ReflexElement>

            <ReflexSplitter className="reflex-thin" />

            {/* 중간 content */}
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

            {/* 오른쪽 content */}
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




          {/* <ReflexContainer orientation='vertical' style={{height:'500px'}}>
            <ReflexElement minSize='100'>
              <div>test1</div>
            </ReflexElement>

            <ReflexSplitter  className="reflex-thin" />

            <ReflexElement minSize='400'>
              <ReflexContainer orientation='horizontal'>
                <ReflexElement  minSize='100'><div>test3</div></ReflexElement>

                <ReflexSplitter />

                <ReflexElement  minSize='200'><div>test4</div></ReflexElement>
              </ReflexContainer>
            </ReflexElement>
          </ReflexContainer> */}



        </ReflexElement>
      </ReflexContainer>


    </div>
  );
}

export default App;
