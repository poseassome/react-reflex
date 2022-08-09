import React from 'react'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'

import Calllist from '../Calllist/Calllist'
import ContentOne from '../Content1/Content_one'
import ContentTwo from '../Content2/Content_two'
import ContentThree from '../Content3/Content_three'


const halfWidth = window.screen.width / 2;
const minHeight = window.screen.height / 4;
const minWidthLeftPane = window.screen.width / 8;


function MiddleComponent(props) {


  return (
    <React.Fragment>
      <ReflexContainer orientation='vertical'>

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

        <ReflexElement className='right-pane' style={{height: 'calc(100vh - 40px)'}} minSize={minWidthLeftPane} maxSize={window.screen.width / 6} >
          <ReflexContainer orientation='horizontal'>
            <ReflexElement style={{overflow: 'hidden'}} minSize={minHeight} propagateDimensions={true} propagateDimensionsRate={200}>
              <ContentThree />
            </ReflexElement>

            <ReflexSplitter className="reflex-thin" />

            <ReflexElement minSize={minHeight}>
              <Calllist />
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>

      </ReflexContainer>

      </React.Fragment>

  )
}

export default MiddleComponent