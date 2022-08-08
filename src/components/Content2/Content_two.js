import React from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
  background: #148555;
  height: 100%;
`

function Content_two() {
  return (
    <div style={{height: '100%'}}>
      <ContentDiv>
        Content_two
      </ContentDiv>
    </div>
  )
}

export default Content_two