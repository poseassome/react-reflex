import React from 'react'
import styled from 'styled-components'

const FixedHeader = styled.div`
  background: #d2d2d2;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;


function Header() {

  return (
    <div>
      <FixedHeader>고정된 Header</FixedHeader>
    </div>
  )
}

export default Header