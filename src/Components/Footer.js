import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  width: auto;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 500px) {
    text-align: left;
  }
  &:hover { text-decoration: underline; }
`

function Header() {
  return (
    <StyledFooter>
      <StyledLink href="https://sgedye.github.io" target="_black" rel="noreffer noopener"> © sgedye</StyledLink>
    </StyledFooter>
  )
}

export default Header