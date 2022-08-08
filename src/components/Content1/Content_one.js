import React from 'react'
import styled from 'styled-components'


const ContentDiv = styled.div`
  background: #148595;
  height: 100%;
`

function Content_one() {
  return (
    <div style={{height: '100%'}}>
      <ContentDiv>
        Content_one
      </ContentDiv>
    </div>
  )
}

export default Content_one