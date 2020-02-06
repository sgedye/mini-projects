import React from 'react'
import styled from 'styled-components'
import Description from '../Elements/Description'

import birds from '../imgs/birds.jpg'
import color from '../imgs/color.png'
import counter from '../imgs/counter.png'
import quotes from '../imgs/quotes.png'
import svgWriting from '../imgs/svg-writing.png'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const StyledDiv = styled.div`
  position: relative;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const Title = styled.h3`
  text-shadow: 1px 1px 1px #fff;
  font-size: 1em;
  margin: 10px 0 0 0;
  @media screen and (min-width: 500px) {
    font-size: 1.5em;
    margin: 20px 0 0 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.8em;
    margin: 30px 0 0 0;
  }
  @media screen and (min-width: 1440px) {
    font-size: 2em;
    margin: 40px 0 0 0;
  }
  @media screen and (min-width: 2560px) {
    font-size: 4em;
    margin: 60px 0 0 0;
  }
`
const Desc = styled.p`
  text-shadow: 1px 1px 1px #fff;
  font-size: 0.8em;
  font-weight: 400;
  margin: 10px 0;
  @media screen and (min-width: 500px) {
    font-size: 1em;
    font-weight: 500;
    margin: 15px 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.1em;
    margin: 18px 0;
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.2em;
    margin: 20px 0;
  }
  @media screen and (min-width: 2560px) {
    font-size: 2.8em;
    margin: 40px 0;
  }
`
const Button = styled.button`
  color: #ccc;
  font-weight: bold;
  background: ${props => props.demo ? 'blue' : 'green'};
  border: ${props => props.demo ? '1px solid darkblue' : '1px solid darkgreen'};
  border-radius: 4px;
  box-shadow: 1px 1px 3px #111;
  &:hover { 
    cursor: pointer;
    color: #fff;
    box-shadow: none;
    transform: translate(1px, 1px);
    -webkit-transform: translate(1px, 1px);
  }
  font-size: 0.8em;
  padding: 3px 8px;
  margin: 0px 5px;
  @media screen and (min-width: 500px) {
    font-size: 1em;
    padding: 5px 10px;
    margin: 5px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3em;
    margin: 0 15px;
  }
`

function Project() {
  return (
    <StyledGrid>
      <StyledDiv>
        <Image src={color} alt="Colour Picker" />
        <Description>
          <Title>Colour Picker</Title>
          <Desc>JavaScript, HTML, SCSS</Desc>
          <span>
            <a href="https://sgedye.github.io/color-picker" target="_blank" rel="noopener noreferrer">
              <Button demo>DEMO</Button>
            </a>
            <a href="https://github.com/sgedye/color-picker" target="_blank" rel="noopener noreferrer">
              <Button>CODE</Button>
            </a>
          </span>
        </Description>
      </StyledDiv>
      <StyledDiv>
        <Image src={birds} alt="Birds" />
      </StyledDiv>
      <StyledDiv>
        <Image src={quotes} alt="Quote Machine" />
        <Description>
          <Title>Quote Machine</Title>
          <Desc>ReactJS, HTML, SCSS</Desc>
          <span>
            <a href="https://sgedye.github.io/quotes" target="_blank" rel="noopener noreferrer">
              <Button demo>DEMO</Button>
            </a>
            <a href="https://github.com/sgedye/quotes" target="_blank" rel="noopener noreferrer">
              <Button>CODE</Button>
            </a>
          </span>
        </Description>
      </StyledDiv>
      <StyledDiv>
        <Image src={birds} alt="Birds" />
        <Description>
          <h3>SVG Animation</h3>
          <p>HTML, SCSS</p>
          <span>
          <button src="https://sgedye.github.io/quotes">DEMO</button>
          <button>CODE</button>
          </span>
        </Description>
      </StyledDiv>
      <StyledDiv>
        <Image src={birds} alt="birds" />
        <Description>HOWDY</Description>
      </StyledDiv>
      <StyledDiv>
        <Image src={counter} alt="React Counter" />
        <Description>
          <Title>React Counter</Title>
          <Desc>ReactJS, HTML, CSS</Desc>
          <span>
            <a href="https://sgedye.github.io/counter" target="_blank" rel="noopener noreferrer">
              <Button demo>DEMO</Button>
            </a>
            <a href="https://github.com/sgedye/counter" target="_blank" rel="noopener noreferrer">
              <Button>CODE</Button>
            </a>
          </span>
        </Description>
      </StyledDiv>
      <StyledDiv>
        <Image src={birds} alt="Birds" />
        <Description>
          <Title>Budget App</Title>
          <Desc>JavaScript, HTML, CSS</Desc>
          <span>
          <Button demo>DEMO</Button>
          <Button>CODE</Button>
          </span>
        </Description>
      </StyledDiv>
      <StyledDiv>
        <Image src={svgWriting} alt="SVG Writing" />
        <Description>
          <Title>SVG Writing</Title>
          <Desc>HTML, CSS</Desc>
          <span>
            <a href="https://sgedye.github.io/svg-writing" target="_blank" rel="noopener noreferrer">
              <Button demo>DEMO</Button>
            </a>
            <a href="https://github.com/sgedye/svg-writing" target="_blank" rel="noopener noreferrer">
              <Button>CODE</Button>
            </a>
          </span>
        </Description>
      </StyledDiv>
    </StyledGrid>
  )
}

export default Project