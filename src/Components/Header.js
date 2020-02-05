import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function Header() {
  return (
    <StyledHeader>
      <h1>Mini Projects</h1>
    </StyledHeader>
  )
}

export default Header