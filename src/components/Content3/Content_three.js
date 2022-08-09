import React from 'react'
import styled from 'styled-components'


const ContentDiv = styled.div`
  background: #eeee88;
  height: 100%;
`

function Content_three(props) {

  const { width, height } = props.dimensions

  return (
    <div style={{height: '100%'}}>
      <ContentDiv>
        Content_three
        <br />
        {width}
      </ContentDiv>
    </div>
  )
}

export default Content_three