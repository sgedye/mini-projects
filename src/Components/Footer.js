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
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: default;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 500px) {
    text-align: left;
  }
`

const StyledContent = styled.span`
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
  /* & > span:hover {
    color: blue;
    -webkit-transition: transform 700ms linear;
    -moz-transition: transform 700ms linear;
    -ms-transition: transform 700ms linear;
    -o-transition: transform 700ms linear;
    transition: transform 700ms linear;        
  } */
`

function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="https://sgedye.github.io" target="_blank" rel="noreffer noopener">
        <StyledContent><span>©</span> sgedye</StyledContent>
      </StyledLink>
    </StyledFooter>
  )
}

export default Footer