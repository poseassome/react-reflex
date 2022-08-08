import React from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
  background: #60eeaa;
  height: 100%;
`


function Callist() {
  return (
    <div style={{height: '100%'}}>
      <ContentDiv>
        (( 통화내역 ))
      </ContentDiv>
    </div>
  )
}

export default Callist